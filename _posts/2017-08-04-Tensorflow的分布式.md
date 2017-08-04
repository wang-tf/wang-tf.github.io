---
layout: post
title: Tensorflow的分布式探索
date: 2017-08-04 16:24:00
categories:  机器学习
tags: Tensorflow
---

* content
{:toc}


>参考网站：
- [http://www.tensorflow123.cn/distributetf.html](http://www.tensorflow123.cn/distributetf.html)
- [https://github.com/thewintersun/distributeTensorflowExample](https://github.com/thewintersun/distributeTensorflowExample)

# 前言
从来没有接触过分布式，所以一步一个坑的爬过了Tensorflow的分布式，总结一下经验。

# 1. 代码部分
## 1.1. 先写需要的参数
```
FLAGS = tf.app.flags.FLAGS
tf.app.flags.DEFINE_string("ps_hosts", "10.85.125.105:2222","Comma-separated list of hostname:port pairs")
tf.app.flags.DEFINE_string("worker_hosts", "10.85.125.105:2223,10.85.125.168:2224",
                           "Comma-separated list of hostname:port pairs")
tf.app.flags.DEFINE_string("job_name", "", "One of 'ps', 'worker'")
tf.app.flags.DEFINE_integer("task_index", 0, "Index of task within the job")
tf.app.flags.DEFINE_integer("issync", 0, "是否采用分布式的同步模式，1表示同步模式，0表示异步模式")
```
## 1.2. 主要代码部分
在主程序中加入如下内容
```
def main(_):
    ps_hosts = FLAGS.ps_hosts.split(",")
    worker_hosts = FLAGS.worker_hosts.split(",")
    cluster = tf.train.ClusterSpec({"ps": ps_hosts, "worker": worker_hosts})
    server = tf.train.Server(cluster, job_name=FLAGS.job_name, task_index=FLAGS.task_index)
    if FLAGS.job_name == 'ps':
        server.join()
    elif FLAGS.job_name == 'worker':
        with tf.device(tf.train.replica_device_setter(worker_device='/job:worker/task:%d'%FLAGS.task_index, cluster=cluster)):
        # 以下为真正运算的部分
        global_step = tf.Variable(0, name='global_step', trainable=False)  # 先设定全局步数
        
        cost = crnn.losses(sh_labels, logits, seq_len)  # 计算loss
        optimizer = tf.train.AdadeltaOptimizer(learning_rate=learning_rate)  # 定义优化器
        grads_and_vars = optimizer.compute_gradients(cost)  # 获取梯度
        # 参数的同步更新和异步更新
        if issync == 1:
            #同步模式计算更新梯度
            rep_op = tf.train.SyncReplicasOptimizer(optimizer, 
                                                    replicas_to_aggregate=len(worker_hosts),
                                                    total_num_replicas=len(worker_hosts),
                                                    use_locking=True)
            train_op = rep_op.apply_gradients(grads_and_vars, global_step=global_step)
            init_token_op = rep_op.get_init_tokens_op()
            chief_queue_runner = rep_op.get_chief_queue_runner()
        else:
            #异步模式计算更新梯度
            train_op = optimizer.apply_gradients(grads_and_vars, global_step=global_step)
    
    # 定义一个初始化函数 建议用init_fn定义初始化函数，可以导入ckpt，否则用init_op进行简单初始化
    def init_fn(sess):  # 这里要传入sess
        if tf.train.latest_checkpoint(checkpoint_dir) is None:
            init_op = tf.group(tf.global_variables_initializer(),tf.local_variables_initializer())
            sess.run(init_op)
        else:
            save.restore(sess,tf.train.latest_checkpoint(checkpoint_dir))
            init_op = tf.local_variables_initializer()
            sess.run(init_op)
    
    # 创建分布式的sess 
    sv = tf.train.Supervisor(is_chief=(FLAGS.task_index == 0),
                                logdir=save_path,
                                init_fn=init_fn,  # 注意这里并没有带参数
                                summary_op=None,
                                saver=save,
                                global_step=global_step,
                                save_model_secs=50)
    with sv.prepare_or_wait_for_session(server.target) as sess:
        # 如果是同步模式
        if FLAGS.task_index == 0 and issync == 1:
            sv.start_queue_runners(sess, [chief_queue_runner])
            sess.run(init_token_op) 
        
        # 下面的按照通常的sess运行写就ok了
```

**注意要点：**
- 所有对graph的操作要在Supervisor之前进行， 否则会报错
- 如果需要导入ckpt，要用init_fn定义一个初始化函数

# 2. 将数据同步
现在将所有代码和训练集在需要work的机器上进行同步

# 3. 运行
要分别在每个机器上运行
ps_hosts/worker_hosts可以在参数设置中设备默认值，因为每个机器上运行的是一样的
```
# ps可以直接在某一台机器的cpu上运行
ps server:
CUDA_VISIBLE_DEVICES='' python distribute.py --ps_hosts=192.168.100.42:2222 --worker_hosts=192.168.100.42:2224,192.168.100.253:2225 --job_name=ps --task_index=0


# 分别在各台机器(比如2台)上运行如下代码
worker server:
CUDA_VISIBLE_DEVICES=0 python distribute.py --ps_hosts=192.168.100.42:2222 --worker_hosts=192.168.100.42:2224,192.168.100.253:2225 --job_name=worker --task_index=0
CUDA_VISIBLE_DEVICES=0 python distribute.py --ps_hosts=192.168.100.42:2222 --worker_hosts=192.168.100.42:2224,192.168.100.253:2225 --job_name=worker --task_index=1

```

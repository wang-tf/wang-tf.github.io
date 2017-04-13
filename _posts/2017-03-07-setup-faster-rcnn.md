---
layout: post
#标题配置
title:  安装配置Faster-RCNN
#时间配置
date:   2017-03-07 14：00：00
#大类配置
categories: 深度学习
#小类配置
tag: FasterRCNN
---

* content
{:toc}


## 1. 安装前的准备
首先你应该已经安装了如下三个组件：cython, python-opencv, easydict

## 2. 开始安装
### 2.1. 下载文件
```shell
git clone --recursive https://github.com/rbgirshick/py-faster-rcnn.git
cd $FRCN_ROOT/lib
make
```

### 2.2. 修改文件
然后进入下一个目录
```shell
cd ../caffe-fast-rcnn
```

**Makefile.config文件的修改可以参照[另一篇博客](https://wang-tf.github.io/2017/01/14/caffe-Ubuntu16.04_64-+-CUDA8.0/)，这里不再赘述**  
**因其不支持cudnn5.0，因此需要做些修改。**
从caffe的git上下载对应文件的最新的版本放到下面相应的目录里
```shell
cp caffe/include/caffe/layers/cudnn_* caffe-fast-rcnn/include/caffe/layers/
cp caffe/src/caffe/layers/cudnn_* caffe-fast-rcnn/src/caffe/layers/
cp caffe/include/caffe/util/cudnn.hpp caffe-fast-rcnn/include/caffe/util/
```

修改caffe-fast-rcnn目录下的一个文件
```
vim ./src/caffe/test/test_smooth_L1_loss_layer.cpp
```

注释掉第11行
>`#include "caffe/vision_layers.hpp"   // 用 // 注释掉 或 删除`

### 2.3. 编译
然后开始编译

```shell
# compile Caffe modules
make -j8 all  

make -j8 test  

# run tests to ensure all the tests are passed
make runtest  

# build pycaffe  
make pycaffe
```

## 3.测试demo

```
cd $FRCN_ROOT
./data/scripts/fetch_faster_rcnn_models.sh  //可能会提示已经存在，不需要下载
./tools/demo.py
```

OK！以上就是安装的全部过程。可能由于py-faster-rcnn使用的caffe版本过于陈旧，会存在一些问题，或与可以通过[这个博客](http://www.cnblogs.com/zjutzz/p/6099720.html)处理一些问题。

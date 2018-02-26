---
layout: post
#标题配置
title:  ubuntu16下安装jupyter
#时间配置
date:   2018-02-26 13:08:00 +0800
#大类配置
categories: 机器学习
#小类配置
tag: ubuntu
---

* content
{:toc}

## 1.生成加密密码

```bash
sudo pip install jupyter
jupyter notebook --generate-config
python
# python命令行里敲击
  from notebook.auth import passwd 
  passwd()
  # 输入两次自己的密码，将加密的密码复制保存
```

## 2.修改生成的配置文件

`vim ~/.jupyter/jupyter_notebook_config.py`（该文件生成的路径）
1 c.NotebookApp.ip='*'                          # 设置所有ip皆可访问  
2 c.NotebookApp.password = u''                  # 复制生成的秘钥  
3 c.NotebookApp.open_browser = False            # 禁止自动打开浏览器  
4 c.NotebookApp.port =8888                      # 指定8888端口 
 

## 3.写一个启动程序
`touch ~/start_jupyter.sh`
`vim ~/start_juypter.sh`
写入`nohup jupyter notebook > jupyter_notebook.log 2>&1 &`
`chmod +x start_jupyter.sh`

## 4.启动jupyter
`./start_jupyter.sh`

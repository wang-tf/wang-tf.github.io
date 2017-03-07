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


## 安装前的准备
首先你应该已经安装了如下三个组件：cython, python-opencv, easydict

## 开始安装
1. 下载文件
```shell
git clone --recursive https://github.com/rbgirshick/py-faster-rcnn.git
cd $FRCN_ROOT/lib
make
```

然后进入下一个目录
```shell
cd ../caffe-fast-rcnn
```

```shell
cp caffe/inlude/caffe/layers/cudnn_* caffe-fast-rcnn/include/caffe/layers/
cp caffe/src/caffe/layers/cudnn_* caffe-fast-rcnn/src/caffe/layers/
cp caffe/include/caffe/util/cudnn.hpp caffe-fast-rcnn/include/caffe/util/
```

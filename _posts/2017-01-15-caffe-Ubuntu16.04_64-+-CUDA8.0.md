---
layout: post
#标题配置
title:  caffe配置：Ubuntu16.04_64+CUDA8.0
#时间配置
date:   2017-01-15 01:08:00 +0800
#大类配置
categories: 机器学习
#小类配置
tag: Caffe
---

* content
{:toc}


电脑配置：

+ 系统：Ubuntu16.04 - 64位
+ GPU:NVIDIA GTX980 Ti

需要安装：

+ NVIDIA显卡驱动
+ CUDA
+ cudnn
+ python 或 matlab（这里只安装python，且在ubuntu16.04中已默认安装2.7版本）
+udo apt-get install -y libprotobuf-dev libleveldb-dev libsnappy-dev libhdf5-serial-dev protobuf-compiler

sudo apt-get install -y libatlas-base-dev 
sudo apt-get install -y --no-install-recommends libboost-all-dev
sudo apt-get install -y libgflags-dev libgoogle-glog-dev liblmdb-dev
# pip
sudo apt-get install -y python-pip
*也可以在[界面安装](https://help.ubuntu.com/community/BinaryDriverHowto/Nvidia)或去[官网](http://www.nvidia.com/Download/index.aspx?lang=en-us)查看适合自己显卡的驱动*
安装成功后需要重启生效，并通过命令`nvidia-smi`检测是否安装成功

![安装成功]({{ '/images/installed.png' }})

## 1.3 安装CUDA
CUDA是NVIDIA的编程语言平台，想使用GPU就必须要使用cuda。
官方安装指导见[NVIDIA CUDA Installation Guide for Linux](http://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#abstract)

### 1.3.1 检查需要的版本
[NVIDIA CUDA INSTALLATION GUIDE FOR LINUX](http://developer.download.nvidia.com/compute/cuda/8.0/secure/prod/docs/sidebar/CUDA_Installation_Guide_Linux.pdf?autho=1483409954_8c3dc5eab67a57c32f10f698695fed79&file=CUDA_Installation_Guide_Linux.pdf)

 ![CUDA8.0支持列表]({{ '/images/native linux distribution support in cuda8.png' }}) 

检测内核版本：`uname -r`
检测gcc版本：`gcc -v`  
检测libc版本：`apt-cache show libc6`

[这个博客](http://blog.csdn.net/striker_v/article/details/51920627)可以将默认的gcc-5.4改为5.3

```Shell
wget http://mirrors.concertpass.com/gcc/releases/gcc-5.3.0/gcc-5.3.0.tar.gz
tar -zxvf gcc-5.3.0.tar.gz
cd gcc-5.3.0                    //进入解包后的gcc文件夹
./contrib/download_prerequisites                  //下载依赖项
cd ..                          //返回上层目录
mkdir gcc-build-5.3.0
cd gcc-build-5.3.0
../configure --enable-checking=release --enable-languages=c,c++ --disable-multilib
make -j8  //时间较长
sudo make install
sudo reboot now  //可能需要重启
gcc --version  //检查确认
g++ --version
# 如有多个gcc版本需要切换，用命令sudo update-alternatives --config gcc
```

### 1.3.2 下载CUDA
首先在[官网]()下载CUDA(建议使用local run文件安装，deb安装会重装nvidia驱动)，或：

```Shell
wget https://developer.nvidia.com/compute/cuda/8.0/Prod2/local_installers/cuda_8.0.61_375.26_linux-run
```
wget下载后可能需要改名字

```Shell
mv cuda_8.0.61_375.26_linux-run cuda_8.0.61_375.26_linux.run
```

![CUDA下载]({{ '/images/cuda download.png' }})

这里选择的run安装包

### 1.3.3 安装CUDA
此时电脑如果有双显卡：Intel 的集成显卡 + Nvidia 的独立显卡。要想两个显卡同时运行，需要关闭 lightdm 服务。
在BIOS设置里选择用Intel显卡来显示或作为主要显示设备
进入Ubuntu后按 ctrl+alt+F1 或直接远程登陆，登入自己的账号，然后输入以下命令

```Shell
sudo service lightdm stop
```

安装，执行以下命令：

```Shell
sudo chmod +x ./cuda_8.0.61_375.26_linux.run
sudo ./cuda_8.0.61_375.26_linux.run
```

安装过程中，在询问是否安装openGL的时候选择no。  
安装完成后需要在/etc/profile中添加环境变量, 在文件最后添加:
```Shell
PATH=/usr/local/cuda-6.5/bin:$PATH
export PATH

source /etc/bash.bashrc

# 修改当前用户的路径
sudo vim ~/.bashrc
#同样添加这三行
export CUDA_HOME=/usr/local/cuda-8.0
export PATH=/usr/local/cuda-8.0/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-8.0/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}

source ~/.bashrc
```

然后重新启动 `sudo reboot now` 或 直接启动图形界面 `sudo /etc/init.d/lightdm  start`

### 1.3.4检测CUDA
检查cuda是否配置好,在命令行中执行以下命令。
`nvcc --version  #会提示安装toolkit，` 

然后重启系统
安装samples测试,也可以跳过
```Shell
cd /usr/local/cuda-8.0/samples/
sudo make all -j16
cd bin/x86_64/linux/release
./deviceQuery
```

如果现实一些关于GPU的信息，则说明安装成功。

![显示结果]({{ '/images/gpu info.png' }})

## 1.4 配置cuDNN
cuDNN是GPU加速计算深层神经网络的库。
首先去[官网](https://developer.nvidia.com/rdp/cudnn-download)下载cuDNN,需要注册一个账号才能下载。

![cuDNN下载]({{ '/images/cudnn download.png' }}) 

下载cuDNN5.1之后进行解压和复制

```Shell
mv cudnn-8.0-linux-x64-v5.1.solitairetheme8 cudnn-8.0-linux-x64-v5.1.tgz
tar -xvf cudnn-8.0-linux-x64-v5.1.tgz
cd ./cuda/include
sudo cp cudnn.h /usr/local/cuda-8.0/include/  #复制头文件
cd ../lib64
sudo cp libcudnn.* /usr/local/cuda-8.0/lib64/    #这里只复制了一个文件，因为复制软连接时报错
cd /usr/local/cuda-8.0/lib64/
sudo rm -rf libcudnn.so libcudnn.so.5    #删除原有动态文件
sudo ln -s libcudnn.so.5.1.5 libcudnn.so.5  #生成软衔接
sudo ln -s libcudnn.so.5 libcudnn.so      #生成软链接
sudo chmod a+r /usr/local/cuda-8.0/include/cudnn.h
sudo chmod a+r /usr/local/cuda-8.0/lib64/libcudnn*  #通常已经有r权限
```
 
## 1.5 安装opencv3.1 *（3.2会在编译到40%的时候报错，未能解决）*
<font color='red' style='font-size:20px'>请确认已经安装了前面提到的opencv依赖项，如没有安装请现在安装</font>
官网下载的不支持CUDA8.0，从 [https://github.com/opencv/opencv](https://github.com/opencv/opencv) 下载Opencv,并将其解压到你要安装的位置，假设解压到了/home/opencv。
安装前准备，创建编译文件夹：

```Shell
sudo git clone https://github.com/daveselinger/opencv  #这个网页提供了可使用cuda8.0的opencv3.1
sudo git checkout 3.1.0-with-cuda8   #这步没有操作也编译通过了
cd opencv/
mkdir build
cd build
cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local -D WITH_TBB=ON -D WITH_V4L=ON -D WITH_QT=ON -D WITH_OPENGL=ON -D WITH_CUBLAS=ON -DCUDA_NVCC_FLAGS="-D_FORCE_INLINES" ..    
make -j $(($(nproc) + 1))
```

以上只是将opencv编译成功，还没将opencv安装，需要运行下面指令进行安装：

```Shell
sudo make install
sudo /bin/bash -c 'echo "/usr/local/lib" > /etc/ld.so.conf.d/opencv.conf'
sudo ldconfig
sudo apt-get update
```

然后重启系统

## 1.6 配置caffe

### 1.6.1 下载
在 [https://github.com/BVLC/caffe](https://github.com/BVLC/caffe) 上下载，解压到合适位置，如根目录

```Shell
git clone https://github.com/BVLC/caffe.git #下载
cd ~/caffe #进入下载好的目录
cp Makefile.config.example Makefile.config
sudo vim Makefile.config
```

对Makefile.config文件进行修改
```
USE_CUDNN := 1  

PYTHON_INCLUDE := /usr/include/python2.7 /usr/lib/python2.7/dist-packages/numpy/core/include  

WITH_PYTHON_LAYER := 1  

CUDA_DIR := /usr/local/cuda-8.0  

OPENCV_VERSION := 3  

INCLUDE_DIRS := $(PYTHON_INCLUDE) /usr/local/include /usr/include/hdf5/serial  

LIBRARY_DIRS := $(PYTHON_LIB) /usr/local/lib /usr/lib /usr/lib/x86_64-linux-gnu /usr/lib/x86_64-linux-gnu/hdf5/serial
```

对Makefile文件进行修改
``` 
#将409行：NVCCFLAGS +=-ccbin=$(CXX) -Xcompiler-fPIC $(COMMON_FLAGS)  替换为：  
NVCCFLAGS += -D_FORCE_INLINES -ccbin=$(CXX) -Xcompiler -fPIC $(COMMON_FLAGS)
```

对/usr/local/cuda/include/host_config.h进行修改
```
# 将#error-- unsupported GNU version! gcc versions later than 4.9 are not supported! 改为  
//#error-- unsupported GNU version! gcc versions later than 4.9 are not supported!
```

```Shell
# 解决hdf5的报错
cd /usr/lib/x86_64-linux-gnu
sudo ln -s libhdf5_serial.so.10.1.0 libhdf5.so
sudo ln -s libhdf5_serial_hl.so.10.0.2 libhdf5_hl.so
```

安装python依赖项（非必需）

```Shell
cd python
for req in $(cat requirements.txt); do sudo -H pip install $req --upgrade; done
```

然后编译

```Shell
cd .. #进入caffe主目录
make all -j $(($(nproc) + 1))
make test  # 报错也不影响使用
make runtest  # 报错也不影响使用
make pycaffe   
make distribute
```

将caffe加入python的路径
```Shell
sudo vim ~/.bashrc
#添加
export PYTHONPATH=/path/to/caffe-master/python:$PYTHONPATH  # 改成自己的路径
source ~/.bashrc
```

# 2 测试
下载数据预处理和重建lmdb文件

```Shell
cd $CAFFE_ROOT
./data/mnist/get_mnist.sh
./examples/mnist/create_mnist.sh
./examples/mnist/train_lenet.sh #测试
```

# 3 可能会出现的问题

## 3.1 "fatal error: hdf5.h: 没有那个文件或目录"
解决办法：

* step1:在Makefile.config文件的第85行，添加/usr/include/hdf5/serial/ 到 INCLUDE_DIRS，也就是把下面第一行代码改为第二行代码。
```
#将INCLUDE_DIRS := $(PYTHON_INCLUDE) /usr/local/include 替换为：  
INCLUDE_DIRS := $(PYTHON_INCLUDE) /usr/local/include /usr/include/hdf5/serial/
```
* stept2:在Makefile文件的第173行，把 hdf5_hl 和hdf5修改为hdf5_serial_hl 和 hdf5_serial，也就是把下面第一行代码改为第二行代码。
```
#将LIBRARIES += glog gflags protobuf boost_system boost_filesystem m hdf5_hl hdf5 改为：  
LIBRARIES += glog gflags protobuf boost_system boost_filesystem m hdf5_serial_hl hdf5_serial
```

## 3.2 "libcudart.so.8.0 cannot open shared object file: No such file or directory"
解决办法是将一些文件复制到/usr/local/lib文件夹下：

```Shell
#注意自己CUDA的版本号！
sudo cp /usr/local/cuda-8.0/lib64/libcudart.so.8.0 /usr/local/lib/libcudart.so.8.0 && sudo ldconfig
sudo cp /usr/local/cuda-8.0/lib64/libcublas.so.8.0 /usr/local/lib/libcublas.so.8.0 && sudo ldconfig
sudo cp /usr/local/cuda-8.0/lib64/libcurand.so.8.0 /usr/local/lib/libcurand.so.8.0 && sudo ldconfig
```

---
layout:post
title: 安装cuda8.0 (Nvidia独显计算,Intel集显显示)
data: 2017-03-13 09:15:00
categories: linux
tag: cuda
---

* content
{:toc}


安装CUDA7.0
Cuda可以使用.deb和.run两种方式安装，参照网上教程，说到.deb安装简便（不需要禁用nouveau，关闭桌面服务），但是我最后是用.run安装成功的……

.deb安装-FAIL
使用deb安装，./deviceQuery和./bandwidthTest验证成功，但是重启后卡在开机logo界面(splash)，登录recovery模式，启动X server失败，rescue登录界面循环。

网上搜索原因：安装cuda后，nvidia driver版本回退而且覆盖了libopengl，所以要重新安装driver，在官方指导文档中也确实说明：

>Installing Mesa may overwrite the /usr/lib/libGL. so that was previously installed by the NVIDIA driver, so a reinstallation of the NVIDIA driver might be required after installing these libraries.
重装系统后，安装cuda，再重装nvidia driver版本（这一步需要禁用nouveau，关闭桌面服务），重启，卡在开机logo，重启桌面模式，循环登录。

还是有问题啊，所以想验证一下，是不是nvidia driver导致的：重装，先安装nvidia driver，重启，卡在开机logo，重启桌面模式，循环登录。
所以猜测：循环登录是因为桌面服务启动（lightdm）失败。原因可能是电脑的双显卡和nouveau、nvidia驱动冲突吧（nouveau是针对nividia的开源驱动）。

.run安装-Yeah！
最后找到[Solved] Titan X for CUDA 7.5 login-loop error [Ubuntu 14.04]完美匹配我的情况，开心^.^

第一次仍是失败（因为我之前安装nvidia驱动失败，卸载并重启用nouveau，桌面正常了。在这个基础上操作）；第二次重新安装系统，按照步骤来，CUDA7.0安装成功。

下面基本按照参考的文章，记录我的步骤：

重装系统。下载cuda_7.0.28_linux.run，注意：我是要用Nvidia显卡计算，用Intel集显显示。并运行 sudo apt-get install build-essential
开始时，用正常的GUI登录，没有log循环问题。不需要创建 xorg.conf，如果有的话，删掉sudo rm /etc/X11/xorg.conf（备份更好）。
如果是刚重装好，是没有这个文件的。
禁用nouveau，创建/etc/modprobe.d/blacklist-nouveau.conf，写入： 
blacklist nouveau 
option nouveau modeset=0 
然后sudo update-initramfs -u
重启电脑，在出现登录界面时，登录tty1,按Ctrl + Alt + F1，在文本模式中登录。
关闭桌面服务sudo service lightdm stop。这步对于安装Nvidia驱动至关重要
运行.run文件，不要覆盖opengl，sudo ./cuda-7.0.28_linux.run --no-opengl-libs
在安装过程中， 
Accept EULA conditions 
Say YES to installing the NVIDIA driver 
SAY YES to installing CUDA Toolkit + Driver 
Say YES to installing CUDA Samples
安装完成， check device nodes : Check if /dev/nvidia* files exist。如果没有的话sudo modprobe nvidia
重启桌面服务sudo service lightdm start。此时能够登录，没有login-loop问题。
设置环境变量 
在/etc/ld.so.conf.d/建立cuda.conf的文件，写入 
/usr/local/cuda-7.0/lib64 
然后sudo ldconfig
添加PATH，为了长久添加，在/etc/profile加入 
export PATH=/usr/local/cuda-7.0/bin:$PATH 
立即生效，source /etc/profile 
注意：直接在终端export PATH=/usr/local/cuda-7.0/bin:$PATH是暂时的
验证驱动版本和CUDA版本： 
cat /proc/driver/nvidia/version 
nvcc -V
Create CUDA Samples. 运行 make时间较长…
进入NVIDIA_CUDA-7.5_Samples/bin/x86_64/linux/release/ 做一下两个标准检测： 
./deviceQuery：查看显卡信息 
./bandwidthTest：检查是否工作正常 
都能够PASS
Reboot. Everything should be ok.
总结
最开始用deb安装，觉得问题主要出在nouveau和opengl上。但是没有尝试过。 这个过程折腾了有一周，因为自己也是新手，对很多问题都束手无策。

遇到问题，首先要google，输入和问题最相关的关键词，比如ubuntu14.04 cuda nvidia driver log loop，快速找几个论坛帖子，尝试一个觉得靠谱的方法，失败，会逐渐对问题清晰起来，然后再google，换问题的关键词，找帖子。好的论坛很重要。国内的很多论坛，问题都比较长远。
进行完大的改动（安装、删除等）应该重启，确保没有引入问题

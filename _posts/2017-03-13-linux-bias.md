---
layout: post
title: ubuntu中最近用到的命令
data: 2017-03-13 09:15:00
categories: linux
tag: shell
---

* content
{:toc}


记录一下最近用到的linux命令，以备查用

## 1. 硬盘操作
### 1.1. 硬盘使用情况
```shell
df -T -hl
```

### 1.2. 硬盘挂载
```shell
#挂载
mount [硬盘] [挂载位置]
#卸载
umount [硬盘] [挂载位置]
```

### 1.3. 分区格式化
```shell
sudo umount /dev/sda1       # 必须先卸载该分区
sudo mkfs.vfat   -F 32   /dev/sda1 # 格式化为 FAT32 分区 及FAT12 FAT16
sudo mkfs.ntfs /dev/sda1    #格式化为 NTFS 分区，先要安装ntfsprogs
sudo mkfs.ext4 /dev/sda1    #格式化为ext4 及ext3 ext2
```
## 2. 用户和用户组
###　2.1. 增加用户
```shell
useradd
adduser
```

### 2.2. 增加组
```shell
groupadd [-g GID] [要添加的组名] #-g：用于指定 GID，默认为使用当前最大的 GID 加1
```

例如：  
```shell
groupadd deeplearning
```





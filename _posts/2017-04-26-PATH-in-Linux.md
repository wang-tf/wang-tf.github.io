---
layout: post
title: Ubuntu下的PATH
date: 2017-04-26 11:18:00
categories: Linux
tag: 运维
---

*content
{:toc}


查看PATH：echo $PATH

以添加mongodb server为列
## 修改方法一：
```
export PATH=/usr/local/mongodb/bin:$PATH
```

配置完后可以通过echo $PATH查看配置结果。
- 生效方法：立即生效
- 有效期限：临时改变，只能在当前的终端窗口中有效，当前窗口关闭后就会恢复原有的path配置
- 用户局限：仅对当前用户

 

## 修改方法二：
通过修改.bashrc文件:
```
vim ~/.bashrc 
#在最后一行添上：
export PATH=/usr/local/mongodb/bin:$PATH
```

- 生效方法：（有以下两种）
+ 1、关闭当前终端窗口，重新打开一个新终端窗口就能生效
+ 2、输入“source ~/.bashrc”命令，立即生效
- 有效期限：永久有效
- 用户局限：仅对当前用户

 

## 修改方法三:
**这种方法最好,除非你手动强制修改PATH的值,否则将不会被改变。**  
通过修改profile文件:
```
vim /etc/profile
# 找到设置PATH的行，添加
export PATH=/usr/local/mongodb/bin:$PATH
```

- 生效方法：
+ 系统重启
+ 输入“source /etc/profile”命令，立即生效
- 有效期限：永久有效
- 用户局限：对所有用户

 

## 修改方法四:
通过修改environment文件:
```
vim /etc/environment
# 在PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"中加入
:/usr/local/mongodb/bin
```

- 生效方法：
+ 系统重启
+ 输入“source /etc/environment”命令，立即生效
- 有效期限：永久有效
- 用户局限：对所有用户

## 工作环境设置文件
环境设置文件有两种：**系统环境设置文件**和**个人环境设置文件**

1.系统中的用户工作环境设置文件：
- 登录环境设置文件：/etc/profile     
- 非登录环境设置文件：/etc/bashrc

2.用户个人设置的环境设置文件：
- 登录环境设置文件: $HOME/.bash_profile   //这个是环境变量设置的地方
- 非登录环境设置文件：$HOME/.bashrc       //这个是定义别名的地方

登录环境：指用户登录系统后的工作环境  
非登录环境：指用户再调用子shell时所使用的用户环境

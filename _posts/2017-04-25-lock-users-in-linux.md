---
layout: post
title: Linux下锁定账号
date: 2017-04-25 12:40:00
categries: Linux
tag: 运维
---

* content
{:toc}


## 一、最常用方式，修改用户的shell类型为/sbin/nologin  （recommend）
这种方式会更加人性化一点，因为不仅可以禁止用户登录，还可以在禁用登陆时给提示告诉它这么做的原因。
`sudo vim /etc/nologin.txt`  
没有的话就手动新建一个，在里面添加给被禁止用户的提示(这种方式的所有用户的锁定信息都在这个文件中，在登陆时给与提示)。
```
如下，禁用wang账号登陆系统：
[root@host~]# useradd wang
[root@host~]# echo "123456"|passwd --stdin wangshibo
Changing password for user wangshibo.
passwd: all authentication tokens updated successfully.
[root@host~]# cat /etc/passwd | grep wang
wangshibo:x:500:500::/home/wang:/bin/bash
[root@host~]# sed -i 's#/home/wang:/bin/bash#/home/wang:/sbin/nologin#g' /etc/passwd
[root@host~]# cat /etc/passwd | grep wang
wang:x:500:500::/home/wang:/sbin/nologin

[root@host-192-168-1-117 ~]# touch /etc/nologin.txt
[root@host-192-168-1-117 ~]# cat /etc/nologin.txt
In order to protect the system security, this type of user is locked!
```

现在尝试用wangshibo账号登陆系统，就会被拒绝，并给出提示信息：
```
[ops@host~]$ su - wang
Password: 
In order to protect the system security, this type of user is locked!
[ops@host~]$
```

解禁用户登陆就是把shell改为它原有的就可以了
```
[root@host~]# cat /etc/passwd|grep wang
wangshibo:x:500:500::/home/wang:/sbin/nologin
[root@host~]# sed -i 's#/home/wang:/sbin/nologin#/home/wang:/bin/bash#g' /etc/passwd
[root@host~]# cat /etc/passwd | grep wang
wang:x:500:500::/home/wang:/bin/bash

[root@host~]# su - ops
[ops@host~]$ su - wang
Password: 
[wang@host~]$
```

---
可以使用usermod命令修改用户的shell类型，加-s参数，如
```
[root@host~]# cat /etc/passwd | grep wang
wangshibo:x:500:500::/home/wang:/bin/bash
[root@host~]# usermod wang -s /sbin/nologin 
[root@host~]# cat /etc/passwd|grep wang
wang:x:500:500::/home/wang:/sbin/nologin
```

另外注意下一个小细节：
这一种方法，无论是从root用户，还是从其他用户，都不能ssh登陆或su切换到锁定账号下
---

## 二、修改用户配置文件/etc/shadow，将第二栏设置为“*”
**使用这种方式会导致该用户的密码丢失，要再次使用时，需重设密码。一般不推荐这种方式！**
```
[root@host~]# cat /etc/passwd|grep wangshibo
wangshibo:x:500:500::/home/wangshibo:/bin/bash
[root@host~]# cat /etc/shadow|grep wangshibo
wangshibo:$1$0/5NU4y2$OBGISa8yaloVNYVLFCoP3.:17133::::::
[root@host~]# cat /etc/shadow|grep wangshibo                  # 将第二栏密码设置为*
wangshibo:*:17133::::::

[root@host~]# su - ops
[ops@host~]$ su - wangshibo                 #不能登陆系统 
Password: 
su: incorrect password
```

解禁用户登陆，需要重置密码
```
[root@host~]# echo "123456"|passwd --stdin wangshibo
Changing password for user wangshibo.
passwd: all authentication tokens updated successfully.
[root@host~]# cat /etc/shadow|grep wangshibo
wangshibo:$1$RPfkekf7$QAUGmJ0SCIb64aEvJvNif1:17133::::::
[ops@host~]$ su - wangshibo
Password: 
[wangshibo@host~]$
```

## 三、使用命令passwd
```
passwd -l 用户          //锁定账号，-l:lock
passwd -u 用户        //解禁用户，-u:unlock
```

```
[root@host~]# passwd -l wangshibo
Locking password for user wangshibo.
passwd: Success

[ops@host~]$ su - wangshibo
Password: 
su: incorrect password

[root@host~]# passwd -u wangshibo
Unlocking password for user wangshibo.
passwd: Success

[ops@host~]$ su - wangshibo
Password: 
[wangshibo@host~]$
```

## 四、使用命令usermod
```
usermod -L 用户         //锁定帐号，-L:lock
usermod -U 用户        //解锁帐号，-U:unlock
```

```
[root@host~]# usermod -L wangshibo

[ops@host~]$ su - wangshibo
Password: 
su: incorrect password

[root@host~]# usermod -U wangshibo

[ops@host~]$ su - wangshibo
Password: 
[wangshibo@host~]$
```

---
这里有个细节需要注意一下：
第三和第四种方式，即passwd或usermod命令锁定的用户：
1）无论从root用户还是其他普通用户，都不能ssh登陆锁定用户下
2）可以从root用户su切换到锁定用户下，但是用其他普通用户不能su切换到锁定用户下
---

## 五、禁止所有的用户登录（手动创建/etc/nologin文件）
如果不想让除root用户之外的其他所有用户登录系统（比如在系统维护情况下），如果按照上面的几种方式，就需要一个一个地去禁止用户登录，这就是一种很傻X的工作方式，效率也很低！

下面介绍一种简洁有效的设置方式:
只需要在/etc目录下建立一个nologin文档，那么Linux上的所有用户（除了root以外）都无法登录！！
`[root@host~]# touch /etc/nologin`

在/etc/nologin（注意：这可不是第一种方式中的nologin.txt）文件里面可以自定义一些内容，告诉用户为何无法登录。
```
[root@host~]# cat /etc/nologin
抱歉，系统维护中，暂时禁止登陆！

这样，就会发现除root之外的其他用户统统无法登陆系统了。
[root@linux-node2 ~]# ssh root@192.168.1.117
抱歉，系统维护中，暂时禁止登陆！
[root@host~]#

[root@linux-node2 ~]# ssh wangshibo@192.168.1.117
wangshibo@192.168.1.117's password: 
抱歉，系统维护中，暂时禁止登陆！
Connection closed by 192.168.1.117
[root@linux-node2 ~]# ssh ops@192.168.1.117
ops@192.168.1.117's password: 
抱歉，系统维护中，暂时禁止登陆！
Connection closed by 192.168.1.117
```

注意一点：
这种方法设置后，只是禁止了从外部ssh登陆本机时有效！但是在本机上，无论是从root用户还是其他普通用户使用su命令切换到锁定用户下都不受影响。
```
[root@host~]# su - ops
[ops@host~]$ su - wangshibo
Password: 
[wangshibo@host~]$
```

解禁帐号也简单，直接将/etc/nologin删除就行了！
```
[root@host~]# rm -f /etc/nologin
[root@host~]# ll /etc/nologin
ls: cannot access /etc/nologin: No such file or directory

[root@linux-node2 ~]# ssh wangshibo@192.168.1.117
wangshibo@192.168.1.117's password: 
[wangshibo@host~]$
```

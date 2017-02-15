---
layout: post
#标题配置
title:  powerline安装指南
#时间配置
date:   2017-01-19 01:00:00 +0800
#大类配置
categories: Linux
#小类配置
tag: 
- powerline
- bash
- vim
---

* content
{:toc}


Powerline是vim编辑器的插件，它是Python开发的，为多个应用（bash，zsh，tmux等）提供statusline。

# 1 安装powerline

```
#先安装pip
sudo apt-get install python-pip
#然后可以直接安装
sudo pip install powerline-status
#或者用git获取最新版
sudo apt-get install git
pip install git+git://github.com/Lokaltog/powerline

```

# 2 下载相关的字体
安装Powerline字体：

```
wget https://github.com/powerline/powerline/raw/develop/font/PowerlineSymbols.otf
wget https://github.com/powerline/powerline/raw/develop/font/10-powerline-symbols.conf
sudo mv PowerlineSymbols.otf /usr/share/fonts/
sudo fc-cache -vf /usr/share/fonts/
sudo mv 10-powerline-symbols.conf /etc/fonts/conf.d/
```

# 3 设置powerline
首先获取poweline安装的位置

`pip show powerline-status`

比如安装位置在/usr/local/lib/python2.7/dist-packages

让你的终端支持256色

```
sudo vim ~/.bashrc
# 在最后一行添加
export TERM="screen-256color"
```

接着添加对bash的支持

```
powerline-daemon -q  #未添加测试
POWERLINE_BASH_CONTINUATION=1  #未添加测试
POWERLINE_BASH_SELECT=1  #未添加测试
. /usr/local/lib/python2.7/dist-packages/powerline/bindings/bash/powerline.sh
```
然后`source .bashrc`来生效

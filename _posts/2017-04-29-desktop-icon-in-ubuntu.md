---
layout: post
title: ubuntu .desktop 文件
date: 2017-04-29 18:52:00
categories: Linux
tag: 运维
---

* count
{:tog}


## 文件地址在　　
- /usr/share/applications　
- ~/.local/share/applications

## 文件格式
```
[Desktop Entry]           //每个desktop文件都以这个标签开始，说明这是一个Desktop Entry文件
Version = 1.0             //标明Desktop Entry的版本（可选）
Name = Firefox            //程序名称（必须），这里以创建一个Firefox的快捷方式为例
GenericName = Web Browser //程序通用名称（可选）
Comment = A Web Browser   //程序描述（可选）
Exec = firefox %u        //程序的启动命令（必选），可以带参数运行
                          //当下面的Type为Application，此项有效
Icon = firefox            //设置快捷方式的图标（可选）
Terminal = false          //是否在终端中运行（可选），当Type为Application，此项有效
Type = Application        //desktop的类型（必选），常见值有“Application”和“Link”
Categories = GNOME;Application;Network; //注明在菜单栏中显示的类别（可选）
```

**注意不要有多余的空格，否则会解析错误**

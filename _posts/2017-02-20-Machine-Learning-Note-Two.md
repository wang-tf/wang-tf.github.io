---
layout: post
title: 机器学习笔记-2
date: 2017-02-20 16:57:00 
categories: 机器学习
tag: 
- 有监督
- 无监督
---

* content
{:toc}


## 正规方程
正规方程（normal equation）是通过求解下面的方程来找出使得代价函数最小的参数的：$\frac {\partial} {\partial \theta_j} J(\theta_j) = 0$。 假设我们的训练集特征矩阵为 X（包含了 $x_0$=1）并且我们的训练集结果为向量 y，则 利用正规方程解出向量：  
$$\theta = (X^T X)^{-1}X^Ty$$  
当特征的数量大于10000时，使用正规方程还是梯度下降区别不明显。

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

## 逻辑回归
逻辑回归（logistic regression）算法是一种分类算法。。有时候可能因为这个算法的名字中出现了“回归”使你感到困惑，但逻辑回归算法实际上是一种分类算法，它适用于标签 y 取值离散的情况，如：1  0  0  1。  
逻辑
回归模型的假设是：  
$$h_{\theta}(x)=g(\theta^{T}x)$$  
x 代表特征向量。  
g 代表逻辑函数（logistic function）。一个常用的逻辑函数为S型函数（Sigmoid function），公式为：$g(z)=\frac 1 {1+e^{-z}}$  
该函数的图像为：![sigmoid function]({{'/images/sigmoid.png'}})  
合起来，我们就得到逻辑回归模型的假设：  
对模型的理解：  
$$h_{\theta}(x)=\frac 1 {1+e^{-\theta^{T}x}}$$  
$h_{\theta}(x)$的作用是，对于给定的输入变量，根据选择的参数计算输出变量 =1 的可能性（estimated probablity）即$h_{\theta}(x)=P(y=1|x;\theta)$。  

## 决策边界
决策边界（decision boundary）是假设函数的一个属性，它的参数由所有的$\theta$值来确定。  
![decision boudnary]({{'/images/decision-boundary.png'}})  

## 代价函数
代价函数（cost function）可以用来描述用于拟合参数的优化目标，这便是监督学习问题中的逻辑回归模型的拟合问题。  
对于线性回归模型，我们定义的代价函数为所有模型误差的平方和：$J(\theta)=\frac 1 m \sum_{i=1}^m \frac 1 2 (h_\theta(x^{(i)})-y^{(i)})^2$  
但这个代价函数在用于逻辑回归模型时，我们得到的代价函数是一个非凸函数（non-convex function）。这意味着我们的代价函数有许多局部最小值，这将影响梯度下降算法寻找全局最小最。因此我们重新定义逻辑回归的代价函数为$J(\theta)=\frac 1 m \sum_{i=1}^m Cost(h_\theta(x^{(i)}),y^{(i)})$  
其中$Cost(h_\theta(x^{(i)}),y^{(i)}=)
\begin{equation}
 \left.\begin{aligned}
        B'&=-\partial \times E,\\
        E'&=\partial \times B - 4\pi j,
       \end{aligned}
 \right\}
 \qquad \text{Maxwell's equations}
\end{equation}$
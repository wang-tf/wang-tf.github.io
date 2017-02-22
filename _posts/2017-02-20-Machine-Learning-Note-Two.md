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
其中$$Cost(h_\theta(x^{(i)}),y^{(i)})=
 \left\{\begin{aligned}
        -log(h_{\theta}(x))   if y=1,\\
        -log(1-h_{\theta}(x)) if y=0,
       \end{aligned}
 \right.
$$  
这样构建的$Cost(h_{\theta}(x),y)$函数的特点是：当实际的 y=1 且 $h_\theta$也为 1 时误差为 0，当 y=1 但 $h_\theta$不为 1 时误差随着 $h_\theta$ 的变小而变大；当实际的 y=0 且 hθ 也为 0 时代价为 0，当 y=0 但 $h_\theta$不为 0 时误差随着 $h_\theta$ 的变大而变大。  
将构建的$Cost(h_{\theta}(x),y)$简化并代入函数后得到：  
$$
\[
\begin{equation}
J(\theta) = -\frac 1 m [\sum_{i=1}^m y^{(i)}logh_{\theta}(x^{(i)}+(1-y^{(i)})log(1-h_{\theta}(x^{(i))})]
\end{equation}
\]
$$  
在得到这样一个代价函数以后，我们便可以用梯度下降算法来求得能使代价函数最小的参数了。算法为：  
>
Repeat  \\
    $\theta_j := \theta_j - \alpha\frac \partial {\partial \theta_j} J(\theta)$  \\
                                    (simultanemously update all)

求导后得到：  
>
Repeat  \\
    $\theta_j := \theta_j - \alpha \sum_{i=1}^m (h_\theta (x^{(i)})-y^{(i)})x_{j}^{(i)}$  \\
                                    (simultanemously update all)

虽然得到的梯度下降算法表面上看上去与线性回归的梯度下降算法一样，**但是这里的 $h_\theta (x)=g(\theta_{T}x)$与线性回归中不同，所以实际上是不一样的**。另外，在运行梯度下降算法之前，进行特征缩放依旧是非常必要的。

## 一对多分类算法
一对多（one-vs-all）分类算法适用于对多个类别进行分类。我们将多个类中的一个类标记为正向类（y=1），然后将其他所有类都标记为负向类，这个模型记作$h_{\theta}^{(1)}(x)$。接着，类似地第我们选择另一个类标记为正向类（y=2），再将其它类都标记为负向类，将这个模型记作$h_{\theta}^{(2)}(x)$,依此类推。 最后我们得到一系列的模型简记为：$h_{\theta}^{(i)}(x) = p(y=i|x;\theta)$ 其中i=(1,2,3...k)。预测时我们要做的就是在我们三个分类器里面输入 x，然后我们选择一个让$h_{\theta}^{(i)}(x)$最大的i，即$$\mathop{max}\limits_{\theta} h_{\theta}^{(i)}(x)$$。我们预测 y 就是那个值。这就是多类别分类问题，以及一对多的方法，通过这个小方法，可以将逻辑回归分类器用在多类分类的问题上。  

## 过度拟合
过度拟合（over-fitting）可能会导致机器学习的效果很差。  
下图是一个回归问题的例子：  
![over-fitting-regression]({{'/images/over-fitting-regression.png'}})  
第一个模型是一个线性模型，欠拟合，不能很好地适应我们的训练集；第三个模型是一个四次方的模型，过于强调拟合原始数据，而丢失了算法的本质：预测新数据。我们可以看出，若给出一个新的值使之预测，它将表现的很差，是过拟合，虽然能非常好地适应我们的训练集但在新输入变量进行预测时可能会效果不好；而中间的模型似乎最合适。  
下图是一个分类问题的例子：
![over-fitting-classification]({{'/images/over-fitting-claaification.png'}})  
就以多项式理解，x 的次数越高，拟合的越好，但相应的预测的能力就可能变差。  
常用的避免过拟合的方法有：
1. 丢弃一些不能帮助我们正确预测的特征。可以是手工选择保留哪些特征，或者使用
一些模型选择的算法来帮忙（例如 PCA） 
2. 正则化。 保留所有的特征，但是减少参数的大小（magnitude）。 

## 正则化
在训练的模型中，往往是高次项导致了过拟合的产生，所以如果我们能让这些高次项系数接近于0的话，我们就能很好的拟合了。所以我们要做的就是在一定程度上减小这些参数$\theta$的值，这就是正则化的基本方法。假如我们有非常多的特征，我们并不知道其中哪些特征我们应该惩罚，我们就对所有特征进行惩罚，并且让代价函数最优化的软件来选择这些惩罚程度。这样的结果是得到了一个较为简单的防止过拟合问题的假设：  
$$J(\theta)=\frac 1 2m [\sum_{i}^m ((h_{\theta}(x^{(i)})-y^{(i)})^2+ \lambda \sum_{j}^n \theta_j^2)]$$  
其中$\lambda$又称为正则化参数（regularization parameter）。注：根据惯例，我们不对$\theta_0$进行惩罚。经过正则化处理的模型与原模型的可能对比如下图所示：  
![regularization-result]({{'/iamges/regularization-result.png'}})  

## 正则化线性回归
对于线性回归的求解，我们之前推导了两种学习算法：一种基于梯度下降，一种基于正规方程。  
正则化线性回归的代价函数为：  
$$J(\theta) = \frac 1 2m [\sum_{i=1}^m (h_{\theta}(x^{(i)})-y^{(i)})^2 + \lambda \sum_{j=1}^n \theta_j^2]$$  
如果我们要使用梯度下降法令这个代价函数最小化，因为我们未对 θ0 进行正则化，所以梯度下降算法将分两种情形：  
>Repeat until convergence{  
$$\theta_0 := \theta_0 - \alpha \frac 1 m \sum_{i=1}^m ((h_{\theta}(x^{(i)})- y^{(i)})\cdot x_0^{(i)})$$  
$$
\theta_j := \theta_j - \alpha \frac 1 m \sum_{i=1}^m ((h_{\theta}(x^{(i)})- y^{(i)})\cdot x_j^{(i)} + \frac \lambda m \theta_j)         for j=1,2,...n \\
\theta_j := \theta_j(1-\alpha \frac \lambda m) - \alpha \frac 1 m \sum_{i=1}^m (h_{\theta}(x^{(i)})- y^{(i)})\cdot x_j^{(i)}
$$  
}  

可以看出，正则化线性回归的梯度下降算法的变化在于，每次都在原有算法更新规则的基础上令 θ 值减少了一个额外的值。  
我们同样也可以利用正规方程来求解正则化线性回归模型，方法如下所示：  
$$\theta = (X^{T}X + \lambda )^{-1}$$

## 正则化逻辑回归
$$
\left[
\begin{matrix}
 1      & 2      & \cdots & 4      \\
 7      & 6      & \cdots & 5      \\
 \vdots & \vdots & \ddots & \vdots \\
 8      & 9      & \cdots & 0      \\
\end{matrix}
\right]
$$
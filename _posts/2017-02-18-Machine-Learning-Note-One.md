---
layout: post
title: 机器学习笔记-1
date: 2017-02-18 16:47:00 
categories: 机器学习
tag: 
- 有监督
- 无监督
---

* content
{:toc}


# 1.有监督
##监督学习(supervised## ##learning)##：通过已有的训练样本（即已知数据以及其对应的输出）来训练，从而得到一个最优模型，再利用这个模型将所有新的数据样本映射为相应的输出结果，对输出结果进行简单的判断从而实现分类的目的，那么这个最优模型也就具有了对未知数据进行分类的能力。

监督学习中只要输入样本集,机器就可以从中推演出制定目标变量的可能结果.如协同过滤推荐算法,通过对训练集进行监督学习,并对测试集进行预测,从而达到预测的目的.
## 1.1分类问题（classification problen）
## 1.2回归问题（regression problem）
# 2.无监督
##无监督学习(unsupervised## ##learning)##：我们事先没有任何训练数据样本，需要直接对数据进行建模。比如我们去参观一个画展，我们对艺术一无所知，但是欣赏完很多幅作品之后，我们面对一幅新的作品之后，至少可以知道这幅作品是什么派别的吧，比如更抽象一些还是更写实一点，虽然不能很清楚的了解这幅画的含义，但是至少我们可以把它分为哪一类。再比如我们在电影院看电影，对于之前没有学过相关电影艺术知识的我们，可能不知道什么是一部好电影，什么是一部不好的电影，可是在观看了很多部电影之后，我们脑中对电影就有了一个潜在的认识，当我们再次坐在电影院认真观看新上映的电影时，脑中就会对这部电影产生一个评价：怎么这电影这么不好啊，整个故事线是混乱的，一点也不清晰，比我之前看过的那些电影差远了，人物的性格也没有表现出来，关键是电影主题还搞偏了；哎呀，这个电影拍得确实好啊，故事情节和人物性格都很鲜明，而且场景很逼真，主角的实力表演加上他与生俱来的忧郁眼神一下把人物演活了。

# 附录
- m 代表训练集中实例的数量 
- x 代表特征/输入变量 
- y 代表目标变量/输出变量 
- (x,y) 代表训练集中的实例 
- (x^(i),y^(i) ) 代表第 i 个观察实例 
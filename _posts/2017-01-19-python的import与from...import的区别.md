---
layout: post
#标题配置
title:  python的import与from...import的区别
#时间配置
date:   2017-01-15 01:08:00 +0800
#大类配置
categories: linux
#小类配置
tag: python import
---

* content
{:toc}


在Python中用import...或者from...import...来导入相应的模块。  
模块其实就是一些函数和类的集合文件，它能实现一些相应的功能，当我们需要使用这些功能的时候，直接把相应的模块导入到我们的程序中，我们就可以使用了。  
这类似于C语言中的include头文件，Python中我们用import导入我们需要的模块。  

eg:

```python
>>> import math
>>> print math
<module 'math' (built-in)>
>>>
>>> print math.pi #导出圆周率的值
3.14159265359
>>>
```

导入math模块，会得到名为math的对象，这个模块对象包含了pi这样的常量，以及一些其它的方法。   
如果直接访问 pi，不加math这个前缀会发生什么情况呢？

```python
>>> print pi
Traceback (most recent call last):
  File "<pyshell#6>", line 1, in <module>
    print pi
NameError: name 'pi' is not defined
>>>
```

这个时候我们可以用from这个方法来实现可以直接用pi这个方法：  

```python
>>> from math import pi
>>> print pi
3.141592653589793
>>>
```

如果你要使用所有math模块使用的名字，你可以这样：  

```python
>>> from math import *
>>>
>>> pi
3.141592653589793
>>> cos(pi)
-1.0
>>>
```

这样就不需要一个一样导入模块内部的方法了，一次性的将所有python 调用函数方法导入。  
好处是代码看起来非常简洁，但是如果同时导入多个模块，要考虑模块方法名冲突等这些问题。  

>导入modules，import与from...import的不同之处在于：
>+ 如果你想在程序中用argv代表sys.argv，则可使用：from sys import argv
>+ 一般说来，应该避免使用from..import而使用import语句，因为这样可以使你的程序更加易读，也可以避免名称的冲突

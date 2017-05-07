---
layout: post
title: Python中的包--Pillow
categories: 图像处理
tag: python
---

* content
{:toc}


# 1.说明
PIL包已经停止支持，新的包为Pillow，import时依然是import PIL

[Pillow文档](http://pillow.readthedocs.io/en/latest/) | [PIL文档](http://effbot.org/imagingbook/)

# 2.对象列表
|对象|名称|说明|
|---|---|---|
|save(f,format=None)|保存|如果f是一个file对象，必须指定format（format codes|
|convert(mode)|转换mode	 
|copy()|||	 	 
|crop(bbox)|剪切|原图中bbox区域|
|filter(name)|滤镜	|the name of predefined image enhancement filters滤镜名字需要import ImageFilter|
|getbands()|通道的字符串序列|如RGB图返回('R', 'G', 'B')|
|getbbox()|包含非零区域的最小bbox| 
|getextrema()|最大最小像素点值|min&max pixel value 单通道图：返回元组(min,max) 多通道图：返回各个通道的元组组成的元组|
|getpixel(xy)|取像素点值|坐标xy处的pixel value or a sequence of pixel values|
|histogram(mask=None)|统计直方图|单通道图：返回列表[c0, c1, ...]，ci是值为i的像素数 多通道图：a single sequence that is the concatenation of the sequences for all bands mask参数:a same-sized mask image of mode "1" or "L"(include only those pixels correspond to nonzero pixels in the mask argument)|
|offset(dx,dy=None)|平移|Returns a new image the same size as the original, but with all pixels rotated dx in the +x direction,and dy in the +y direction. If dy is omitted, it defaults to the same value as dx.|
|paste(i2,where,mask=None)|粘贴图片|where参数可以是1 (x,y)坐标对：i2的像素点(0,0)对齐原图中的(x,y)粘贴，i2超过原图边界的部分被抛弃 2 bbox：i2必须和该bounding box大小一致 3 None：i2必须和原图大小一致 如果i2的mode和原图不一致，粘贴前会被转换。mask参数：a same-sized mask image of mode "1","L" or “RGBA ”(control which pixels get replaced)|
|paste(color,box=None,mask=None)|填充颜色|如果box省略，整个图被填充为color色；mask参数同上|
|point(function)|改变像素点(函数)|Returns a new image with each pixel modified.|
|point(table)|改变像素点(查表)|To translate pixels using a table(a sequence of 256n values, where n is the number of bands in the image) lookup|
|putalpha(band)|改变alpha通道|The pixels of the band image(same-sized,"L" or "1") replace the alpha band(A) of the original image(RGBA) in place.|
|putpixel(xy, color)|改变单个像素点颜色|Note that this method is relatively slow. For more extensive changes, use paste or the ImageDraw module instead.|
|resize(size,filter=None)|调整大小||
|rotate(theta)|旋转（围绕图片中心）|Any pixels that are not covered by rotation of the original image are set to black.|
|show()|显示图片|On Unix systems, this method runs the xv image viewer to display the image. On Windows boxes,the image is saved in BMP format and can be viewed using Paint. This can be useful for debugging.|
|split()|分离通道|返回各个通道的灰度图组成的元组 Returns a tuple containing each band of the original image as an image of mode "L". For example, applying this method to an "RGB" image produces a tuple of three images, one each for the red, green, and blue bands.|
|thumbnail(size,filter=None)	|缩略图|Modifies in-place,Preserves aspect ratio transform(xs, ys, Image.EXTENT, (x0,y0,x1,y1))	Returns a transformed copy of the image. In the transformed image, the point originally at (x0,y0) will appear at (0,0), and point (x1,y1) will appear at (xs, ys).|
|transform(xs, ys, Image.AFFINE, (a,b,c,d,e,f))|affine变换|The values a through f are the first two rows of an affine transform matrix. Each pixel at (x,y) in the resulting image comes from position (ax+by+c,dx+ey+f) in the input image, rounded to the nearest pixel.|
|transpose(method)|翻转旋转|ROTATE_90/180/270(clockwise), FLIP_TOP_BOTTOM(horizontal), FLIP_RIGHT_LEFT(vertical)|

# 3.图像格式
对于彩色图像，不管其图像格式是PNG，还是BMP，或者JPG，在PIL中，使用Image模块的open()函数打开后，返回的图像对象的模式都是“RGB”。

而对于灰度图像，不管其图像格式是PNG，还是BMP，或者JPG，打开后，其模式为“L”。

Convert()函数有三种形式的定义，它们定义形式如下：

1. im.convert(mode) ⇒ image
2. im.convert(“P”, **options) ⇒ image
3. im.convert(mode, matrix) ⇒ image

使用不同的参数，将当前的图像转换为新的模式，并产生新的图像作为返回值。

PIL中有九种不同模式。分别为1，L，P，RGB，RGBA，CMYK，YCbCr，I，F。

## 3.1.模式“1”

模式“1”为二值图像，非黑即白。但是它每个像素用8个bit表示，0表示黑，255表示白。下面我们将lena图像转换为“1”图像。

例子：
```
>>>from PIL import Image  
>>> lena =Image.open("D:\\Code\\Python\\test\\img\\lena.jpg")  
>>> lena.mode  
'RGB'  
>>> lena_1 = lena.convert("1")  
>>> lena_1.mode  
'1'  
```

## 3.2.模式“L”

模式“L”为灰色图像，它的每个像素用8个bit表示，0表示黑，255表示白，其他数字表示不同的灰度。在PIL中，从模式“RGB”转换为“L”模式是按照下面的公式转换的：

L = R * 299/1000 + G * 587/1000+ B * 114/1000

下面我们将lena图像转换为“L”图像。

例子：
```
>>> from PIL import Image  
>>> lena = Image.open("D:\\Code\\Python\\test\\img\\lena.jpg")  
>>> lena.mode  
'RGB'  
>>> lena.getpixel((0,0))  
(197, 111, 78)  
>>> lena_L =lena.convert("L")  
>>> lena_L.mode  
'L'  
>>> lena_L.size  
(512, 512)  
>>>lena.getpixel((0,0))  
(197, 111, 78)  
>>>lena_L.getpixel((0,0))  
132  
```

对于第一个像素点，原始图像lena为(197, 111, 78)，其转换为灰色值为：

197 *299/1000 + 111 * 587/1000 + 78 * 114/1000 = 132.952，PIL中只取了整数部分，即为132。

## 3.3.模式“P”

模式“P”为8位彩色图像，它的每个像素用8个bit表示，其对应的彩色值是按照调色板查询出来的。

下面我们使用默认的调色板将lena图像转换为“P”图像。

例子：
```
>>> from PIL importImage  
>>> lena = Image.open("D:\\Code\\Python\\test\\img\\lena.jpg")  
>>> lena.mode  
'RGB'  
>>> lena.getpixel((0,0))  
(197, 111, 78)  
>>> lena_P =lena.convert("P")  
>>> lena_P.mode  
'P'  
>>>lena_P.getpixel((0,0))  
62  
```

## 3.4.模式“RGBA”

模式“RGBA”为32位彩色图像，它的每个像素用32个bit表示，其中24bit表示红色、绿色和蓝色三个通道，另外8bit表示alpha通道，即透明通道。

下面我们将模式为“RGB”的lena图像转换为“RGBA”图像。

例子： 
```
>>> from PIL import Image  
>>>lena = Image.open("D:\\Code\\Python\\test\\img\\lena.jpg")  
>>>lena.mode  
'RGB'  
>>>lena.getpixel((0,0))  
(197,111, 78)  
>>>lena_rgba = lena.convert("RGBA")  
>>>lena_rgba.mode  
'RGBA'  
>>>lena_rgba.getpixel((0,0))  
(197,111, 78, 255)  
>>>lena_rgba.getpixel((0,1))  
(196,110, 77, 255)  
>>>lena.getpixel((0,0))  
(197,111, 78)  
>>>lena.getpixel((0,1))  
(196,110, 77)  
```

从实例中可以看到，使用当前这个方式将“RGB”图像转为“RGBA”图像时，alpha通道全部设置为255，即完全不透明。

## 3.5.模式“CMYK”

模式“CMYK”为32位彩色图像，它的每个像素用32个bit表示。模式“CMYK”就是印刷四分色模式，它是彩色印刷时采用的一种套色模式，利用色料的三原色混色原理，加上黑色油墨，共计四种颜色混合叠加，形成所谓“全彩印刷”。

四种标准颜色是：C：Cyan = 青色，又称为‘天蓝色’或是‘湛蓝’M：Magenta = 品红色，又称为‘洋红色’；Y：Yellow = 黄色；K：Key Plate(blacK) = 定位套版色（黑色）。

下面我们将模式为“RGB”的lena图像转换为“CMYK”图像。

例子：
```
>>>from PIL import Image  
>>> lena =Image.open("D:\\Code\\Python\\test\\img\\lena.jpg")  
>>> lena_cmyk =lena.convert("CMYK")  
>>> lena_cmyk.mode  
'CMYK'  
>>>lena_cmyk.getpixel((0,0))  
(58, 144, 177, 0)  
>>> lena_cmyk.getpixel((0,1))  
(59, 145, 178, 0)  
>>>lena.getpixel((0,0))  
(197, 111, 78)  
>>>lena.getpixel((0,1))  
(196, 110, 77) 
```

从实例中可以得知PIL中“RGB”转换为“CMYK”的公式如下：
>
C = 255 - R
M = 255 - G
Y = 255 - B
K = 0

由于该转换公式比较简单，转换后的图像颜色有些失真。

## 3.6.模式“YCbCr”

模式“YCbCr”为24位彩色图像，它的每个像素用24个bit表示。YCbCr其中Y是指亮度分量，Cb指蓝色色度分量，而Cr指红色色度分量。人的肉眼对视频的Y分量更敏感，因此在通过对色度分量进行子采样来减少色度分量后，肉眼将察觉不到的图像质量的变化。

模式“RGB”转换为“YCbCr”的公式如下：
>
Y= 0.257*R+0.504*G+0.098*B+16
Cb = -0.148*R-0.291*G+0.439*B+128
Cr = 0.439*R-0.368*G-0.071*B+128

例子：
```
>>>from PIL import Image  
>>> lena =Image.open("D:\\Code\\Python\\test\\img\\lena.jpg")  
>>> lena_ycbcr =lena.convert("YCbCr")  
>>>lena_ycbcr.mode  
'YCbCr'  
>>>lena_ycbcr.getpixel((0,0))  
(132, 97, 173)  
>>>lena.getpixel((0,0))  
(197, 111, 78)  
```

按照公式，Y = 0.257*197+0.564*111+0.098*78+16= 136.877
>
Cb= -0.148*197-0.291*111+0.439*78+128= 100.785
Cr = 0.439*197-0.368*111-0.071*78+128 = 168.097

由此可见，PIL中并非按照这个公式进行“RGB”到“YCbCr”的转换。

## 3.7.模式“I”

模式“I”为32位整型灰色图像，它的每个像素用32个bit表示，0表示黑，255表示白，(0,255)之间的数字表示不同的灰度。在PIL中，从模式“RGB”转换为“I”模式是按照下面的公式转换的：

I = R * 299/1000 + G * 587/1000 + B * 114/1000

下面我们将模式为“RGB”的lena图像转换为“I”图像。

例子：
```
>>> from PIL import Image  
>>>lena = Image.open("D:\\Code\\Python\\test\\img\\lena.jpg")  
>>>lena.getpixel((0,0))  
(197,111, 78)  
>>>lena.getpixel((0,1))  
(196,110, 77) 
>>> lena_I =lena.convert("I")  
>>> lena_I.mode  
'I'  
>>>lena_I.getpixel((0,0))  
132  
>>>lena_I.getpixel((0,1))  
131  
>>> lena_L =lena.convert("L")  
>>>lena_L.getpixel((0,0))  
132  
>>>lena_L.getpixel((0,1))  
131  
```

从实验的结果看，模式“I”与模式“L”的结果是完全一样，只是模式“L”的像素是8bit，而模式“I”的像素是32bit。

## 3.8.模式“F”

模式“F”为32位浮点灰色图像，它的每个像素用32个bit表示，0表示黑，255表示白，(0,255)之间的数字表示不同的灰度。在PIL中，从模式“RGB”转换为“F”模式是按照下面的公式转换的：

F = R * 299/1000+ G * 587/1000 + B * 114/1000

例子：
```
>>>from PIL import Image  
>>> lena =Image.open("D:\\Code\\Python\\test\\img\\lena.jpg")  
>>>lena.getpixel((0,0))  
(197, 111, 78)  
>>>lena.getpixel((0,1))  
(196, 110, 77)  
>>> lena_F =lena.convert("F")  
>>> lena_F.mode  
'F'  
>>>lena_F.getpixel((0,0))  
132.95199584960938  
>>>lena_F.getpixel((0,1))  
131.95199584960938  
```

模式“F”与模式“L”的转换公式是一样的，都是RGB转换为灰色值的公式，但模式“F”会保留小数部分，如实验中的数据。

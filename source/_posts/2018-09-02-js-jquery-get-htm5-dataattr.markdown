---
layout: post
title: "js-jquery-get-htm5-dataattr[转载]"
date: 2018-09-02 00:16:47 +0800
comments: true
categories: javascript jquery
---

[原文链接](https://segmentfault.com/a/1190000005770912)

今天做项目的时候发现一个坑，关于jQuery获取data-*属性的方法data()，特写此篇来记录。

>HTML5规定可以为元素添加非标准型的属性，只需添加前缀data-，这些属性可以随意添加，随意命名，目的是为元素提供与渲染无关的信息，或提供语义信息。

## js获取data-*的方式
  
### 通过dataset属性访问

```html
    <div id="myDiv"data-appid="123" data-myname="lsxj"></div>
```

```js
var div = document.getElementById("myDiv");
var appId = div.dataset.appid;//获取data-appid的值
var myName = div.dataset.myname;//获取data-myname的值
//设置值
div.dataset.appid = 456;
div.dataset.myname = "newname";
```
<!-- more -->
最终HTML结果

```html
    <div id="myDiv" data-appid="456" data-myname="newname"></div>
```

dataset属性的值是DOMStringMap的一个实例，名值对的映射。每个data-name形式的属性都有一个对应的属性，只不过该属性名没有data-前缀。

需要注意的是，dataset中大小写的问题。带连字符连接的名称在使用的时候需要命名驼峰化。例如data-my-name对应的是dataset.myName的值。可看以下代码

//将上面代码的设置值部分进行修改

```js
div.dataset.appId = 789;
div.dataset.myName = "secondname";
```

最终结果:


```html
    <div id="myDiv" data-appid="123" data-myname="lsxj" data-app-id="456" data-my-name="secondname"></div>
```

### 传统获取方式 getAttribute

还是上述的例子。获取data-*的方法可使用如下方法：

```js
var appId = div.getAttribute("data-appid");
// jQuery获取方法
// data()方法
//获取属性
var appid = $("#myDiv").data("appid"); //123
var app_id = $("#myDiv").data("app-id"); //456
//属性赋值
$("#myDiv").data("appid","666");
//最终HTML代码
```

```html
    <div id="myDiv" data-appid="456" data-myname="newname"></div>
```


> 需要注意的是，data()的值进行修改并不会影响到DOM元素上的data-*属性的改变。data()的本质其实是将一个 “cache” 附加到了对象上，并使用了一个特殊的属性名称。
所以上述代码中，虽然对div进行了data()赋值操作，但HTML代码中div的data-appid的值仍然为123，因为data()只是修改了缓存的那个值，此时进行$('#myDiv').data("appid")的操作，输出的结果为666.

### attr()方法

```js
var appid = $("#myDiv").attr("data-appid");
```

参考资料：

* jQuery官方文档
* jQuery.data()和HTML5之data-属性
* jQuery.data() 的实现方式

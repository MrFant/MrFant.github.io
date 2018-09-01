---
layout: post
title: "jquery .ready() 与window.onload的区别"
date: 2018-09-01 23:15:26 +0800
comments: true
categories: jQuery JavaScript
---

## 1.执行时间 
window.onload必须等到页面内包括**图片**的**所有**元素加载完毕后才能执行。 
$(document).ready()是DOM结构绘制完毕后就执行，不必等到加载完毕。 


## 2.编写个数不同 
window.onload不能同时编写多个，如果有多个window.onload方法，只会执行一个 
$(document).ready()可以同时编写多个，并且都可以得到执行 

<!-- more -->
## 3.简化写法 
    window.onload没有简化写法 

    $(document).ready(function(){})
    可以简写成:
    $(function(){});
    $(function(){});        //$()里面一个匿名函数

另外，需要注意一点，由于在 ```$(document).ready()``` 方法内注册的事件，只要 **DOM 就绪**就会被执行，因此可能此时元素的关联文件未下载完。例如与图片有关的 html 下载完毕，并且已经解析为 DOM 树了，但很有可能图片还没有加载完毕,所以例如*图片的高度和宽度*这样的属性此时不一定有效。
要解决这个问题，可以使用 Jquery 中另一个关于页面加载的方法 ---```load()``` 方法。 ```load()``` 方法会在元素的 onload 事件中绑定一个处理函数。如果处理函数绑定给 window 对象，则会在所有内容 ( 包括窗口、框架、对象和图像等 ) 加载完毕后触发，如果处理函数绑定在元素上，则会在元素的内容加载完毕后触发。 
### 代码如下：

```js
$(window).load(function (){ 
       // 编写代码  
});
//等价于 JavaScript 中的以下代码 
Window.onload = function (){ 
     // 编写代码 
}
```


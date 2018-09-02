---
layout: post
title: "Markdown中插入html代码的坑"
date: 2018-09-02 10:38:20 +0800
comments: true
categories: Markdown HTML
---

Pygments 是个好工具，能够让markdown里的代码片段高亮显示，没有这货的存在，整个博文加上代码难免显得枯燥乏味。
但是在使用pygemnts，也就是在markdown写作的过程中插入代码时也有许多的坑，特别是插入html代码时。
由于markdown是一种标记语言，它会由解析器解析为html文本，所以为了**安全考虑**，
在mardown中插入html代码时就有许多禁忌。

    插入html代码时，必须让html代码用tab内嵌，当然最好用html代码块包裹

<!-- more -->

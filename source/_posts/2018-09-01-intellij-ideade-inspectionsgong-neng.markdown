---
layout: post
title: "IntelliJ IDEA的inspections功能"
date: 2018-09-01 23:13:14 +0800
comments: true
categories: Jetbrain-IDE
---

> Intellij idea的inspections功能非常智能，甚至可以成为菜鸟程序员的学习工具，借助于它可以规范自己的代码，完善风格，甚至大多数bug或error都能在inspections下无所遁形
但是在有些情况下我们也需要自定义inspections的相关功能，
以下记录我自定义的配置：


1. thymeleaf  的：expression variable validation ，由于tymeleaf的表达式定义在controller里，idea找不到其定义所以会报错，其实不影响运行，所以把这个inspect从error修改为warning。

2. xml 的unbound namespace prefixes  ， 这个也与thymeleaf有关，在一个项目中使用tymeleaf代码fragment时，由于th namespace没有bound，所以会不停报错，为了不影响，也把这个关了。


<!-- more -->
---
layout: post
title:  "一道题引出的Unix-Fork函数解析"
date:   2017-11-24 17:19:52 +0800
categories: Unix/Linux
---

```c
#include <unistd.h>
#include <stdio.h>
//可产生20个进程，包括main进程

int main(void) {
    fork();
    fork()&&fork()||fork();
    fork();
    printf("+  \n\n");
    return 0;
}
```
<!-- more -->
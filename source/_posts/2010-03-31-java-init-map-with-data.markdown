---
layout: post
title: 'Java: Mapをnewした時に値を入れて初期化するコード'
date: 2010-3-31
wordpress_id: 1061
permalink: /blog/java-init-map-with-data
comments: true
categories: [nil]
---
表題の通り、Mapをnewしたときに値を入れて
初期化するコード方法です。

```java
Map<String, Integer> map = new HashMap<String, Integer>() {
    {
        put("one", 1);
    }
};

```

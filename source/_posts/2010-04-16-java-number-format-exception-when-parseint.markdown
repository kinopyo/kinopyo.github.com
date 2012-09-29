---
layout: post
title: 'Java：Integer.parseInt時のNumberFormatExceptionについて'
date: 2010-4-16
wordpress_id: 1077
permalink: /blog/java-number-format-exception-when-parseint
comments: true
categories: Java
---
ハマっちゃったException第二弾です。
実際はハマったワケではありませんが、
一応こんなExceptionがあると。

```java
String blank = "";

int i = Integer.parseInt(blank);

```

これで余裕に下記のExceptionが出ます。
{% codeblock %}
java.lang.NumberFormatException: For input string: ""
{% endcodeblock %}

何も考えずにあるJavascriptの処理をJavaに書き換える作業で発生したんです。
JavascriptはブランクをparseIntするとNaN(Not a Number)になるが、
Javaは完全におちますね。。。

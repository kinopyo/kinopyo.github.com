---
layout: post
title: 'Flexでシステムクリップボードに内容をコピーするには'
date: 2010-5-6
wordpress_id: 1109
permalink: /blog/flex-copy-text-to-clipboar
comments: true
categories: Flex
---
テキストをクリップボードにコピーするコードです。
*System.setClipboard*の第一引数にテキストを渡せばOKです。

```java
System.setClipboard(text);

```

<a href="http://blog.flexexamples.com/2008/01/30/copying-text-to-the-operating-system-clipboard-in-flex/">ここにいいDEMOがあります。</a>

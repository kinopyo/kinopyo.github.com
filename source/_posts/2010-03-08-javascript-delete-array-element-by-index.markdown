---
layout: post
title: 'Javascript index指定で配列の要素を削除するには'
date: 2010-3-8
wordpress_id: 1032
permalink: /blog/javascript-delete-array-element-by-index
comments: true
categories: [nil]
---
今まで全然気付かなかったんです、
JavascriptのArrayにはdeleteみたいなAPIがないことに。
配列の要素をindex指定で削除したい場合は代わりにsplice関数を使います。

## splice関数
とほほからのレファレンスでは
{% blockquote %}

array.splice(start, n, e1, e2, ...) (N4)
0 から数えて、start 番目から n 個の要素を削除し、その代わりに e1, e2, ...を値とする要素を埋め込みます。戻り値は JavaScript のバージョンによって異なります。

{% endblockquote %}

```javascript
var xx = new Array("A", "B", "C", "D", "E", "F", "G");
xx.splice(2, 3, "c", "d", "e");   // "C", "D", "E" が小文字になります

```

## indexで配列の要素を削除するには

```javascript
myArray.splice(index, 1);

```

indexは削除する要素のindex、1はこの一つだけを削除する意味で
他のパラメータはいらないです。
またsplice後は配列そのものが変更されます。

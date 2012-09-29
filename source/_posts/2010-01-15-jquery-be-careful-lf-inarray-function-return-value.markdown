---
layout: post
title: 'jQuery $.inArray()関数の戻り値に注意を'
date: 2010-1-15
wordpress_id: 800
permalink: /blog/jquery-be-careful-lf-inarray-function-return-value
comments: true
categories: jQuery
---
## $.inArray(value, array)
指定した値が配列中にあれば、そのインデックスを返します。
配列に存在しなければ戻り値は"-1"になりますので注意してください。

```javascript

var array = *"a", "b", "c"*;

if ($.inArray("d", array) == -1) {
    // d is not in array
}

```

下記のコードは間違いですよ。。。
`if ($.inArray("d", array)) {}`

## $.isArray(obj)
パラメータで渡された値が配列であるかどうかを判別します。
戻り値はtrueかfalseです。

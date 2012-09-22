---
layout: post
title: 'iPhone safari(webkit-base browser)のcheckboxのサイズを調整'
date: 2011-9-30
wordpress_id: 2286
permalink: /blog/change-checkbox-size-in-iphone-safari
comments: true
categories: ["checkbox", "CSS", "iPhone", "safari"]
---
Webkit-baseのブラウザ(Safari, Google Chrome)に適用します。

普通のcheckboxはiphoneのようなスマートフォンで見るときとても小さいです。checkboxはcssでheightやwidthを指定しても効かないため、ちょっとしたトリックが必要です。

{% gist 1252946 %}

実機ではこんなふうになります。2.0, 1.5, 1.0の3つのサンプルです。

![](http://www.kinopyo.com/wp-content/uploads/2011/09/scale-checkbox-in-iphone-safari.jpg)
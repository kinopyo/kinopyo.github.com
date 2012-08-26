---
layout: post
title: 'Javascriptのforループのパフォーマンスのいい書き方'
date: 2010-2-22
wordpress_id: 1008
permalink: /blog/javascript-for-loop-good-performance
comments: true
categories: [nil]
---
面白いかと思ったのでメモしときます。

## 普通の書き方

```javascript
var rows = document.getElementsByTagName('tr');

for( var i = 0; i < rows.length; i++ ) {

   rows*i*.className = 'newclass';

   rows*i*.style.color = 'red';
  ...
}

```

## 効率のいい書き方

```javascript
var rows = document.getElementsByTagName('tr');

for( var i = 0, row; row = rows*i*; i++ ) {

    row.className = 'newclass';

    row.style.color = 'red';
    ...
}

```

参考サイト：[http://www.javaeye.com/topic/455376](http://www.javaeye.com/topic/455376)

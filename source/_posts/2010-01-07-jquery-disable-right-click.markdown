---
layout: post
title: 'jQueryで右クリックを無効にする方法'
date: 2010-1-7
wordpress_id: 683
permalink: /blog/jquery-disable-right-click
comments: true
categories: jQuery
---
jQueryでマウス右クリックを無効にする方法です。
"contextmenu"のイベントはjQueryのドキュメントには乗ってませんが、
それのハンドラでreturn falseすることで簡単に実現できます。

```javascript

$("document").bind("contextmenu", function(){
    return false;
});

```

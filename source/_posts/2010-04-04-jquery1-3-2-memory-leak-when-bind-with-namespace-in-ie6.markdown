---
layout: post
title: 'jQuery1.3.2 bind時にnamespaceを使うとIE6ではメモリリーク'
date: 2010-4-4
wordpress_id: 1064
permalink: /blog/jquery1-3-2-memory-leak-when-bind-with-namespace-in-ie6
comments: true
categories: [nil]
---
表題の通り、IE6 + jQuery1.3.2の状態でbindする時に
jQueryのnamespaceを使うと確実にメモリリークが発生します。
jQuery1.4.2では発生しないことを確認しました。

## メモリリークが発生するコード

```javascript
$("#foo").bind("change.abc", function(){});

```

上記"change.abc"のabcがnamespaceです。
それをなくすことでメモリリークは解消されます。
イベントハンドラの中身とは関係ありません。

## メモリリークは発生しない

```javascript
$("#foo").bind("change", function(){});

```

これはjQueryのbugとして上げられましたが、
完全に修正できなかったみたいです。
[http://dev.jquery.com/ticket/4241](http://dev.jquery.com/ticket/4241)で
当時の担当者のコメントを見ると

{% blockquote }

I had a really difficult time getting a reliable test case to verify this actually solves the memory leak. r6321 appears to have fixed this issue

{% endblockquote %}
「時間ないからちゃんとテストしてない、r6321の対応で解決できたように見える」と、
ずいぶん適当な回答ですよね。。。

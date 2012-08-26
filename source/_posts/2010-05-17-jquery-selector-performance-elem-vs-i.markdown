---
layout: post
title: 'jQueryセレクタのパフォーマンス：elem vs id'
date: 2010-5-17
wordpress_id: 1139
permalink: /blog/jquery-selector-performance-elem-vs-i
comments: true
categories: [nil]
---
elem指定とID指定のjQueryセレクタパフォーマンス実験を行いました。
<strong>"先にJavascriptでelementをとってそれをjQueryの$セレクタに囲むやつ"</strong>
vs
<strong>"直接jQueryのidセレクタでとるやつ"。</strong>

<br/>

コードで言うと
<strong>$(document.getElementById("foo"))</strong>
vs
<strong>$("#foo")</strong>

<br/>
普通前者が勝だろうと思うだろう、
どれくらいの差かを確認したくて。

## 結果
一万回ループでとった結果です。

+  IE8: 187 vs 344
+  IE6: 203 vs 453
+  Firefox×(3.6.3):  21 vs 63
+  Chrome(4.1.xx):  9 vs 39

## サンプルコード

<a href="http://www.kinopyo.com/demo/jquery/selector_performance.html" target="_blank" >デモページへ</a>

```javascript
var t0 = new Date();

for (var i=0; i<10000; i++){
	$(document.getElementById("foo"));
}

var t1 = new Date();

for (var i=0; i<10000; i++){
	$("#foo");
}

var t2 = new Date();

alert("直接elementを渡す時間は：" + (t1-t0) + " , ID指定でとる時間は："+ (t2-t1));

```

---
layout: post
title: 'jQuery1.3.2のバグ?IEで&nbsp;を$.trimするとき変な結果に'
date: 2010-3-10
wordpress_id: 1034
permalink: /blog/jquery1-3-2_bug_trim_nbsp
comments: true
categories: jQuery
---
jQuery 1.4.2ではこれは治ったようです。
jQuery最新版をお使いの方は下記のようなバグはもう発生しません。

## サンプル
※jQuery 1.3.2で発生する問題※
### HTML

```html
<select>
	<option id="foo">&nbsp;</option>
	<option>11</option>
	<option>22</option>
</select>

<tr id="bar">&nbsp;</tr>

```

### Javascript

```javascript
var optionText = $("#foo").text();

// firefoxは0、IEは1
alert("select optionタグの をtrimした後のlength: " + $.trim(optionText).length);

var trText = $("#bar").text();

// firefoxは0、IEも0！
alert("trタグの をtrimした後のlength: " + $.trim(trText).length);

```

## 結果
selectのoptionタグのテキストにある<span>"&amp;nbsp;"</span>に
$.trimをかけて見ると
Firefoxはちゃんとtrimしてlengthが0になったが、
IEはtrimできずlengthが1のままです。

しかしtrタグのテキストにある"&amp;nbsp;"をtrimすると
IEも正しくtrimしてlengthが0になるんです。。。

## DEMO
<a href="http://www.kinopyo.com/demo/jquery/jQuery1.3.2_trim_nbsp.html" target="_blank">jQuery最新版(1.4.2)を使うDEMO</a>

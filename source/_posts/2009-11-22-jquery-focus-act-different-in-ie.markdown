---
layout: post
title: 'jQuery focus()によるIEとFirefox動きの違い'
date: 2009-11-22
wordpress_id: 314
permalink: /blog/jquery-focus-act-different-in-ie
comments: true
categories: jQuery
---
<div class="section">

jQueryのfocus()はデフォルトのフォーカス動作とそのエレメントにバインドされたイベントが実行されます。

しかしIE8とFirefoxではこのfocus()の動作が多少違います。
<h4>現象</h4>
例えば複数のinput要素があって、それぞれfocusイベントとblurイベントがバインドされたとします。

focus()を実行する前はelem1にフォーカスしていて、要素$('elem2').focus()を実行すると
<ul>
	<li>Firefox 3.5.5ではelem1のblurイベントが実行した後に、elem2のfocusイベントが実行する</li>
	<li>IE8ではelem1のblurイベントは実行されますが、elem2には2回フォーカスするように動作します。つまり下記の動きです。
<ol>
	<li>elem1のblurイベント</li>
	<li>elem2のfocusイベント</li>
	<li><strong>elem2のblurイベント</strong></li>
	<li><strong>elem2のfocusイベント</strong></li>
</ol>
</li>
</ul>
普通に考えたらFirefoxの動きが正しいはずですよね。
上記の3と4は余計な処理になります。
<h4>サンプルコード</h4>
```javascript

$("form :input").bind("focus", function() {
	$(this).css("background-color", "gray");
	// ログを出力
		$("#result").append($(this).get(0).id + " focus event triggered.<br>");
	}).bind("blur", function() {
	$(this).css("background-color", "");
	// ログを出力
		$("#result").append($(this).get(0).id + " blur event triggered.<br>");
	});
$("#foo").focus();
setTimeout(focusBar, 3000);
function focusBar() {
	$("#" + document.activeElement.id).trigger('blur');
	$("#bar").focus();
};
{% endcodeblock %}
<pre class="brush:html">
Foo<input id="foo" type="text" />
Bar<input id="bar" type="text" />
<div id="result"></div>

```
先にfooテキストエリアにフォーカスしてくささい。

3秒後にbarテキストエリアにfocus()メソッドでフォーカスします。

その時の出力ログを見てください。
<h4>回避策</h4>
まだいい方法はつかんでません。

Googleで検索すると似たようなものはありましたが、

回避策はまだないようです。

<a href="http://www.mail-archive.com/jquery-en@googlegroups.com/msg88436.html" target="_blank">[jQuery] Focus event firing twice in Internet Explorer</a></div>

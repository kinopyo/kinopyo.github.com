---
layout: post
title: 'jQuery逆引きレファレンス、属性＆コンテンツ編(@ITより)'
date: 2009-11-23
wordpress_id: 316
permalink: /blog/jquery-reverse-lookup-reference-attribute
comments: true
categories: jQuery
---
<div class="section">
<p><a href="http://www.atmarkit.co.jp/fdotnet/jqueryref/02attribute/attribute_00.html" target="_blank">@IT連載：jQuery逆引きリファレンスの第二回</a>のテーマは属性＆コンテンツです。</p>
<p>目次は以下になります。</p>
<blockquote>
<p>    * 属性値を取得するには？</p>
<p>    * 属性値を設定するには？</p>
<p>    * 複数の属性値をまとめて設定するには？</p>
<p>    * 関数の結果によって動的に属性値を設定するには？</p>
<p>    * 属性値を削除するには？</p>
<p>    * スタイル・クラスを追加／削除するには？</p>
<p>    * スタイル・クラスが適用されているかを判定するには？</p>
<p>    * スタイル・クラスの適用／解除を交互に行うには？</p>
<p>    * 要素に適用されたスタイル情報を取得するには？</p>
<p>    * 要素に特定のスタイルを適用するには？</p>
<p>    * 複数のスタイル・プロパティをまとめて設定するには？</p>
<p>    * 要素の表示位置を取得するには？</p>
<p>    * ページのスクロール位置を取得／設定するには？</p>
<p>    * 要素の高さや幅を取得するには？</p>
<p>    * 要素の高さや幅を設定するには？</p>
<p>    * 要素のテキストを取得するには？</p>
<p>    * 要素のテキストを設定するには？</p>
<p>    * フォーム要素の値を取得／設定するには？</p>
</blockquote>
<h4>勉強メモ</h4>
<h5>text()とhtml()の違い</h5>
<blockquote title="http://www.atmarkit.co.jp/fdotnet/jqueryref/02attribute/attribute_16.html" cite="http://www.atmarkit.co.jp/fdotnet/jqueryref/02attribute/attribute_16.html">
<p>（1）取得する対象</p>
<p>　要素セット（jQueryオブジェクト）が複数の要素を含んでいる場合、htmlメソッドは先頭要素の内容だけを取得しますが、textメソッドはすべての要素の内容を結合したものを取得します。</p>
<p>（2）取得する内容</p>
<p>　名前のとおり、htmlメソッドは要素の内容をHTML文字列として取得しますが、textメソッドは純粋なテキストだけを取得します。</p>
<p>（3）対応する形式</p>
<p>　textメソッドはHTML／XMLいずれの形式でも動作しますが、htmlメソッドはHTML（XHTMLを含む）形式でしか動作しません。このサンプルでは扱っていませんが、textメソッドをXML形式で利用する方法については、あらためてAjax編で紹介する予定です。</p>
<cite><a href="http://www.atmarkit.co.jp/fdotnet/jqueryref/02attribute/attribute_16.html" target="_blank">http://www.atmarkit.co.jp/fdotnet/jqueryref/02attribute/attribute_16.html</a></cite></blockquote>
<h5>height(val)、width(val)</h5>
<p>引数valには数値、もしくは「em」や「%」などの単位付きの数値を指定できます（単なる数値の場合はピクセル値として認識します）。</p>
<h5>要素の高さや幅を取得するには？</h5>
<p>－ height()、width()、innerHeight()、innerWidth()、outerHeight()、outerWidth()</p>
<table>
<tr><td>関数</td><th>padding</th><th>border-width</th><th>margin</th></tr>
<tr><td>height、width</td><td>x</td><td>x</td><td>x</td></tr>
<tr><td>innerHeight、innerWidth</td><td>o</td><td>x</td><td>x</td></tr>
<tr><td>outerHeight、outerWidth</td><td>o</td><td>o</td><td>x</td></tr>
<tr><td>outerHeight、outerWidth（true</td><td>o</td><td>o</td><td>o</td></tr>
</table>
<br/>
<h5>関数の結果によって動的に属性値を設定するには？</h5>
<p>－ attr(name, fnc) －</p>
<p>コールバック関数の戻り値を用いて設定。</p>
```javascript

$(function() {
	$('li > img').attr(
			'src',
			function(index) {
				return "http://www.wings.msn.to/books/" + this.id + "/"
						+ this.id + "_logo.jpg";
			});
});

```
<br/>
<p> </p>
</div>

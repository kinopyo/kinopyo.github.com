---
layout: post
title: 'jQuery Eventオブジェクトの詳細、バブリングの仕組み'
date: 2009-11-11
wordpress_id: 299
permalink: /blog/jquery-detail-of-event-object-structure-of-bubbling
comments: true
categories: [nil]
---
jQueryのEventオブジェクトには

いくつかのプロパティとメソッドがありますが、

それらの定義より、実際どの場面に使えるかを重点として紹介したいと思います。
<h4>dataプロパティ</h4>
bind時に渡されたデータを保持します。

こちらの記事<a href="http://d.hatena.ne.jp/kinopyo/20091111/1257946002">「jQuery bindバインド時にデータを渡す」</a>をごらんください。
<h4>currentTargetとtargetプロパティ</h4>
最初currentTargetはイベントが発生したDOM要素だと理解していましたが、

jQueryのドキュメントを見ると似た名前でtargetの属性もあります。

そしてcurrentTargetには「バブリング」のキーワードが出てきましたので、

詳しく書きたいと思います。

<a name="seemore"></a>

サンプル：

一番大きいdiv範囲内をクリックするとそのdivのclass属性の値を返すJavaScriptです。
```javascript

$(".big").bind("click",function(evt){
	alert(evt.currentTarget.className);
});
{% endcodeblock %}
そしてHTMLコードは以こんな感じです。CSSの部分は省略しました。

直接画像を参照してください。
{% codeblock %}

<div class="big">
	<div class="medium">
		<div class="small">
		</div>
	</div>
</div>
{% endcodeblock %}
<a class="hatena-fotolife" href="http://f.hatena.ne.jp/kinopyo/20091111223232" target="_blank"><img class="hatena-fotolife" title="f:id:kinopyo:20091111223232j:image" src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091111/20091111223232.jpg" alt="f:id:kinopyo:20091111223232j:image" /></a>

alert部分のevt.currentTargetとevt.targetを入れ替えて検証します。
<ul>
	<li>黄色の部分をクリック
<ul>
	<li>currentTarget：big</li>
	<li>target：small</li>
</ul>
</li>
</ul>
<ul>
	<li>緑色の部分をクリック
<ul>
	<li>currentTarget：big</li>
	<li>target：medium</li>
</ul>
</li>
</ul>
<ul>
	<li>青色の部分をクリック
<ul>
	<li>currentTarget：big</li>
	<li>target：big</li>
</ul>
</li>
</ul>
結果：

currentTargetは常にbigを表示するに対し、

targetは子要素まで「精確」表示する

どうですか、あたり？はずれ？

ここでもう一回jQueryのドキュメントを見てみましょう。
<blockquote><span style="font-weight:bold;font-size:x-large;">currentTarget</span>

The current DOM element within the event bubbling phase.This attribute will always be equal to this of the function.</blockquote>
<blockquote><span style="font-weight:bold;font-size:x-large;">target</span>

Contains the DOM element that issued the event.

This can be the element that registered for the event or a child of it.</blockquote>
currentTargetは実際bind時の要素を指して、

targetはその要素および子要素まで全部含んでいると私は理解しましたが、

「バブリングフェーズ」の言葉については未だ曖昧な感じです。

そしてcurrentTargetは常にハンドラ内のthisと同じことも覚えておきましょう。

クロージャを使う際に例えばthisがほかのオブジェクトを指しても

event.currentTargetでイベントにバインドされた要素を使えます。
<h4>pageX、pageYプロパティ</h4>
<ul>
	<li>定義：イベント発生時のマウス座標</li>
</ul>
この「マウス座標」に興味があり、本当にイベント発生時のマウス座標か、

それともイベントが発生時のDOM要素の座標かを試しました。

jQueryサンプルのソースを使いました。
<pre class="brush:javascript">
$("a").click(function(event){
	alert("Current mouse position: "
		+ event.pageX + ", " + event.pageY);
})
{% endcodeblock %}
<ul>
	<li>マウスでクリック：「Current mouse position: 37, 312」</li>
	<li>リンクにTabでフォーカスしEnter：「Current mouse position: 0, 0」</li>
</ul>
本当にマウスによるイベントでしか座標が取れないみたいです。

応用としてはツールチップなどのプラグインで、

マウス現在の座標でオフセットして表示するイメージです。
<h4>stopPropagation()メソッド</h4>
これはバブリングに対してよく使われる用語ですね。

バブリングは言語に制限せずイベントに関する制御では必ず出てきます。

最近見たFlex3でもバブリングがあったし、

iPhoneの開発でもresponder chainの用語があり、その中身も実際はバブリングの話です。

一回だけ徹底で勉強すればどの場面でも使えるんです。

ここまで書いてちょっと疲れましたが、

自分もちゃんと決着をつけたいので、やはり書きましょう！

利用するサンプルはやはりさっきの大中小DIVです。

JavaScriptのほうのみ修正します。
<pre class="brush:javascript">
$(".big").bind("click",function(evt){
	alert("big");
});
$(".medium").bind("click",function(evt){
	alert("medium");
});
$(".small").bind("click",function(evt){
	alert("small");
	evt.stopPropagation();
});
{% endcodeblock %}
<ul>
	<li>黄色部分をクリックするとsmallのみが出力される</li>
</ul>
<h5>解釈</h5>
もしstopPropagationがなかったら

そもそもの動きとしてはまずイベントが発生した要素smallのイベントハンドラが処理を行います。

そしてそのsmall要素が属している親要素にイベント終了とのことを伝播し、

もしその親要素も該当イベントにバインドされたら、親のイベントハンドラが実行します。

こんな形でどんどん親にイベントを伝播するイメージがまさにバブリングという単語の意味です。

stopPropagationが実行されるとそのバブリングフェーズが終了した時点で親に対しての伝播を中止します。

自分もよくわからない「バブリングフェーズ」の用語を使っちゃいました。

なぜかって言うと、次のサンプルを先に見てみましょう。

さっきのJavaScriptを元に一つの処理だけを追加しました。
<pre class="brush:javascript">
$(".big").bind("click",function(evt){
	alert("big");
});
$(".medium").bind("click",function(evt){
	alert("medium");
});
$(".small").bind("click",function(evt){
	alert("small");
	evt.stopPropagation();
});
$(".small").bind("click",function(evt){
	alert("small2");
});

{% endcodeblock %}
これでsmallの黄色部分をクリックするとどうなるでしょうか？

small2は表示されますか？

答えは、表示されます。

なぜならさっき言ったようにstopPropagationは親に対しての伝播を中止するだけで、

同じ要素に対しての処理には影響がないとのことです。

もし同じ要素に対しても処理を中止したい場合はstopPropagation()の代わりに、

これは使います。
<pre class="brush:javascript">
event.stopImmediatePropagation();

```
これならさっきの例で言うと、small2は出力されません。

イベントオブジェクトについてはとりあえずこの辺で終わります。
<h4>参考サイト</h4>
<a href="http://docs.jquery.com/Events/jQuery.Event">公式サイトのEventオブジェクトドキュメント</a>

<a href="http://stacktrace.jp/jquery/api/events/event_object.html">StackTraceサイト</a>

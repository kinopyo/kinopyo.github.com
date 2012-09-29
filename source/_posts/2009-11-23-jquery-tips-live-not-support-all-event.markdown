---
layout: post
title: 'jQuery Tips: live関数はすべてのイベントに有効じゃない、その他...'
date: 2009-11-23
wordpress_id: 317
permalink: /blog/jquery-tips-live-not-support-all-event
comments: true
categories: jQuery
---
<div class="section">
<p>今までjQueryを使ってきたtipsをメモします。</p>
<p>Tipsの定義とおり知っていればちょっと便利になるけど、</p>
<p>知らなくても特に問題ないですね。</p>
<p>ただしlive関数においてはすべてのイベントに有効じゃないのは</p>
<p>知っておいてほしいです。</p>
<h4>live関数</h4>
<p>liveはすべてのイベントに対応していない。</p>
<h5>サポート</h5>
<p>click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, keydown, keypress, keyup</p>
<h5>非サポート</h5>
<p>blur, focus, mouseenter, mouseleave, change, submit</p>
<br/>
<h4>ajax関数のurlパラメータ</h4>
<p>AJAXのURLではセレクタも併用できる。セレクタによりあるページの一部だけを読み込むことができる。</p>
<p>こんな形です："url #some &#62; selector"</p>
<p>デフォルトは"body&#62;*"のセレクタが適用されていますよ。</p>
```javascript

$("#links").load("/Main_Page #jq-p-Getting-Started li");
{% endcodeblock %}
<br/>
<h4>：has(selector)フィルタ</h4>
<p>：has(selector)は持ってるすべての子要素に対して動作してる</p>
<p>divい対して:hasフィルタを使うと、p要素までフィルタが走る</p>
{% codeblock %}

<div>
	<span>span ...
	<p>p.. </p>
	</span>
</div>
{% endcodeblock %}
<h4>属性フィルタの組み合わせ</h4>
<p>[filter][filter]……のように複数を連続して記述することもできます。この場合、すべての属性フィルタに合致する要素だけが取り出されます。</p>
<h4>htmlの組み立て</h4>
<h5>ハードコードで書く</h5>
<pre class="brush:javascript">
$(select).append("<option value='" + 1 + "'>text</option>");
{% endcodeblock %}
<h5>jQueryの関数を用いて書く</h5>
<pre class="brush:javascript">
$(select).append($('<option>').attr({ value: 1 }).text("text"));

{% endcodeblock %}
このほうが簡潔だと思いますが、、
<br/>
<h4>:nth-child</h4>
<p>:nth-childフィルタによりn行おきに子要素を取得することができる</p>
<p>例えば、2、5、8行目……のように3行おきに（「3で割ったときの余りが2」番目の）要素を取得したい場合には、以下のように記述できます。</p>
<pre class="brush:javascript">
$('ol > li:nth-child(3n + 2)')
```
<br/>
<h4>validationプラグイン</h4>
<p>jQueryのvalidationプラグイン:showErrorを定義するとhighlightとunhighlightとは実行しない</p>
<p>そもそもshowErrorはエラーをどう表示するかを決めるための高レベルの関数なので、</p>
<p>簡略化したhighlightとunhighlightは隠蔽されたっぽいの感じで、完全に実行しません。</p>
</div>

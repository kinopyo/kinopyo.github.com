---
layout: post
title: 'IE8でbackground-colorが白とその値がnullとの表示が微妙に違う'
date: 2009-11-24
wordpress_id: 318
permalink: /blog/css-issue-in-ie8-background-color
comments: true
categories: [nil]
---
<div class="section">
<h4>現象</h4>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091124235949" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091124/20091124235949.jpg" alt="f:id:kinopyo:20091124235949j:image" title="f:id:kinopyo:20091124235949j:image" class="hatena-fotolife"></a></p>
<p>まず画像を見てみましょう。</p>
<p>最初の二つ白い背景のエリアに注目してください。</p>
<p>一番目は背景色を白い色(#FFFFFF)に設定したもので、</p>
<p>二番目が背景色をnullに設定したものです。</p>
<p>白い色に明確に設定したほうのborderの左と上の表示が少し違ってます。</p>
<br/>
<p>またIE8の開発ツール(F12で呼ばれる、Firebugと似たデバッグツール)で見ても</p>
<p>background-colorが#ffffffになってる以外に、何の余計なスタイルもありませんでした。</p>
<p>なのでやはりbackground-colorが指定してないものと#ffffffに指定したものには差異が存在してます。</p>
<br/>
<h4>サンプルコード</h4>
{% codeblock %}

<span class="synIdentifier">&#60;</span><span class="synStatement">div</span><span class="synIdentifier">&#62;</span>
<span class="synIdentifier">&#60;</span><span class="synStatement">input</span><span class="synIdentifier"> </span><span class="synType">id</span><span class="synIdentifier">=</span><span class="synConstant">&#34;foo&#34;</span><span class="synIdentifier"> </span><span class="synType">type</span><span class="synIdentifier">=</span><span class="synConstant">&#34;text&#34;</span><span class="synIdentifier"> /&#62;</span>
<span class="synIdentifier">&#60;</span><span class="synStatement">input</span><span class="synIdentifier"> </span><span class="synType">id</span><span class="synIdentifier">=</span><span class="synConstant">&#34;bar&#34;</span><span class="synIdentifier"> </span><span class="synType">type</span><span class="synIdentifier">=</span><span class="synConstant">&#34;text&#34;</span><span class="synIdentifier"> /&#62;</span>
<span class="synIdentifier">&#60;/</span><span class="synStatement">div</span><span class="synIdentifier">&#62;</span>
<span class="synIdentifier">&#60;</span><span class="synStatement">div</span><span class="synIdentifier">&#62;</span>
<span class="synIdentifier">&#60;</span><span class="synStatement">input</span><span class="synIdentifier"> </span><span class="synType">id</span><span class="synIdentifier">=</span><span class="synConstant">&#34;hoge&#34;</span><span class="synIdentifier"> </span><span class="synType">class</span><span class="synIdentifier">=</span><span class="synConstant">&#34;gray&#34;</span><span class="synIdentifier"> </span><span class="synType">type</span><span class="synIdentifier">=</span><span class="synConstant">&#34;text&#34;</span><span class="synIdentifier"> /&#62;</span>
<span class="synIdentifier">&#60;</span><span class="synStatement">input</span><span class="synIdentifier"> </span><span class="synType">class</span><span class="synIdentifier">=</span><span class="synConstant">&#34;gray&#34;</span><span class="synIdentifier"> </span><span class="synType">type</span><span class="synIdentifier">=</span><span class="synConstant">&#34;text&#34;</span><span class="synIdentifier"> /&#62;</span>
<span class="synIdentifier">&#60;/</span><span class="synStatement">div</span><span class="synIdentifier">&#62;</span>
{% endcodeblock %}
<pre class="syntax-highlight">
$(<span class="synStatement">document</span>).ready(<span class="synIdentifier">function</span>()<span class="synIdentifier">{</span>
　　<span class="synComment">// 元の背景色を保持</span>
<span class="synIdentifier">var</span> original = $(<span class="synConstant">&#34;#foo&#34;</span>).css(<span class="synConstant">&#34;background-color&#34;</span>);
<span class="synStatement">alert</span>(original);	<span class="synComment">// output is &#34;ffffff&#34;</span>
　　<span class="synComment">// 元の背景色を再設定、値は同じはず</span>
$(<span class="synConstant">&#34;#foo&#34;</span>).css(<span class="synConstant">&#34;background-color&#34;</span>,original);
<span class="synComment">// 他の背景色はこんな現象がないみたい</span>
<span class="synComment">// あるとしても発見しづらい	</span>
　　<span class="synIdentifier">var</span> hogeColor = $(<span class="synConstant">&#34;#hoge&#34;</span>).css(<span class="synConstant">&#34;background-color&#34;</span>);
<span class="synStatement">alert</span>(hogeColor);	<span class="synComment">// output is &#34;gray&#34;</span>
$(<span class="synConstant">&#34;#hoge&#34;</span>).css(<span class="synConstant">&#34;background-color&#34;</span>,hogeColor);
<span class="synIdentifier">}</span>);

{% endcodeblock %}
<br/>
<br/>
<p>　</p>
</div>

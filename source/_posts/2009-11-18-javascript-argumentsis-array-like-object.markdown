---
layout: post
title: 'JavaScript: argumentsは配列じゃない、配列のメソッドを使うには'
date: 2009-11-18
wordpress_id: 309
permalink: /blog/javascript-argumentsis-array-like-object
comments: true
categories: Javascript
---
<div class="section">
<p>argumentsは配列じゃないため、配列のメソッドは</p>
<p>使えません。ということは本を読んだとき当たり前だと思ったんですが、</p>
<p>実際コードに落としたときは</p>
<p>自然とargument.slice()を書いちゃいました。</p>
<h4>argumentsで配列のメソッドを使うには</h4>
<p><span style="color:#0000FF;">Array.prototype.&#60;配列のメソッド&#62;.call(arguments,&#60;パラメータ&#62;)</span></p>
{% codeblock %}

<span class="synType">Array</span>.prototype.slice.call(<span class="synIdentifier">arguments</span>,2)
{% endcodeblock %}
<p>上記の意図としてはarguments.slice(2)の表現に近いです。</p>
<h4>argumentsはarray-likeオブジェクト</h4>
<p>ここでちょっとargumentsの基本知識を復習します。</p>
<p>length属性もあるし、[]でindex指定のオブジェクトを参照できますけど、</p>
<p>argumentsは配列に似ているオブジェクトだけです。</p>
<h5>予約語</h5>
<p>Technically, argumentsは予約語ではないですが、</p>
<p>予約語として認識してよいです。</p>
<p>つまりargumentsという変数は作成しないでってことです。</p>
<br/>
<pre class="syntax-highlight">
<span class="synIdentifier">function</span> foo(x)<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(x);
<span class="synIdentifier">var</span> <span class="synIdentifier">arguments</span>;
<span class="synIdentifier">arguments[</span>0<span class="synIdentifier">]</span> = <span class="synStatement">null</span>;	<span class="synComment">//xの値が変更されちゃう</span>
<span class="synStatement">alert</span>(x);	<span class="synComment">// null が出力される</span>
<span class="synIdentifier">}</span>
{% endcodeblock %}
<h5>callee Property</h5>
<p>Refers to the function that is currently being executed.</p>
<p>今実行中のファクションを参照しています。</p>
<pre class="syntax-highlight">
<span class="synIdentifier">function</span>(x) <span class="synIdentifier">{</span>
<span class="synStatement">if</span> (x &#60;= 1) <span class="synStatement">return</span> 1;
<span class="synStatement">return</span> x * <span class="synIdentifier">arguments</span>.callee(x-1);
<span class="synIdentifier">}</span>

{% endcodeblock %}
<br/>
<p>　</p>
</div>

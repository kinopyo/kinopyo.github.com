---
layout: post
title: 'HTML Formの間隔(余白)をmarginで調整'
date: 2009-11-3
wordpress_id: 293
permalink: /blog/adjust-html-form-blank-with-margin
comments: true
categories: [nil]
---
<h4>目的</h4>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091103224149" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091103/20091103224149.gif" alt="f:id:kinopyo:20091103224149g:image" title="f:id:kinopyo:20091103224149g:image" class="hatena-fotolife"></a></p>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091103224150" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091103/20091103224150.gif" alt="f:id:kinopyo:20091103224150g:image" title="f:id:kinopyo:20091103224150g:image" class="hatena-fotolife"></a></p>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091103224151" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091103/20091103224151.gif" alt="f:id:kinopyo:20091103224151g:image" title="f:id:kinopyo:20091103224151g:image" class="hatena-fotolife"></a></p>
<p>見たの通りform前後の余白を消しました。</p>
<p>これはフォームがテーブルなどを跨がる場合に</p>
<p>レイアウトを調整するのに非常に役に立ちます。</p>
<h4>方法</h4>
<p><span style="color:#0033FF;">formのmarginを0pxに</span>設定します。</p>
{% codeblock %}

<span class="synIdentifier">&#60;</span><span class="synStatement">form</span><span class="synIdentifier"> </span><span class="synType">style</span><span class="synIdentifier">=</span><span class="synConstant">&#34;margin:0px;&#34;</span><span class="synIdentifier">&#62;</span>

{% endcodeblock %}
<p>また<span style="color:#0033FF;">margin-top</span>や<span style="color:#0033FF;">margin-bottom</span>でなどで詳しく指定できます。</p>
<p><span style="color:#0033FF;">マイナス値</span>も入力でき、さらに間隔を縮むめることができます。</p>
<p>参考となったサイト：<a href="http://www.1uphp.com/con1/form/form1style.html" target="_blank">http://www.1uphp.com/con1/form/form1style.html</a></p>

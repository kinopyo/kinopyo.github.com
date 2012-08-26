---
layout: post
title: 'JavaScriptにオーバーロードはない'
date: 2009-10-24
wordpress_id: 280
permalink: /blog/javascript-there-is-no-overload
comments: true
categories: [nil]
---
<div class="section">
<p>javaをやってからJavaScriptにかえると、</p>
<p>なかなかなれませんね。</p>
<br/>
<p>例えばJavaではオーバーロードができるが、</p>
<p>JavaScriptには通用しない。</p>
<br/>
<p>すごく簡単に言うと、オーバーロードは多重定義の意味で、</p>
<p>同じメソッド名で違う型、数のパラメータがある時、それぞれ一つのメソッドとして認められる。</p>
<p>一方、JavaScriptでは後勝ちです。</p>
<p>先に定義したものが無効になります。</p>
{% codeblock %}

<span class="synIdentifier">function</span> func(param) <span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(param);
<span class="synIdentifier">}</span>
<span class="synIdentifier">function</span> func() <span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(1);
<span class="synIdentifier">}</span>;
func(<span class="synConstant">&#34;test&#34;</span>);
func();
{% endcodeblock %}
<p>同じfuncの名前で作られた関数で、一個目はparamというパラメータがついてる。</p>
<p>二番目はパラメータがない。</p>
<p>すると結果は： 1 1 になります。</p>
<p>常に後で定義したものが勝ちます。</p>
<br/>
<pre class="syntax-highlight">
<span class="synIdentifier">function</span> func()<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(1);
<span class="synIdentifier">}</span>;
<span class="synIdentifier">function</span> func(param)<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(param);
<span class="synIdentifier">}</span>

{% endcodeblock %}
<p>これは「test undefined」になります。</p>
</div>

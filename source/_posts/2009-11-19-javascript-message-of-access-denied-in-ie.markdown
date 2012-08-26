---
layout: post
title: 'IE JavaScript実行した際の「アクセスが拒否されました」メッセージ'
date: 2009-11-19
wordpress_id: 311
permalink: /blog/javascript-message-of-access-denied-in-ie
comments: true
categories: [nil]
---
<div class="section">
<h4>経緯</h4>
<p>iframeで動的に画面を読み込む際URL不正などによる通信エラーが起こした場合の</p>
<p>エラーハンドラを追加したかったので判断するロジックが必要でした。</p>
<p>わざと誤ったURLを渡して検証しましたが、以下のコードはだめでした。</p>
<br/>
{% codeblock %}

<span class="synComment">// documentがnullかと思ってそれで判断しようとしたんです。</span>
<span class="synStatement">if</span> (<span class="synIdentifier">this</span>.contentWindow.<span class="synStatement">document</span>) <span class="synIdentifier">{}</span>
{% endcodeblock %}
<h4>現象</h4>
<p>あるプロパティは存在しているのに、アクセスができない。コードで書くと</p>
<pre class="syntax-highlight">
<span class="synComment">// プロパティがオブジェクトに存在するかを判断</span>
<span class="synComment">// ここはアラーとが出した、つまり存在したってこと</span>
<span class="synStatement">if</span> (<span class="synConstant">&#34;aProperty&#34;</span> <span class="synStatement">in</span> obj) <span class="synStatement">alert</span>(<span class="synConstant">'obj has aProperty'</span>);
<span class="synComment">// 次にそのオブジェクトにアクセスしようとすると</span>
<span class="synComment">// エラーになった</span>
obj.aProperty
{% endcodeblock %}
<p>IE8の開発ツールで見たら「アクセスが拒否されました」と書いてある。</p>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091119133655" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091119/20091119133655.jpg" alt="f:id:kinopyo:20091119133655j:image" title="f:id:kinopyo:20091119133655j:image" class="hatena-fotolife"></a></p>
<br/>
<h4>エラーをcatch</h4>
<p>判断のロジックをtry-catch文に書けばいいです。</p>
<pre class="syntax-highlight">
<span class="synStatement">try</span> <span class="synIdentifier">{</span>
<span class="synIdentifier">this</span>.contentWindow.<span class="synStatement">document</span>;
<span class="synIdentifier">}</span> <span class="synStatement">catch</span> (e) <span class="synIdentifier">{</span>
<span class="synStatement">if</span> (e.<span class="synType">number</span> == -2147024891) <span class="synIdentifier">{</span>
<span class="synComment">//アクセスが拒否されました。</span>
<span class="synStatement">alert</span>(e.message);
<span class="synIdentifier">}</span> <span class="synStatement">else</span> <span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(<span class="synConstant">&#34;別のメッセージ&#34;</span>);
<span class="synIdentifier">}</span>
<span class="synIdentifier">}</span>

{% endcodeblock %}
<br/>
<p>参考サイト：<a href="http://sei.qee.jp/docs/freetalk/2009/02.html" target="_blank">http://sei.qee.jp/docs/freetalk/2009/02.html</a></p>
</div>

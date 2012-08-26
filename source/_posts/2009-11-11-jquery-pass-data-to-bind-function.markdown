---
layout: post
title: 'jQuery bindバインド時にデータを渡す'
date: 2009-11-11
wordpress_id: 300
permalink: /blog/jquery-pass-data-to-bind-function
comments: true
categories: [nil]
---
<div class="section">
<h4>誤った使い方</h4>
<p>例えばbind時にname変数に格納された情報を渡したい</p>
{% codeblock %}

<span class="synIdentifier">var</span> name = <span class="synConstant">&#34;kinopyo&#34;</span>;
$(<span class="synConstant">&#34;:button&#34;</span>).bind(<span class="synConstant">&#34;click&#34;</span>,<span class="synIdentifier">function</span>(name)<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(name);
<span class="synIdentifier">}</span>);
{% endcodeblock %}
<p>これは誤った使い方です。</p>
<a name="seemore"></a>
<p>alertでは望まれた「kinopyo」の文字列は表示されません。</p>
<p>私は最初jQueryに触れたときはこんな書き方をしたんです。</p>
<br/>
<p>もちろんname変数とbindのコールバックは同じスコープなのでfunctionから直接name変数を参照できますが、</p>
<p>ここではあえて誤った使い方にしました。</p>
<br/>
<p>実際alertでは[object Object]と表示されました。</p>
<p>firebugで中身をのぞいてみるとこんな感じのオブジェクトです。</p>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091111222209" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091111/20091111222209.jpg" alt="f:id:kinopyo:20091111222209j:image" title="f:id:kinopyo:20091111222209j:image" class="hatena-fotolife"></a></p>
<p>このnameは一体何のか、答えはjQueryのEventオブジェクトです。</p>
<p>Eventオブジェクトについてはこの記事<a href="http://d.hatena.ne.jp/kinopyo/20091111/1257946561">「jQuery Eventオブジェクトの詳細、バブリングの仕組み」</a>を参照してください。</p>
<h4>bindのAPI</h4>
<p><span style="font-weight:bold;font-size:x-large;">bind(type, [data], fn)</span></p>
<ul>
<li>type：click, dbclick,mousedown...などトリガーとなるイベントタイプ</li>
<li>[data]：<span style="color:#0000FF;">第三パラメータのハンドラにデータを渡す。括弧は配列の意味ではなく、省略可の意味</li>
<li>fn：イベントハンドラ</span>
<ul>
<li>パラメータ：jQueryのEventオブジェクト、event.dataで第二引数の[data]を参照できる</li>
</ul>
</li>
</ul>
<p>jQueryは第二パラメータに対してdataかfunctionか自動判断してます。</p>
<p>普段使い慣れたのはdataを省略したものでしょう。</p>
<p>さっきの例を修正すると、正しく「kinopyo」が表示されます。</p>
<pre class="syntax-highlight">
<span class="synIdentifier">var</span> name = <span class="synConstant">&#34;kinopyo&#34;</span>;
$(<span class="synConstant">&#34;:button&#34;</span>).bind(<span class="synConstant">&#34;click&#34;</span>,name,<span class="synIdentifier">function</span>(<span class="synStatement">event</span>)<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(<span class="synStatement">event</span>.data);
<span class="synIdentifier">}</span>);

{% endcodeblock %}
<p><span style="color:#0033FF;">渡されるのはJavaScriptのオブジェクトです。</span>。</p>
<p>つまり配列も、キー値ペアのオブジェクトも全部渡されます</p>
<br/>
<h4>参考サイト</h4>
<p><a href="http://docs.jquery.com/Events/bind">公式サイトのbindドキュメント</a></p>
<p><a href="http://stacktrace.jp/jquery/api/events/bind.html">StackTraceサイト</a></p>
</div>

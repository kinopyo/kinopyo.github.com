---
layout: post
title: 'クライアント側のActiveXが有効か無効かを検出するJavaScript'
date: 2009-11-17
wordpress_id: 308
permalink: /blog/javascript-to-check-is-activex-enabled-in-client
comments: true
categories: [nil]
---
<div class="section">
<h4>知っておくべきこと</h4>
<ul>
<li>ActiveXはIE専用のものと理解してよい、Firefoxなどでは存在しない</li>
<li>new ActiveXObject("Microsoft.XMLHTTP")でIEのXMLHttpRequestが生成される
<ul>
<li>IE のバージョンによっては、"Microsoft.XMLHTTP"の代わりにこれらも使用できるそうです：</li>
<li>"Msxml2.XMLHTTP.5.0"</li>
<li>"Msxml2.XMLHTTP.4.0"</li>
<li>"Msxml2.XMLHTTP.3.0"</li>
<li>"Msxml2.XMLHTTP"</li>
</ul>
</li>
<li>もし生成できればActiveXコントロールは有効になっている</li>
</ul>
<br/>
<h4>検出ソースコード</h4>
{% codeblock %}

<span class="synComment">// ブラウザがIEの場合</span>
<span class="synStatement">if</span> (<span class="synStatement">window</span>.ActiveXObject) <span class="synIdentifier">{</span>
<span class="synStatement">try</span> <span class="synIdentifier">{</span>
<span class="synComment">//IEのXMLHttpRequestオブジェクトを試しに生成</span>
<span class="synIdentifier">var</span> xhr = <span class="synStatement">new</span> ActiveXObject(<span class="synConstant">&#34;Microsoft.XMLHTTP&#34;</span>);
<span class="synIdentifier">}</span> <span class="synStatement">catch</span> (e) <span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(<span class="synConstant">'ActiveXコントロールは無効になっています'</span>);
<span class="synIdentifier">}</span>
<span class="synIdentifier">}</span>

{% endcodeblock %}
<br/>
<h4>参考サイト</h4>
<p><a href="http://deztec.jp/x/05/faireal/faireal-5-20-index.html#d20503a" target="_blank">動画をHTMLに埋め込むヒント - faireal.net</a></p>
</div>

---
layout: post
title: 'jQuery bind, unbind：多重バインド、リファレンス、名前空間の利用'
date: 2009-11-10
wordpress_id: 298
permalink: /blog/jquery-bind-unbind-multy-bind-reference-and-namespace
comments: true
categories: [nil]
---
<div class="section">
<h4>多重bind</h4>
<ul>
<li>検証：一つのボタンにイベントを多重バインドした時の動き</li>
</ul>
{% codeblock %}

$(input).bind(<span class="synConstant">'click'</span>,<span class="synIdentifier">function</span>()<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(1);
<span class="synIdentifier">}</span>);
$(input).bind(<span class="synConstant">'click'</span>,<span class="synIdentifier">function</span>()<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(2);
<span class="synIdentifier">}</span>);
$(input).bind(<span class="synConstant">'click'</span>,<span class="synIdentifier">function</span>()<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(3);
<span class="synIdentifier">}</span>);
{% endcodeblock %}
<ul>
<li>出力：inputのボタンをクリックするとalertで1,2,3が次々と出る</li>
<li>結論：バインドされた順番どおり実行</li>
</ul>
<h4>一括unbind</h4>
<ul>
<li>検証：上記多数バインドされた要素に対し、一括でunbind</li>
</ul>
<pre class="syntax-highlight">
$(input).unbind(<span class="synConstant">'click'</span>);
{% endcodeblock %}
<ul>
<li>出力：なし</li>
<li>結論：一括でunbindされた</li>
</ul>
<h4>特定のイベントのみunbind</h4>
<ul>
<li>検証：多数bindしたイベントの中で、特定のイベントのみunbind</li>
</ul>
<h5>バインド時のファンクションをそのまま記述(失敗)</h5>
<pre class="syntax-highlight">
$(input).unbind(<span class="synConstant">'click'</span>,<span class="synIdentifier">function</span>()<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(2);
<span class="synIdentifier">}</span>);
{% endcodeblock %}
<ul>
<li>出力：1, 2, 3</li>
<li>結論：失敗</li>
</ul>
<h5>ファンクションのリテラル(リファレンス)を通してunbind</h5>
<pre class="syntax-highlight">
<span class="synIdentifier">function</span> out1()<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(1);
<span class="synIdentifier">}</span>;
<span class="synIdentifier">function</span> out2()<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(2);
<span class="synIdentifier">}</span>;
<span class="synIdentifier">function</span> out3()<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(3);
<span class="synIdentifier">}</span>;
$(input).bind(<span class="synConstant">'click'</span>,out1);
$(input).bind(<span class="synConstant">'click'</span>,out2);
$(input).bind(<span class="synConstant">'click'</span>,out3);
$(input).unbind(<span class="synConstant">'click'</span>,out2)
{% endcodeblock %}
<ul>
<li>出力：1, 3</li>
<li>結論：ファンクションのリテラル(リファレンス変数)を通して指定したイベントのみをunbindできる、しかしこれはあらかじめファンクションを定義しておかないと駄目</li>
</ul>
<h5>名前空間を用いてbind</h5>
<pre class="syntax-highlight">
$(input).bind(<span class="synConstant">'click.1'</span>,<span class="synIdentifier">function</span>()<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(1);
<span class="synIdentifier">}</span>);
$(input).bind(<span class="synConstant">'click.2'</span>,<span class="synIdentifier">function</span>()<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(2);
<span class="synIdentifier">}</span>);
$(input).bind(<span class="synConstant">'click.3'</span>,<span class="synIdentifier">function</span>()<span class="synIdentifier">{</span>
<span class="synStatement">alert</span>(3);
<span class="synIdentifier">}</span>);
$(input).unbind(<span class="synConstant">'click.2'</span>);
{% endcodeblock %}
<ul>
<li>出力：1, 3</li>
<li>結論：bindの第一引数でevent.namespaceと名前空間を使えばうまくunbindできる</li>
</ul>
<h5>同じの名前空間で複数のイベントにbindされた際</h5>
<pre class="syntax-highlight">
$(input).bind(<span class="synConstant">'click.namespace'</span>, <span class="synIdentifier">function</span>()<span class="synIdentifier">{}</span>);
$(input).bind(<span class="synConstant">'blur.namespace'</span>, <span class="synIdentifier">function</span>()<span class="synIdentifier">{}</span>);
$(input).unbind(<span class="synConstant">'.namespace'</span>);
{% endcodeblock %}
<ul>
<li>結論：名前空間指定で一括でunbindできる</li>
</ul>
<h5>一つのイベントに複数の名前空間を登録</h5>
<pre class="syntax-highlight">
$(input).bind(<span class="synConstant">'click.1.2'</span>, <span class="synIdentifier">function</span>()<span class="synIdentifier">{}</span>);
<span class="synComment">// click.1.2の名前空間にたどり着ける</span>
$(input).trigger(<span class="synConstant">'click.1'</span>);
<span class="synComment">// click.1.2名前空間にたどり着ける</span>
$(input).unbind(<span class="synConstant">'click.2'</span>);

{% endcodeblock %}
<ul>
<li>結論：複数の名前空間のうち、任意の一つを使えばそのイベントを選択できる</li>
</ul>
<br/>
<p><span style="float:right">つづく</span></p>
<br/>
<p>公式サイト(英語)：</p>
<p><a href="http://docs.jquery.com/Events/bind#typedatafn">bind Events</a></p>
<p><a href="http://docs.jquery.com/Namespaced_Events">Namespaced_Events</a></p>
</div>

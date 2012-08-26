---
layout: post
title: 'jQuery Validationプラグインの仕組み、概要'
date: 2009-11-4
wordpress_id: 294
permalink: /blog/jquery-structure-of-plugin-validation
comments: true
categories: [nil]
---
<p>マインドマップでまとめました。ごらんください。</p>
<p>基本的な使い方はほかのサイトでもいっぱい書いてるため、</p>
<p>省略します。</p>
<p>大まかな仕組みだけをメモとして書きたいと思います。</p>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091104014304" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091104/20091104014304.jpg" alt="f:id:kinopyo:20091104014304j:image" title="f:id:kinopyo:20091104014304j:image" class="hatena-fotolife"></a></p>
<br/>
<p>最初に理解してほしいのはルールと検証メソッドです。</p>
<p>これはペアとして使います。</p>
<p>まずルールでは検証したい項目のname属性と適用するルール名を書きます。</p>
<br/>
<p>例えばこんな感じです。</p>
{% codeblock %}

rules : <span class="synIdentifier">{</span>
comment: <span class="synIdentifier">{</span>
required: <span class="synConstant">true</span>,
minlength: 5
<span class="synIdentifier">}</span>
<span class="synIdentifier">}</span>
{% endcodeblock %}
<p>これはname属性がcommentの要素に対してrequiredとminlengthのルールを適用する意味です。</p>
<p>ルールの詳細はつまり検証メソッドに実装されています。</p>
<p>required,minlengthなどはプラグインのbuilt-inルールです。</p>
<p>ここでrequired(必須)は実際どう実装されたかをちらっと見てみましょう。</p>
<p>(私も実は初めてです。。。)</p>
<p>以下抜粋したコードです。</p>
<pre class="syntax-highlight">
required: <span class="synIdentifier">function</span>(value, element, param) <span class="synIdentifier">{</span>
<span class="synComment">// check if dependency is met</span>
<span class="synStatement">if</span> ( !<span class="synIdentifier">this</span>.depend(param, element) )
<span class="synStatement">return</span> <span class="synConstant">&#34;dependency-mismatch&#34;</span>;
<span class="synStatement">switch</span>( element.nodeName.toLowerCase() ) <span class="synIdentifier">{</span>
<span class="synStatement">case</span> <span class="synConstant">'select'</span>:
<span class="synIdentifier">var</span> options = $(<span class="synConstant">&#34;option:selected&#34;</span>, element);
<span class="synStatement">return</span> options.length &#62; 0 &#38;&#38; ( element.type == <span class="synConstant">&#34;select-multiple&#34;</span> || ($.browser.msie &#38;&#38; !(options<span class="synIdentifier">[</span>0<span class="synIdentifier">]</span>.attributes<span class="synIdentifier">[</span><span class="synConstant">'value'</span><span class="synIdentifier">]</span>.specified) ? options<span class="synIdentifier">[</span>0<span class="synIdentifier">]</span>.text : options<span class="synIdentifier">[</span>0<span class="synIdentifier">]</span>.value).length &#62; 0);
<span class="synStatement">case</span> <span class="synConstant">'input'</span>:
<span class="synStatement">if</span> ( <span class="synIdentifier">this</span>.checkable(element) )
<span class="synStatement">return</span> <span class="synIdentifier">this</span>.getLength(value, element) &#62; 0;
<span class="synStatement">default</span>:
<span class="synStatement">return</span> $.trim(value).length &#62; 0;
<span class="synIdentifier">}</span>
{% endcodeblock %}
<p>一番デフォルトな行為はこれですね。</p>
<pre class="syntax-highlight">
<span class="synStatement">return</span> $.trim(value).length &#62; 0;

{% endcodeblock %}
<p>単純にその項目のvauleをtrim(スペースを取り除く)して長さを確認してます。</p>
<p>その前に要素がselectの場合や、inputの場合の判断がそれぞれ違います。</p>
<p>最初にdependがあるのですが、これは簡単に言うとこの要素が必須項目となるのはある前提がある意味です。</p>
<br/>
<p>これが一番基本の仕組みとなってます。</p>
<p>これ以外もメッセージの内容や位置、</p>
<p>どのタイミングで検証するか、</p>
<p>エラーがある場合のコールバックなどを各自でカスタマイズできるようになってます。</p>
<br/>
<p>参考となったサイト：</p>
<ul>
<li>公式サイト(英語)：<a href="http://docs.jquery.com/Plugins/Validation" target="_blank">Plugins/Validation - jQuery JavaScript Library</a></li>
<li>簡単な使い方が書いてます(日本語):<a href="http://d.hatena.ne.jp/sugyan/20090312/1236815025" target="_blank">高機能ライブラリ「jQuery」とそのPlugin「Validation」 - すぎゃーんメモ</a></li>
<li>カスタマイズに役に立つ情報があります(日本語):<a href="http://micelle.org/trash/jquery-validation-plugin" target="_blank">jQuery Validation Pluginメモ</a></li>
</ul>

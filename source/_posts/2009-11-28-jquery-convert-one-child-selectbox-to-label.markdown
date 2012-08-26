---
layout: post
title: 'jQueryでoptionが一つのSelectボックスをラベル表示'
date: 2009-11-28
wordpress_id: 325
permalink: /blog/jquery-convert-one-child-selectbox-to-label
comments: true
categories: [nil]
---
<div class="section">
<p>htmlにoptionが一つしかないselectboxがあるとします。</p>
<p>このようなselectを非表示にし、そのテキストラベルで表示させたいのもありですね。</p>
```html

<select>
    <option>1</option>
</select>
{% endcodeblock %}
<br/>
<h4>jQuery文はこれ：</h4>
{% codeblock %}

//:only-childフィルタで子要素が一つしかない要素を選択
var $target = $("select :only-child");

$.each($target, function(index, item) {

	// spanのhtmlを構築
	var span = '<span>' + $(this).text() + '</span>';

	// thisはoptionを指しているため、そのparentのselect要素を非表示
	// 構築したspanを挿入
	$(this).parent().hide().after(span);

});
{% endcodeblock %}
<h4>さらにブランクの要素をフィルタ</h4>
<p>selectボックスの先頭がblankのケースが結構あると思います。</p>
<p>その場合はラベル表示させたくないです。</p>
<p>なのでそれをフィルタするには、以下のようにfilter()を使います。</p>
<pre class="brush:javascript">
var $target = $("select :only-child").filter(function(index) {

	return $.trim($(this).text()).length != 0;

});

{% endcodeblock %}
<br/>
<h4>$.trim()の1000倍速い方法でブランクを検出</h4>
<p>jQueryにはblankを検出するメソッドがないため、上記のソースコードでは</p>
<p>$.trim()を利用して判断しています。</p>
<p>しかしこの$.trim()は遅いとの報告がありました。</p>
<p>そこでblankのテキストを検出するためのメソッドも提供されました。</p>
<p>$.trim()が2000msかかったものがこれだと0.5msになったようです。</p>
<pre class="brush:javascript">
blank: function( text ) {
	return !text || !/\S/.test(text);
}

```
<p>興味のある方はこの記事を参照してください。英語のサイトです。</p>
<p><a href="http://zipalong.com/blog/?p=287" target="_blank">Zipalong Blog  &#187; Blog Archive   &#187; jQuery: x1000 faster test for blank strings (on large strings)</a></p>
</div>

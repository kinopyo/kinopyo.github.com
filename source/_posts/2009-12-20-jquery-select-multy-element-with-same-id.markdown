---
layout: post
title: 'jQuery #idでは一つし要素か選択できない、同じIDを持つ複数要素を選択するには'
date: 2009-12-20
wordpress_id: 634
permalink: /blog/jquery-select-multy-element-with-same-id
comments: true
categories: [nil]
---
そもそもIDというのは一つのページ内でユニークなはずですが、
何らかの理由で同じIDを持つ形になったとしましょう。
その場合普通のjQueryの#idセレクタでは一つの要素(順番的に最初に合致した要素)しか選択できません。
そこで*id=xx*の形で属性フィルタで全ての選択することができます。
以下サンプルコードです。

```javascript

$("#foo").css("background-color","gray");
$("*id=bar*").css("background-color","green");
{% endcodeblock %}

<pre class="brush:html">
<p>use #id selector</p>
<input type="text" id="foo" value="Text1" />
<input type="text" id="foo" value="Text2" />
<p>use attribute selector *id=xx*</p>
<input type="text" id="bar" value="Text3" />
<input type="text" id="bar" value="Text4" />
<input type="text" id="bar" value="Text5" />

```

{% img http://kinopyo.com/wp-content/uploads/2009/12/jQuerySelectorByID.jpg jQuerySelectorByID %}

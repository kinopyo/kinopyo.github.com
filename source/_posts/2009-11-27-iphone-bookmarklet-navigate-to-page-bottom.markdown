---
layout: post
title: 'iPhoneでページ最下部へ移動するブックマークレット'
date: 2009-11-27
wordpress_id: 323
permalink: /blog/iphone-bookmarklet-navigate-to-page-bottom
comments: true
categories: [nil]
---
<div class="section">
<h4>ブックマークレット(Bookmarklet)とは</h4>
<p>簡単に言うとJavaScriptをブックマークしたものです。</p>
<p>普通はURLをブックマークするに対し、JavaScriptをブックマークします。</p>
<p>そしてこのブックマークを選ぶときは保存されたJavaScriptが実行されます。</p>
<p>iPhoneのブラウザ関連のアプリでは結構使われています。</p>
<h4>最下部へ移動するJavaScriptをiPhoneに登録する方法</h4>
{% codeblock %}

javascript:<span class="synStatement">window</span>.scrollTo(0,<span class="synStatement">document</span>.documentElement.scrollHeight);

{% endcodeblock %}
<ul>
<li>まずSafariで任意のサイトをブックマークする</li>
<li>そのブックマークを編集する</li>
<li>一行名に好きな名前(ここではPage Bottom)を記入し、二行目を上記のJavaScriptを貼付けで保存する</li>
</ul>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091128002653" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091128/20091128002653.png" alt="f:id:kinopyo:20091128002653p:image" title="f:id:kinopyo:20091128002653p:image" class="hatena-fotolife"></a></p>
<ul>
<li>ページの最下部へ移動したい時はブックマークからさっき登録したブックマークレットをタップすればOK。</li>
</ul>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091128002655" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091128/20091128002655.png" alt="f:id:kinopyo:20091128002655p:image" title="f:id:kinopyo:20091128002655p:image" class="hatena-fotolife"></a></p>
<br/>
<p>参考サイト：</p>
<p><a href="http://css-eblog.com/javascript/scrolltoend-for-iphone.html" target="_blank">http://css-eblog.com/javascript/scrolltoend-for-iphone.html</a></p>
<p><a href="http://d.hatena.ne.jp/keyword/%A5%D6%A5%C3%A5%AF%A5%DE%A1%BC%A5%AF%A5%EC%A5%C3%A5%C8" target="_blank">ブックマークレットとは - はてなキーワード</a></p>
</div>

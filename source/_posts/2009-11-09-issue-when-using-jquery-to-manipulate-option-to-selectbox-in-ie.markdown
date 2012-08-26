---
layout: post
title: 'IE6でjQueryを使う時のエラー：selectにoption生成の不具合'
date: 2009-11-9
wordpress_id: 297
permalink: /blog/issue-when-using-jquery-to-manipulate-option-to-selectbox-in-ie
comments: true
categories: [nil]
---
<h4>環境<a href="http://f.hatena.ne.jp/kinopyo/20091110011109" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091110/20091110011109.jpg" alt="f:id:kinopyo:20091110011109j:image:right" title="f:id:kinopyo:20091110011109j:image:right" class="hatena-fotolife hatena-image-right"></a></h4>
<ul>
<li>IE6</li>
<li>jQuery1.3.2</li>
</ul>
<h4>現象</h4>
<p>IE7、IE8、Firefox上全部OKのアプリが</p>
<p>なぜかIE6ではエラーが頻発しました。</p>
<p>エラーの詳細もないので、原因がはっきりわかりません。</p>
<br/>
<p>ソースは特に変な作り方をしてないと思うので、</p>
<p>やはりIE6が主な原因と判断しググってみました。</p>
<h4>調査結果</h4>
<blockquote>
<p>IE6でselect boxに<option>を追加した直後、</p>
<p>その追加した値を.valで設定しようとすると上記のエラーが発生します。</p>
<p>（設定する値が追加した値以外の場合、正常に設定できます）</p>
</blockquote>
<p>今回のアプリではselectボックスは静的にHTMLで書いて、</p>
<p>jQueryでoptionをどんどんappendしてました。</p>
<p>やはりこの辺が怪しかったですね。</p>
<br/>
<p>回避策としてあげられるのは<span style="color:#3300FF;">.valを設定する前に.width()を一回実行すること</span>です。</p>
<p>信じられないぐらい、本当になおりました。</p>
<p>setTimeout(function () {}, 0); も回避策の一つとの選択肢もあったのですが、</p>
<p>なぜかこれは効きませんでした。</p>
<h4>以下個人感想</h4>
<p>IE6のばかばかしい動きが元凶なので、詳しく追求する気はないです。</p>
<p>ほかにもjQueryを使うときに注意すべきものがいっぱいあるようです。</p>
<p>まあ、またエラーなんか起きたらそのときまた検索すればって思います。</p>
<br/>
<p>ウェブアプリ開発者はIE6～IE8、Firefoxなどいろいろなブラウザにも注意しながら</p>
<p>開発するしかないことがすごく嫌です。</p>
<p>この前FirefoxがやっとIE6を市場シェアを抜けて一位になった記事がありました。</p>
<p>(Firefox &#62; IE6 &#62; IE7 &#62; IE8の感じかな、トータルではもちろIE全体がまだトップ)</p>
<p>IE6なんかもう早く下がってほしい。</p>
<br/>
<p>なので、ブラウザに気にしないFlex開発に興味を持ち、今勉強中です。</p>
<p>そこら辺の感想はまた別途で記事書きます。</p>
<br/>
<p>ちなみに、Google分析で私のブログを見る平均時間は44秒です。</p>
<p>内容的にこんなに駄目なんですか。。？</p>
<p>44秒、、短すぎ、、</p>
<h4>参考になったサイト</h4>
<p><a href="http://d.hatena.ne.jp/x6x6/20080318/1205817536">jQueryでoption要素を追加した際の諸問題</a></p>
<p><a href="http://tech.kayac.com/archive/jquery-checkpoints.html">jQueryを使うときに気をつけるべき8のポイント</a></p>

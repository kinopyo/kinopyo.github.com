---
layout: post
title: 'IE8でbackground-colorが白とその値がnullとの表示が微妙に違う'
date: 2009-11-24
wordpress_id: 318
permalink: /blog/css-issue-in-ie8-background-color
comments: true
categories: IE
---
## 現象 ##

![](http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091124/20091124235949.jpg)

<p>まず画像を見てみましょう。</p>
<p>最初の二つ白い背景のエリアに注目してください。</p>
<p>一番目は背景色を白い色(#FFFFFF)に設定したもので、</p>
<p>二番目が背景色をnullに設定したものです。</p>
<p>白い色に明確に設定したほうのborderの左と上の表示が少し違ってます。</p>
<br/>
<p>またIE8の開発ツール(F12で呼ばれる、Firebugと似たデバッグツール)で見ても</p>
<p>background-colorが#ffffffになってる以外に、何の余計なスタイルもありませんでした。</p>
<p>なのでやはりbackground-colorが指定してないものと#ffffffに指定したものには差異が存在してます。</p>
<br/>

## サンプルコード ##

```html
<div>
<input id="foo" type="text" />
<input id="bar" type="text" />
</div>
<div>
<input id="hoge" class="gray" type="text" />
<input class="gray" type="text" />
</div>
```

```js
$(document).ready(function(){
  // 元の背景色を保持
  var original = $("#foo").css("background-color");
  alert(original);	// output is "ffffff"
　// 元の背景色を再設定、値は同じはず
  $("#foo").css("background-color",original);
  // 他の背景色はこんな現象がないみたい
  // あるとしても発見しづらい
　var hogeColor = $("#hoge").css("background-color");
  alert(hogeColor);	// output is "gray"
  $("#hoge").css("background-color",hogeColor);
});
```

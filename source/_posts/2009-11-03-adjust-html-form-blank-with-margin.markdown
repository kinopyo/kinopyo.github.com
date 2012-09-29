---
layout: post
title: 'HTML Formの間隔(余白)をmarginで調整'
date: 2009-11-3
wordpress_id: 293
permalink: /blog/adjust-html-form-blank-with-margin
comments: true
categories: HTML
---
## 目的 ##

![](http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091103/20091103224149.gif)

![](http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091103/20091103224150.gif)

![](http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091103/20091103224151.gif)

<p>見たの通りform前後の余白を消しました。</p>
<p>これはフォームがテーブルなどを跨がる場合に</p>
<p>レイアウトを調整するのに非常に役に立ちます。</p>

## 方法 ##

**formのmarginを0px**に設定します。

```html
<form style="margin: 0px;">
```

<p>またmargin-topやmargin-bottomでなどで詳しく指定できます。</p>
<p>マイナス値も入力でき、さらに間隔を縮むめることができます。</p>
<p>参考となったサイト：<a href="http://www.1uphp.com/con1/form/form1style.html" target="_blank">http://www.1uphp.com/con1/form/form1style.html</a></p>

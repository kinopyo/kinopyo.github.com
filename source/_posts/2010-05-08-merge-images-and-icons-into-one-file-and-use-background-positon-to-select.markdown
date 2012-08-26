---
layout: post
title: '各画像を一つにまとめてbackground-positionで指定するのは？'
date: 2010-5-8
wordpress_id: 1116
permalink: /blog/merge-images-and-icons-into-one-file-and-use-background-positon-to-select
comments: true
categories: [nil]
---
まずGoogleが実際使っている画像ファイルを見てみましょう。
<img src="http://www.google.co.jp/images/srpr/nav_logo13.png" alt="Googleの各アイコン" />
いろんな画像、アイコンが混じっていますね。
そして実際使うときはCSSのbackground-positionで表示するモノを指定しているようです。
例えば検索結果の星マークのCSSを見ると

```html
background-position: -117px -117px;

```

<br/>
Webサーバとのコネクションが1回で済むので、
それが狙いですね。

<br/>
background-positionに関しての説明は：
[http://www.htmq.com/style/background-position.shtml](http://www.htmq.com/style/background-position.shtml)

ちなみにこういることをやってくれるライブラリもあるようです。
使ったことはまだないですけど。
[http://csssprites.org/](http://csssprites.org/)

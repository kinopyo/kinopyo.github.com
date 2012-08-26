---
layout: post
title: 'jQuery liveにデータを渡すのは1.3.3で実現'
date: 2009-12-10
wordpress_id: 432
permalink: /blog/jquery-live-pass-data-will-be-implemented-in-1-3-3
comments: true
categories: [nil]
---
今のlive関数は二番目の引数にデータを渡すことができません。
bindとliveのシグネチャーは以下になります。

```javascript

bind(type, *data*, fn)
live(type, fn)

```
<br>
いざ使おうと思って単純にbindをliveに変換したところアプリは動かなくなっちゃいました。
回避方法はいろいろありますが、以下の記事によりますと
jQuery 1.3.3ではliveにもdataを渡すことができるそうです。
作者はjQueryのコアコントリビュートだそうです。
[jQuery Edge: Live Events now with Data](http://brandonaaron.net/blog/2009/05/8/jquery-edge-live-events-now-with-data)

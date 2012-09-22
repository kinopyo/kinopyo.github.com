---
layout: post
title: 'jQuery each()関数内にcontinue/breakを使いたい時は'
date: 2009-12-22
wordpress_id: 645
permalink: /blog/jquery-continue-break-in-each-loop
comments: true
categories: jQuery
---
jQueryのeach()は関数のためcontinueやbreakなどのループ制御文は使えません。
グーグル先生に聞いたら代わりの方法が見つかりました。

+  break : <strong>return false</strong>
+  continue : <strong>return true</strong>

参考サイト：
[jQuery の each() の continue / break は・・・](http://blog.livedoor.jp/jimuguri/archives/51522193.html)

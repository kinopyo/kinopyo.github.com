---
layout: post
title: 'jQuery blockUI Pluginのバグ：unblock時にマウスカーソルが砂時計のまま(IE, Chrome)'
date: 2010-4-26
wordpress_id: 1084
permalink: /blog/jquery-blockui-plugin-bug-hourglass-cursor-stays-in-ie-and-chrome
comments: true
categories: [nil]
---
下記のURLで試してみればすぐ分かりますが、
表題の通りblockUIで制御したところは解除した後にマウスのカーソルがおかしいです。
IE,FirefoxとChromeでテストした結果、Firefoxは無事のようです。

[http://malsup.com/jquery/block/position.html](http://malsup.com/jquery/block/position.html)

## 解決策
jquery.blockUI.jsを開いてreset()のfunctionのところに以下のコードを追加

```javascript
data.el.style.cursor = 'default';

```

第三者のソースに手を加えるのはあまりやりたくないけど。

## 参考サイト
[http://groups.google.com/group/jquery-en/browse_thread/thread/c86671033a86be25/ebd5e710cc78885a?lnk=gst&q=cursor#](http://groups.google.com/group/jquery-en/browse_thread/thread/c86671033a86be25/ebd5e710cc78885a?lnk=gst&q=cursor#)

---
layout: post
title: 'iPhone Safariキーボードの"Return"のkeydownイベントをキャッチ'
date: 2011-10-25
wordpress_id: 2401
permalink: /blog/how-to-catch-return-keydown-event-of-iphone-safari
comments: true
categories: ["iPhone", "JavaScript", "jQuery", "keyboard", "keydown", "safari"]
---
## Situation
iPhone Safariを使うときにあるInput boxで何か入力後"return"キーのkeydownイベントをキャッチして、何かしらのアクションを行いたい、のが目的です。よくあるのがreturnキーでformをsubmitしたり、ボタンクリックのアクションを行ったり、キーボードを隠したりするところですかね。

## Keydown event
{% gist 54b7a48e69b60e33e96b %}

*13</em>という数字がreturnキーのkeydown時のコードです。実はJavascript経験がある方ならすぐ分かると思いますが、<em>13</em>は<em>Enterキー*のコードでもあります。

もう一つのTipはキーボードを隠したいときはjQueryの*blur()*を使えばOKです。

参考：[http://stackoverflow.com/questions/5932317/how-to-capture-the-keyboard-return-event-on-iphone-browser](http://stackoverflow.com/questions/5932317/how-to-capture-the-keyboard-return-event-on-iphone-browser)

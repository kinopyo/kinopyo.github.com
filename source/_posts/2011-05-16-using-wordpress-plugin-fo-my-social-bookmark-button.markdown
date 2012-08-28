---
layout: post
title: 'WP Social Bookmarking Lightでブログのソーシャルブックマークボタン'
date: 2011-5-16
wordpress_id: 1723
permalink: /blog/using-wordpress-plugin-fo-my-social-bookmark-button
comments: true
categories: ["blog", "evernote", "hatena", "twitter", "WordPress"]
---
もともと勉強の目的もあって当サイトのFacebookのLikeボタンやTwitterボタンを全部手書きで用意したのですが、
[http://www.lastday.jp/2011/05/16/increase-number-of-rss](http://www.lastday.jp/2011/05/16/increase-number-of-rss)を読んでmixiやグリーなども一応設置したほうがいいかもと思いまして実践しました。
FacebookとTwitter、はてなはもちろん、グリー、EvernoteやDeliciousなどまで対応してて便利ですよ。

Wordpressプラグイン：WP Social Bookmarking Light
[http://www.ninxit.com/blog/2010/06/13/wp-social-bookmarking-light/](http://www.ninxit.com/blog/2010/06/13/wp-social-bookmarking-light/)

## 設定
設定方法はとても簡単です。WPの設定画面でWP Social Bookmarking Lightを選択肢
下記のように必要なサービスを左にドラッグ＆ドロップすればOKです。
{% img http://www.kinopyo.com/wp-content/uploads/2011/05/Screen-shot-2011-05-16-at-16.42.55.png WP Social Bookmarking Light Settings %}

### General Settingタブ
「Singular」がDisabledにすれば記事の一覧ページにもボタンが反映するようになりますが、そうすると画面の読み込みが結構重くなるようでデフォルトのEnableのままにしています。

### Facebookタブ
LikeボタンのVersionはデフォルトは「XFBML」となっていますが、XFBMLはもう廃止予定なのでiFrameに変更します。
{% img http://www.kinopyo.com/wp-content/uploads/2011/05/WP-Social-Bookmarking-Light-Facebook-Setting.jpg WP Social Bookmarking Light Facebook Setting %}

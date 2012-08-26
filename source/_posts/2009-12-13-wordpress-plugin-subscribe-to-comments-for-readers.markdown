---
layout: post
title: '記事にコメントが追加された際ブログの閲覧者にメールで通知するプラグイン'
date: 2009-12-13
wordpress_id: 578
permalink: /blog/wordpress-plugin-subscribe-to-comments-for-readers
comments: true
categories: [nil]
---
閲覧者がコメントする際にチェックボックスにマークしておくことで、
さらにコメントが追加された場合、メールで知らせてくれるプラグインです。
閲覧者が自分のコメント以降に追加されたコメントを把握できるようになります。

{% img http://kinopyo.com/blog/wp-content/uploads/2009/12/wordpress-plugin-subscribe-to-comments.jpg wordpress-plugin-subscribe-to-comments %}

## ダウンロード
[http://txfx.net/wordpress-plugins/subscribe-to-comments/](http://txfx.net/wordpress-plugins/subscribe-to-comments/)でダウンロードか、
WordPress管理画面から「subscribe-to-comments」を検索してインストールする

## カスタマイズ
初期設定ではメールの本文が英語となっています。
{% img http://kinopyo.com/blog/wp-content/uploads/2009/12/コメント更新通知のメール.jpg  %}

<br/>
それを日本語にカスタマイズしてみました。
管理画面でsubscribe-to-commentsプラグインを編集します。
「There is a new comment on the post」で検索すれば一発で見つかります。
そのあたりの英語を自分が好きな言葉に置換すればOKです。

<br/>
以下自分のサンプルです。

<br/>
:There is a new comment on the post:新規のコメントが投稿されました。
:See all comments on this post here:すべてのコメントを確認するには下記のリンクをクリックしてください
:Author:お名前
:Comment:コメント
:To manage your subscriptions or to block all notifications from this site, click the link below:コメント閲覧を管理、このサイトからの通知をブロックするには下記のリンクをクリックしてください

<br/>
修正後のメール本文はこんな風になりました。
{% img http://kinopyo.com/blog/wp-content/uploads/2009/12/コメント更新通知のメールを日本語化.jpg  %}

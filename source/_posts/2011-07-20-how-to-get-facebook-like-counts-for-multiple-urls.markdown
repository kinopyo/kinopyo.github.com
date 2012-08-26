---
layout: post
title: '複数URLのFacebookいいね(Like)された数を取得する方法'
date: 2011-7-20
wordpress_id: 1996
permalink: /blog/how-to-get-facebook-like-counts-for-multiple-urls
comments: true
categories: ["Facebook", "PHP"]
---
今はほとんどのサイトがLike(いいね！)ボタンを置いてますが、Likeボタンがどれだけクリックされたか、その数は気になりますね。

Facebook独自のFQL（文法はSQLに似ている）を使って複数URLのLikeされた数が取れます。Facebook公式ドキュメントは[こちら](http://developers.facebook.com/docs/reference/fql/link_stat/)にあります。

下記はPHPでのサンプルコードです。
*gist id=1073555 file=get_facebook_like_counts_of_multiple_urls.php*

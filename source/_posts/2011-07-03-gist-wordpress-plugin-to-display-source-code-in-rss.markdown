---
layout: post
title: 'gistのソースコードをRSSにも出力できるWordpress Plugin'
date: 2011-7-3
wordpress_id: 1956
permalink: /blog/gist-wordpress-plugin-to-display-source-code-in-rss
comments: true
categories: ["Github", "WordPress"]
---
gistでソースをjavascriptタグで表示したらRSSには出力できません。また毎回githubから呼びこむのはパフォーマンスも悪いですね。

これらの問題を解消してくれるプラグインが[Embed GitHub Gist](http://wordpress.org/extend/plugins/embed-github-gist/)です。
Embed GitHub Gistはgistから内容を取得して本文に出力するためRSSでも表示できるようになります。
記述ルールはとても簡単で**にgist id=12345のように書けば終わりです。詳細は上記のリンクで確認してください。
デフォルトのキャッシュは一日です。今のバージョン0.8ではまだ他の値に設定できませんが、簡単で十分だと思います。

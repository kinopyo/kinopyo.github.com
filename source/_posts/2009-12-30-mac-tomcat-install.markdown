---
layout: post
title: 'MacでTomcatをインストール'
date: 2009-12-30
wordpress_id: 722
permalink: /blog/mac-tomcat-install
comments: true
categories: [nil]
---
### ダウンロード
{% img http://kinopyo.com/wp-content/uploads/2009/12/tomcat-download.jpg tomcat-download %}
[Tomcat公式サイトダウンロードページ](http://tomcat.apache.org/download-60.cgi)で上記ファイルをダウンロード

### インストール
ただ適当な場所に解凍するだけです。

### 起動/終了
ターミナルを起動しTOMCAT/binに移動する
+  起動  ./startup.shを実行
+  終了  ./shutdown.sh
<strong>"./"は必須です。</strong>
ターミナルで使われるUNIXコマンドはイマイチなので、もっと便利な使い方はあると思います。

### 検証
[http://localhost:8080](http://localhost:8080)

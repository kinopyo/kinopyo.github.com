---
layout: post
title: '10分でWordPressにコメントシステムDisqusを導入'
date: 2011-5-25
wordpress_id: 1757
permalink: /blog/install-disqus-comment-system-to-wordpress-in-10-minitues
comments: true
categories: ["plugin", "WordPress", "tool"]
---
## Disqusの概要
Disqusを導入すると一切のコーディングなしでユーザがFacebook, Twitter, OpenIDでコメントすることができます。このように：
{% img http://www.kinopyo.com/blog/wp-content/uploads/2011/05/Screen-shot-2011-05-20-at-13.18.14.png Disqus Login with Twitter, Facebook, etc. %}

{% img http://www.kinopyo.com/blog/wp-content/uploads/2011/05/Screen-shot-2011-05-20-at-13.23.02.png Disqus Comment system %}

## 導入手順
実際の導入フローはとても簡単なので、流れだけ書きます。
{% img http://www.kinopyo.com/blog/wp-content/uploads/2011/05/Screen-shot-2011-05-20-at-11.57.25.png Disqus comment system site %}

+[http://disqus.com/](http://disqus.com/)でアカウント登録
+ブログサイトの情報、メインライター、導入ブログタイプ（ここはWordpress）などの設定
+自分のWordpressブログの管理画面でプラグインをインストール：Disqus Comment System
+Disqusプラグインの設定画面でさっき[http://disqus.com/](http://disqus.com/)で登録したアカウントでログイン
+必要でなれば今までのコメントをエクスポートすることもできる

<br/>

## 既存コメントのエクスポート
既存コメントのエクスポートは時間がかかりそうで、すぐには反映しないようです。
Disqusの管理画面で確認したらステータスが"Queued for import"になってます。
{% img http://www.kinopyo.com/blog/wp-content/uploads/2011/05/Import-Tools-for-kinopyoblog-DISQUS.jpg DISQUS Admin page - tools - Import/export %}

すると翌日にインポートできましたよというメールがきました。管理画面でチェック：
{% img http://www.kinopyo.com/blog/wp-content/uploads/2011/05/Screen-shot-2011-05-25-at-19.09.04.png Disqus-comment-import-complete %}

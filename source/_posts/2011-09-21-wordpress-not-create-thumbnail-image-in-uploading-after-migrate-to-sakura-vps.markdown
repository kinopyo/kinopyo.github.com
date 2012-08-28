---
layout: post
title: 'さくらVPSに移行後wordpressで画像アップロードした時にサムネイルが生成されない件'
date: 2011-9-21
wordpress_id: 2245
permalink: /blog/wordpress-not-create-thumbnail-image-in-uploading-after-migrate-to-sakura-vps
comments: true
categories: ["centos", "Linux", "PHP", "vps", "Windows", "WordPress"]
---
Wordpressで画像アップロード時にいつも3サイズのサムネイルが生成されたのですが、さくらVPSに移行後それができなくなったのです。

<img src="http://hsuzuki.ddo.jp/wewp-content/uploads/2008/12/radio_f.bmp" />

調べてみたらPHPの画像処理のライブラリであるgdがインストールしてないことがわかりました。
CentOSなのでyumを使ってインストールすれば解決です。
{% codeblock %}
sudo yum install php-gd
sudo service httpd restart
{% endcodeblock %}

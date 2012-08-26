---
layout: post
title: 'さくらVPSのパフォーマンスチューニング'
date: 2011-11-11
wordpress_id: 2488
permalink: /blog/sakura-vps-centos-performance-tunning-wordpress
comments: true
categories: ["Apache", "centos", "Performance", "PHP", "WordPress"]
---
さくらVPSでWordpressブログをやってます。そんなにアクセスがないはずなのに、さくらVPSに移行した当時は結構サーバが落ちました。topコマンドで見るとスワップが結構70%まで上がったりして、手動でapache再起動とかもやりました。。ネットでいろいろググッてそれなりにパフォーマンスチューニングした結果やっと安定して、同じサーバに2つのWordpressブログと一つのRailsアプリケーションを実行しています。

参考までにさくらVPSは一番安いの512MB、月1000円のプランで、平日だとこのブログの一日PVは大体500〜600です。

チューニングしてから結構時間が経ったのでだいぶ忘れました。Evernoteでのメモを貼ります。

効果が高い順で。

## Wordpress
* W3 Total Cache *プラグインが一押しです。インストールも設定も簡単ですし、一番効果があります。
ページのキャッシュ、cssやjavascriptのマージと圧縮など、結構やってくれます。実際これだけ入れても感じるほど早くなるはずです。

## Apache
[httpd.conf](httpd.conf)を編集します。いろいろ修正してみましたが、結果下記の設定にしました。この辺はググったら結構出ますが、それぞれの環境に合わせて試行錯誤したほうがオススメです。

{% codeblock %}

<IfModule prefork.c>
StartServers       5
MinSpareServers    5
MaxSpareServers   10
ServerLimit      64
MaxClients       64
MaxRequestsPerChild  50
MaxMemFree 2000
</IfModule>

{% endcodeblock %}

## PHP
*/etc/php.ini  *
zlib.output_compression = On
*APC*
pecl install APC

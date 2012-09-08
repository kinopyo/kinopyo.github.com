---
layout: post
title: 'サーバの時刻確認と設定（NTPで時刻補正）'
date: 2011-8-19
wordpress_id: 2153
permalink: /blog/how-to-set-server-date-with-ntp
comments: true
categories: ["date", "Linux", "server"]
---
{% gist 1073555 set_server_time_with_ntpd.sh %}

## NPTについて ##

{% blockquote %}

ここでは、ネットワーク上のサーバー及びクライアントマシンの時刻同期をとるためのプロトコルであるNTP（Network Time Protocol ）について解説していきます。PCの時刻はマザーボード上のリアルタイムクロック（RTC)によって時間が表示されていますが、この時間はあまり正確ではなく、毎日少しづつ時間が狂っていきます（電池の消耗度にもよりますが、年間約10分程度）。NTPサーバーは、タイムサーバーに接続されたラジオ・クロックや原子時計から時刻を取得し、UTC (協定世界時)に同期させることができます。PCの時刻が狂っていると、メールの送受信時刻が狂ったり、こまめにとっているログの取得時間なども狂ってくることになります。Linuxでは標準でNTPサーバーが付属しているので是非、活用して時刻同期を行いましょう。
{% endblockquote %}
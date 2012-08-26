---
layout: post
title: 'Chrome（Chromium）でマルチプロファイルを使う'
date: 2011-10-25
wordpress_id: 2397
permalink: /blog/how-to-enable-multiple-profiles-in-chome-chromium
comments: true
categories: ["bookmark", "Chrome", "chromium", "extension", "profiles"]
---
## メリット
マルチプロファイルを有効することでそれぞれブックマーク、エクステンション、Themeとアプリを設定できるようになります。

実際はChromeではなく、Chromeが恩恵を受けているオープンソースプロジェクトのChromiumを使います。Chromeでもできるっちゃできるんですが、手順が面倒くさいし使い勝手が悪いです。

[http://blog.av-jyo.com/2011-09/usefully-chromium-setting-for-web-development.html](http://blog.av-jyo.com/2011-09/usefully-chromium-setting-for-web-development.html)を参考にしました。

## 手順
+  [http://mrgeckosmedia.com/applications/info/Chromatic](http://mrgeckosmedia.com/applications/info/Chromatic)でStableなChromiumをインストール
+  *about:flags</em>で<em>Multiple Profiles*をEnable
+  再起動して右上に人の画像をクリックしてプロファイルを管理
+  メインプロファイルに切り替え、ブックマーク、エクステンションなどの同期を行う

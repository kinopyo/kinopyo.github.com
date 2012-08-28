---
layout: post
title: 'EclipseにTomcatプラグインをインストール'
date: 2009-12-30
wordpress_id: 732
permalink: /blog/eclipse-install-tomcat-plugin
comments: true
categories: [nil]
---
+  [Eclipse Tomcat Pluginダウンロードページ](http://www.eclipsetotale.com/tomcatPlugin.html#A4)でzipファイルをダウンロード
現時点の最新版はtomcatPluginV321.zipです。

+  your_Eclipse_Home/pluginsに解凍
+  Eclipseを起動するとTomcatの三つのアイコンがツールバーに表示されるはず
{% img http://kinopyo.com/wp-content/uploads/2009/12/tomcat-toolbar-icon.jpg tomcat-toolbar-icon %}
+  下記のようにTomcatバージョンとTomcatホームを設定
{% img http://kinopyo.com/wp-content/uploads/2009/12/tomcat-settings-home-path.jpg tomcat-settings-home-path %}
+  下記のようにTomcat用のJVM SettingでJREバージョンを選択
{% img http://kinopyo.com/wp-content/uploads/2009/12/tomcat-settings-jre-version.jpg tomcat-settings-jre-version %}
私の場合デフォルトがJRE1.4になっていたため、これを1.5の変えました。

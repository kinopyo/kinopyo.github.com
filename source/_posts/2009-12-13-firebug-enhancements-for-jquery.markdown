---
layout: post
title: 'FirefoxでjQueryを開発するならFireQueryを使ってみよう'
date: 2009-12-13
wordpress_id: 498
permalink: /blog/firebug-enhancements-for-jquery
comments: true
categories: [nil]
---
FireQueryはFirebugを拡張したアドオンで、jQueryをよりよくサポートできるんです。
jQueryのオブジェクトをコンソールで確認したり、マウスオーバーで画面上のレーヤーで表示されたりして
大変便利になります。
これ以外でもjQuerifyというやつがあって、
jQueryが適用されてないhtmlにもfirebugのコンソールで直接jQueryのコードを書いてそのまま動作確認ができます。

## 主な機能
+  jQuery expressions are intelligently presented in Firebug Console and DOM inspector
+  attached jQuery data are first class citizens
+  elements in jQuery collections are highlighted on hover
+  jQuerify: enables you to inject jQuery into any page

{% img http://kinopyo.com/wp-content/uploads/2009/12/FireQuery.png FireQuery %}
{% img http://kinopyo.com/wp-content/uploads/2009/12/FireQuery2.png FireQuery2 %}

## jQuerifyを使おう！

+  まずfirebugのconsoleのjQuerifyをクリックします。するとjqueryが適用されたと表示されます。
{% img http://kinopyo.com/wp-content/uploads/2009/12/jquerify.jpg jquerify %}

+  次は「>>>」のところでjquery文を書けばOKです。
{% img http://kinopyo.com/wp-content/uploads/2009/12/Picture-61.jpg fireQuery %}

+  複数行のjqueryコードが書きたい場合は、右下にある「↑」ボタンをクリックし、コンソールの右フレームで書けます。
{% img http://kinopyo.com/wp-content/uploads/2009/12/jquery-runed.jpg jquery-runed %}

## ダウンロード
[FireQuery Download](https://addons.mozilla.org/ja/firefox/addon/12632)




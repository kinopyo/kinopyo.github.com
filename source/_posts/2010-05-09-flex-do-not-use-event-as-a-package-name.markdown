---
layout: post
title: 'Flex：カスタムイベントクラスのパッケージ名をeventにするのは避けましょう'
date: 2010-5-9
wordpress_id: 1124
permalink: /blog/flex-do-not-use-event-as-a-package-name
comments: true
categories: Flex
---
カスタムイベントのパッケージ名を"event"にしました。

{% img http://www.kinopyo.com/wp-content/uploads/2010/05/flex_package_event.jpg flex_package_event %}

結果、CTRL+SPACEでの自動補完機能がうまく行かないです。
例えば自動でイベントハンドラを生成してくれる場合のパラメータはeventになりますが、
この"event"続いてドット(.)を叩いて出たのは各eventパッケージしたのクラスになります。

{% img http://www.kinopyo.com/wp-content/uploads/2010/05/flex_autocomplete_confused.jpg flex_autocomplete_confused %}

イベントハンドラの変数を"event"以外にすれば回避できますが、
ハンドラの自動生成は結構便利なものなので
やはりパッケージ名を"events"などに変えたほうがいいと思います。

これで自動補完はちゃんと出ます。

{% img http://www.kinopyo.com/wp-content/uploads/2010/05/flex_autocomplete_correct.jpg flex_autocomplete_correct %}

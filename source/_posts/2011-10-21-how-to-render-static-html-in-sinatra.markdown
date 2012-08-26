---
layout: post
title: 'SinatraでStaticなHTMLファイルをrenderするには'
date: 2011-10-21
wordpress_id: 2391
permalink: /blog/how-to-render-static-html-in-sinatra
comments: true
categories: ["Ruby", "sinatra"]
---
## 目的
Sinatraで静的なhtmlファイルをrenderする方法です。

## 現状
Sinatraでは色々なビューテンプレートをレンダリングできます。Haml、Erb、Sass、Markdown、CoffeeScript…が対応されていますが、HTMLは対応してないようです。*html :index*で書いてもダメですね。

[Sinatraのビューテンプレート](http://www.sinatrarb.com/intro-jp.html#%E3%83%93%E3%83%A5%E3%83%BC%20/%20%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88)

## 解決方法
{% gist 1303281  sinatra_render_html.rb %}
*File.read</em>でファイルとして読み込むことですね。Sinatraはデフォルトの設定だと<em>public*フォルダ内のものをassetsとするそうです。

でちょっとリファクタリングして*html :index*のシンタックスでいけるようにしました。
{% gist 1303281 sinatra_render_html_refactor.rb %}

## 参考
[http://stackoverflow.com/questions/2437390/serving-static-files-with-sinatra](http://stackoverflow.com/questions/2437390/serving-static-files-with-sinatra)

---
layout: post
title: 'WPテーマGlowing Amberに二番目のサイドバーを追加'
date: 2010-1-17
wordpress_id: 804
permalink: /blog/add-left-sidebar-to-wptheme-glowing-amber
comments: true
categories: [nil]
---
本文はWPテーマGlowing Amberに二番目のサイドバーを追加する方法を紹介します。

Glowing Amberは今現在このブログで使われているテーマです。
見た目がいいデザインがいいのですぐインストールしましたが、
簡単にカスタマイズするメニューがなくて少し不便を感じました。
マニュアルもなく、作者が提示したURLにも無効となっています。。。

## 二番目のサイドバーを追加する方法

+  Main Index Templateのindex.phpかSingle Postのsingle.phpを編集します。
それぞれブログのトップページ、個々の記事ページのファイルです。

+  サイドバーを追加したい場所で下記コードを挿入します。

```html
&lt;div id="left"&gt;
&lt;?php if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('Sidebar Left')) : ?&gt;&lt;?php endif; ?&gt;
&lt;/div&gt;

```
例えば左に追加したい場合は
&lt;div id="mainbody-l"&gt;の前に上記コードを挿入します。

+  &lt;div id="mainbody-l"&gt;を&lt;div id="mainbody-lr"&gt;に変更
これはid=mainbody-lrにwidthが適切に設定されているからです。

+  Stylesheet (style.css)で幅を編集
104行目近くにある#mainbody-lr と#left, #rightのwidth値を編集すればOKです。

これでWidgetsメニューでSidebar Leftが使えるようになります。

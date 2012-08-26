---
layout: post
title: 'jQueryでselectorと一致する最初のものを取る'
date: 2011-7-2
wordpress_id: 1967
permalink: /blog/jquery-selector-get-the-first-matched-element
comments: true
categories: ["jQuery"]
---
一年くらい使ってなかったので、ほぼ忘れてしまいました。そのためのメモという感じです。

```javascript
// idがwrapperの中の最初のdivを取る
$("#wrapper").find("div:first")

```

この:xxxがBasic Filter(基本フィルタ)と読んで、他にもいろいろあります。
{% blockquote  %}
:first 先頭の要素を選択する。
:last 末尾の要素を選択する。
:not(selector) 指定したセレクターを除外した要素を選択する。
:even 偶数番の要素を選択する。
:odd 奇数番の要素を選択する。
:eq(index) インデックス指定した要素を選択する。
:gt(index) 指定したインデックスより後の要素を選択する。
:lt(index) 指定したインデックスより前の要素を選択する。
:header h1,h2などのヘッダ要素を選択する。
:animated アニメーション中の要素を選択する。
{% endblockquote %}
[英語API](http://api.jquery.com/category/selectors/basic-filter-selectors/)
[日本語API](http://semooh.jp/jquery/api/selectors/)


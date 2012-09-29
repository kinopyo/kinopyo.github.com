---
layout: post
title: 'jQueryの$(expr, context)、今まで気づいてなかったcontextパラメータ'
date: 2009-12-10
wordpress_id: 445
permalink: /blog/jquery-expr-context-parameter
comments: true
categories: jQuery
---
今まで平気に$(expression)を使ってきましたが、
この二番目のcontextパラメータでセレクタの範囲を決まることができます。
この関数はjQueryのコア関数で幅広く使われ、
もっとも一般的な使い方はcontextを省略したものでしょう。

```javascript
$("div")
```

## contextパラメータ
{% blockquote %}

contextが何も指定されなければ、$()関数は現在のHTMLのDOMエレメントを検索する。
逆にDOMエレメントやjQueryオブジェクトなどのcontextが指定されれば、expressionはそのcontextに対して合致するものを捜します。

{% endblockquote %}
簡単にいうとfind()関数と似ています。
実践でいうと以下の二つは同じ機能をしています。
```javascript
$("body").find("div");
$("div,body");
```

## 参考サイト
[jQuery(expression, context) - jQuery 1.3.2 日本語リファレンス](http://semooh.jp/jquery/api/core/jQuery/expression,+context/)

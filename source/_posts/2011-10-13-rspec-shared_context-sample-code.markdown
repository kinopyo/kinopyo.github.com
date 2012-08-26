---
layout: post
title: 'rspec shared context sample code'
date: 2011-10-13
wordpress_id: 2348
permalink: /blog/rspec-shared_context-sample-code
comments: true
categories: ["best_practice", "rspec", "Ruby", "shared_context"]
---
{% gist 1283896 %}

# 日本語

shared_context はその名前の通りコンテキスト (テストを行なうときの状況) を共有するための機能です。
shared_context を使うことで複数箇所にちらばる同一処理をまとめることができます。shared_context は shared_context が書かれたファイルを require することでも使えるようになるので別のスペックファイルでも使うことができます。

{% gist 1283896 %}

---
layout: post
title: 'Railsテスト時のrack警告"warning: regexp match /.../n against to UTF-8 string"を消す方法'
date: 2012-3-23
wordpress_id: 2676
permalink: /blog/rails-test-quietrack-warning
comments: true
categories: ["rack", "rails", "Ruby", "troubleshooting"]
---
Rails 3.1以前のバージョンなら多分テスト実行時にこういう警告が出ることがあるかもしれません。
{% codeblock %}
gems/rack-1.2.5/lib/rack/utils.rb:16: warning: regexp match /.../n against to UTF-8 string
{% endcodeblock %}
このうるさい警告を消す方法を紹介します。

## 解決方法
rspecを使う場合はspec/spec_helper.rbに下記コードを最後に追記してください。
{% gist 2168152 %}

## 原因
Rack1.3からは解決できたらしいですが、Rails 3.1以前を使うならとりあえずこの方法で回避してもいいかと。
詳しくは：[https://github.com/rack/rack/issues/41](https://github.com/rack/rack/issues/41)

---
layout: post
title: 'Rails オプション(省略可)local variablesをpartial viewに渡す方法'
date: 2011-11-7
wordpress_id: 2465
permalink: /blog/rails-passing-optional-local-variables-to-partial-view
comments: true
categories: ["ActionView", "partial", "rails", "Ruby"]
---
例えば省略可能なフラグみたいなローカル変数をpartial viewに渡した時、そのデフォルト動作をpartial viewでハンドリングしたいですね。
{% gist 1344066 use_case_sample.erb %}

調べてみたら*defined?*と*local_assigns.has_key?*が見つかりましたが、前者のほうはオススメできなさそうです。
{% blockquote ActionView::Base http://api.rubyonrails.org/classes/ActionView/Base.html %}
Testing using defined? headline will not work. This is an implementation restriction.
{% endblockquote %}

{% gist 1344066 solution.erb %}
実際やってみて、defined?でも動けるパターンはありますが、if/unless文で一行にしたらバグりました。なのでやはり* local_assigns.has_key?*を使いましょう。

{% gist 1344066 compared_to_defined_method_with_oneline_condition.erb %}

## Resources
[http://stackoverflow.com/questions/238615/defined-method-in-ruby-and-rails](http://stackoverflow.com/questions/238615/defined-method-in-ruby-and-rails)
[http://api.rubyonrails.org/classes/ActionView/Base.html](http://api.rubyonrails.org/classes/ActionView/Base.html)

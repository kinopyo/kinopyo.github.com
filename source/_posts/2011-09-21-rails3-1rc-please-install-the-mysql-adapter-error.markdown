---
layout: post
title: 'Rails3.1rc(?)でPlease install the mysql adapterというエラー'
date: 2011-9-21
wordpress_id: 2260
permalink: /blog/rails3-1rc-please-install-the-mysql-adapter-error
comments: true
categories: ["rails3.1", "Ruby", "troubleshooting"]
---
確定ではないですが、Rails3.1rcにアップしたらこんなエラーが出ました。
{% codeblock %}
Please install the mysql adapter: `gem install activerecord-mysql-adapter` (mysql is not part of the bundle. Add it to Gemfile.)
{% endcodeblock %}

## 解決策
+  database.ymlでmysqlのadapterをmysqlより<strong>mysql2</strong>に変更
+  Gemfileにmysql2を追加しbundle installを実行

## 参考
[http://stackoverflow.com/questions/6141276/rails-3-1-0-rc1-mysql-adapter-error](http://stackoverflow.com/questions/6141276/rails-3-1-0-rc1-mysql-adapter-error)
[http://stackoverflow.com/questions/3467054/problem-with-mysql2-and-rails3-bundler](http://stackoverflow.com/questions/3467054/problem-with-mysql2-and-rails3-bundler)

# 中文
確定ではないですが、Rails3.1rcにアップしたらこんなエラーが出ました。
{% codeblock %}
Please install the mysql adapter: `gem install activerecord-mysql-adapter` (mysql is not part of the bundle. Add it to Gemfile.)
{% endcodeblock %}

## 解決策
+  database.ymlでmysqlのadapterをmysqlより<strong>mysql2</strong>に変更
+  Gemfileにmysql2を追加しbundle installを実行

## 参考



# English

確定ではないですが、Rails3.1rcにアップしたらこんなエラーが出ました。
{% codeblock %}
Please install the mysql adapter: `gem install activerecord-mysql-adapter` (mysql is not part of the bundle. Add it to Gemfile.)
{% endcodeblock %}

## 解決策
+  database.ymlでmysqlのadapterをmysqlより<strong>mysql2</strong>に変更
+  Gemfileにmysql2を追加しbundle installを実行

## 参考


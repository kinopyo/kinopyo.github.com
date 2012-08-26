---
layout: post
title: 'Rails RSpec: Postgresqlでrake specするとNOTICEの警告がいっぱい出た'
date: 2012-3-29
wordpress_id: 2681
permalink: /blog/rails-rspec-postgresql-turn-offrake-spec-warnings-notice
comments: true
categories: ["postgresql", "rails", "rspec", "Ruby"]
---
[PostgresSQLでrake specするとNOTICEがいっぱいでる](http://d.hatena.ne.jp/arcright/20110623/1308796154)が大変参考になった。

{% blockquote  %}
NOTICE:  CREATE TABLE will create implicit sequence "peroperos_id_seq" for serial column "peroperos.id"
NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "peroperos_pkey" for table "peroperos"
～略～
{% endblockquote %}
の警告をシャットダウンする方法です。

{% gist 2232851 %}

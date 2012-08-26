---
layout: post
title: 'MySQL, OracleのGroup by date, 日付別で集計'
date: 2011-8-17
wordpress_id: 2080
permalink: /blog/mysql-oracle-group-by-date
comments: true
categories: ["MySQL", "oracle", "sql"]
---
これが既存データで、同じ日に複数のデータがある。
{% img http://www.kinopyo.com/blog/wp-content/uploads/2011/08/table_data.png table_data %}

期望結果はこれ、つまり日付別で集計したい場合
{% img http://www.kinopyo.com/blog/wp-content/uploads/2011/08/expected-result.png expected-result %}

## MySQLではDATE関数を使う
{% codeblock %}
mysql> SELECT DATE(create_datetime), COUNT(# ) FROM user_m GROUP BY DATE(create_datetime);
{% endcodeblock %}

## Oracleではto_char関数を使う
{% codeblock %}
SELECT to_char(create_datetime, 'YYYY-MM-DD'), COUNT(# ) FROM user_m GROUP BY to_char(create_datetime, 'YYYY-MM-DD');
{% endcodeblock %}

## 参考
[http://blog.asial.co.jp/209](http://blog.asial.co.jp/209)
http://d.hatena.ne.jp/bingo_nakanishi_perl/20090530/1243649406

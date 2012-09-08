---
layout: post
title: 'PHP: mysqlnd cannot connect to MySQL 4.1+ using old authentication'
date: 2011-3-17
wordpress_id: 1655
permalink: /blog/php-mysqlnd-cannot-connect-to-mysql-4-1-using-old-authentication
comments: true
categories: ["Mac", "macport", "MySQL", "PHP", "php", "環境構築"]
---
## 問題
{% blockquote %}
新しい mysqlnd ライブラリは、MySQL 4.1 用の41バイトの新しいパスワードフォーマットを使用します。 古い16バイトのパスワードを使うと、mysql_connect() 系の関数は次のようなエラーメッセージを生成します。”mysqlnd cannot connect to MySQL 4.1+ using old authentication”
{% endblockquote %}

{% blockquote %}
MacPortでインストールしたPHP5.3では、

mysqlnd(php5.3のmysql native client)が適用される。
しかし、CentOSなどのyumでインストールできるMySQLサーバーとの相性がよろしくない。
PHP Warning:  mysql_connect(): mysqlnd cannot connect to MySQL 4.1+ using old authentication
というエラーが現れ、接続することができません。
mysqlndを利用しないよう再コンパイルが必要となる。
{% endblockquote %}

## 解決方法
portでインストールしたモジュールを確認、mysqlndがactiveなってるはず。

```
sudo port installed

php5-mysql @5.3.5_0+mysqlnd (active)

```

そしてmysql5のvariantsを指定で再インストール。

```
% sudo port install php5-mysql +mysql5

--->  Computing dependencies for php5-mysql
--->  Fetching php5-mysql
--->  Verifying checksum(s) for php5-mysql
--->  Extracting php5-mysql
--->  Configuring php5-mysql
--->  Building php5-mysql
--->  Staging php5-mysql into destroot
--->  Installing php5-mysql @5.3.5_0+mysql5
--->  Deactivating php5-mysql @5.3.5_0+mysqlnd
--->  Cleaning php5-mysql
--->  Activating php5-mysql @5.3.5_0+mysql5
--->  Cleaning php5-mysql

```

再度port installedで確認すればmysql5がactiveになるはず。これで解決。

```
php5-mysql @5.3.5_0+mysqlnd
php5-mysql @5.3.5_0+mysql5 (active)

```


## 参考
【php】mysqlndを使うとMySQLに接続できない
[http://www.softel.co.jp/blogs/tech/archives/2225](http://www.softel.co.jp/blogs/tech/archives/2225)

SnowLeopard + PHP5.3でのMySQLリモート接続
[http://taikimen.blogspot.com/2010/10/snowleopard-php53mysql.html](http://taikimen.blogspot.com/2010/10/snowleopard-php53mysql.html)

PHP: mysqlnd cannot connect to MySQL 4.1+ using old authentication
[http://www.bitshop.com/Blogs/tabid/95/EntryId/67/PHP-mysqlnd-cannot-connect-to-MySQL-4-1-using-old-authentication.aspx](http://www.bitshop.com/Blogs/tabid/95/EntryId/67/PHP-mysqlnd-cannot-connect-to-MySQL-4-1-using-old-authentication.aspx)

## おまけ
mysqlが古い16バイトのパスワードを使ってるかを確認する方法です。
mysqlにログインして下記コマンドを実行：

```
mysql> select password('aa');

+------------------+
| password('aa')         |
+------------------+
| 0123456789abcdef |
+------------------+

```
16位だっだら古いです。40位なら新しいってことです。

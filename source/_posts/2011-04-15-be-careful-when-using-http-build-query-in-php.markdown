---
layout: post
title: 'http_build_queryを使うときの注意点：URLパラメータ区切りがエスケープされる(XAMPP要注意)'
date: 2011-4-15
wordpress_id: 1670
permalink: /blog/be-careful-when-using-http-build-query-in-php
comments: true
categories: ["PHP", "php", "troubleshooting"]
---
## 障害
http_build_queryを使ってurlのパラメータを作るときにパラメータがこうなりました。

```
foo=bar&amp;amp;baz=boo&amp;amp;hoge=hoge

```
上記のように複数のパラメータがある時に<strong>;</strong>であるべきのところが<strong>&</strong>となってしまいました。

これはPHPの設定ファイル、php.iniのarg_separator.outputで制御されてて、XAMPPの場合インストールされたデフォルトでは、「&」となるそうです。

## 解決方法
なので、php.iniの「arg_separator.output」の値を「&」から「&」に変更する

## 参考
http_build_queryを使うときの注意点(PHP)
[http://www.multiburst.net/sometime-php/2008/12/http_build_query/](http://www.multiburst.net/sometime-php/2008/12/http_build_query/)

---
layout: post
title: 'CakePHP, and Strict Standards'
date: 2011-3-17
wordpress_id: 1651
permalink: /blog/cakephp-and-strict-standards
comments: true
categories: ["cakephp", "macport", "PHP", "php", "環境構築"]
---
MacportでPHPをインストールし、CakePHPを動かしたら「Strict Standards」エラーが出ました。
当時のエラー本文は残ってませんので、Googleで検索したエラー本文を貼り付けます。パス以外は同じのはずです。

```
Strict Standards: Assigning the return value of new by reference is deprecated in /Applications/MAMP/htdocs/xxxx/cake/basics.php on line 279
Strict Standards: Redefining already defined constructor for class Object in /Applications/MAMP/htdocs/xxxx/cake/libs/object.php on line 65
Strict Standards: Assigning the return value of new by reference is deprecated in /Applications/MAMP/htdocs/xxxx/cake/libs/object.php on line 92
Strict Standards: Assigning the return value of new by reference is deprecated in /Applications/MAMP/htdocs/xxxx/cake/libs/inflector.php on line 65
Strict Standards: Assigning the return value of new by reference is deprecated in /Applications/MAMP/htdocs/xxxx/cake/libs/configure.php on line 96
Strict Standards: Assigning the return value of new by reference is deprecated in /Applications/MAMP/htdocs/xxxx/cake/libs/configure.php on line 154
Strict Standards: Assigning the return value of new by reference is deprecated in /Applications/MAMP/htdocs/xxxx/cake/libs/cache.php on line 71
Strict Standards: Assigning the return value of new by reference is deprecated in /Applications/MAMP/htdocs/xxxx/cake/libs/cache.php on line 157
Strict Standards: Non-static method Configure::getInstance() should not be called statically in /Applications/MAMP/htdocs/xxxx/cake/bootstrap.php on li

```

## 解決方法
これはCakePHPの問題ではなく、PHPのerror_reportingの設定問題だそうです。
php.iniを開いて<strong>error_reporting</strong>で検索します。
値を<strong>E_ALL</strong>に変更すれば解決です。

ちなみにMacportでPHPをインストールしたときのphp.iniパスは<strong>/opt/local/etc/php5/php.ini</strong>になります。

## 参考リンク
[http://oldblog.awpny.com/2007/12/mamp-php5-cakephp-and-strict-standards/](http://oldblog.awpny.com/2007/12/mamp-php5-cakephp-and-strict-standards/)

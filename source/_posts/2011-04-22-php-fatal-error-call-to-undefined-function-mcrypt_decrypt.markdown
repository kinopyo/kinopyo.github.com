---
layout: post
title: 'PHP Fatal error:  Call to undefined function mcrypt_decrypt()'
date: 2011-4-22
wordpress_id: 1698
permalink: /blog/php-fatal-error-call-to-undefined-function-mcrypt_decrypt
comments: true
categories: ["PHP", "php"]
---
こちらを参照してください。
+  [Mcrypt Requirements](http://de.php.net/manual/en/mcrypt.requirements.php)
+  [Mcrypt Installation](http://de.php.net/manual/en/mcrypt.installation.php)
PHPを--with-mcrypt*=DIR*再コンパイルする必要があるそうです。またlibmcryptも2.5.6以上のバージョンを求められます。

一般的にもしfunction is undefinedになったら、何かライブラリをコンパイルする必要があるということになります。

```
sudo apt-get install php5-mcrypt

```
works on ubuntu.

```
sudo port install php5-mcrypt

```
works on mac.

# 中文
请参照：
+  [Mcrypt Requirements](http://de.php.net/manual/en/mcrypt.requirements.php)
+  [Mcrypt Installation](http://de.php.net/manual/en/mcrypt.installation.php)
也就是说需要重新编译--with-mcrypt*=DIR*，而且libmcrypt也需要2.5.6以上的版本。

一般来说如果提示你function is undefined的话，说明也许你少compile了某些library。

```
sudo apt-get install php5-mcrypt

```
works on ubuntu.

```
sudo port install php5-mcrypt

```
works on mac.

# English

Please see:

+  [Mcrypt Requirements](http://de.php.net/manual/en/mcrypt.requirements.php)
+  [Mcrypt Installation](http://de.php.net/manual/en/mcrypt.installation.php)

You need to compile your PHP with --with-mcrypt*=DIR* and have libmcrypt Version 2.5.6 or greater on your machine.
Generally if PHP says a function is undefined, it means you need to compile in some library.

```
sudo apt-get install php5-mcrypt

```
works on ubuntu.

```
sudo port install php5-mcrypt

```
works on mac.

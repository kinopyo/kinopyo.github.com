---
layout: post
title: 'Mac XAMPP環境でmemcacheとPHP extensionのインストール'
date: 2010-9-24
wordpress_id: 1428
permalink: /blog/install-memcache-and-php-extension-in-mac-xampp
comments: true
categories: ["Mac", "memcache", "PHP", "php", "環境構築"]
---
## 環境情報
+  Mac OSX Snow Leopard 10.6.4
+  XAMPP 1.7.3

## 手順書
### 1. Apple Developer Tools (Xcode)の最新版をインストール
### 2. XAMPP Developer Packageをインストール
[http://www.apachefriends.org/en/xampp-macosx.html](http://www.apachefriends.org/en/xampp-macosx.html)より下記赤線のリンクをダウンロードします。
{% img http://www.kinopyo.com/blog/wp-content/uploads/2010/09/xampp-developer-package-for-mac.jpg xampp develop package for mac %}
参考リンク：[http://blog.m-schmidt.eu/2010/03/30/develop-memcached-web-apps-with-xampp-under-mac-os-x/](http://blog.m-schmidt.eu/2010/03/30/develop-memcached-web-apps-with-xampp-under-mac-os-x/)
ダウンロードしたdmgファイルを開いてDevel-Package.mpkgをダブルクリックでインストールします。

### 3. ターミナルを開いて(/Applications/Utilities/Terminal)下記コマンドを実行
{% codeblock %}
cd /tmp
pecl download memcache
tar xzf memcache-2.2.5.tgz
cd memcache-2.2.5
/Applications/XAMPP/xamppfiles/bin/phpize-5.3.1
MACOSX_DEPLOYMENT_TARGET=10.6 CFLAGS='-O3 -fno-common -arch i386 -arch x86_64' LDFLAGS='-O3 -arch i386 -arch x86_64' CXXFLAGS='-O3 -fno-common -arch i386 -arch x86_64' ./configure --with-php-config=/Applications/XAMPP/xamppfiles/bin/php-config-5.3.1
make
sudo make install
{% endcodeblock %}
成功したら/Applications/XAMPP/xamppfiles/lib/php/php-5.3.1/extensions/no-debug-non-zts-xxxxのフォルダ(xxは20090626みたいな日付)に<strong>memcache.so</strong>というファイルが生成されます。

### 4. php.iniファイルの編集
/Applications/XAMPP/xamppfiles/etc/php.iniファイルを開いて"Dynamic Extensions"のブロックを検索し、下記内容を追記します。私の環境では538行くらいでした。
{% codeblock %}
extension=memcache.so
{% endcodeblock %}
こんあ感じです。
{% img http://www.kinopyo.com/blog/wp-content/uploads/2010/09/php-ini-memcache-extension.jpg Add memcache extention to php.ini %}

### 5.memcacheを立ち上がる
ターミナルで下記コマンドを実行します。
{% codeblock %}
memcached -m 8 -l 127.0.0.1 -p 11211 -d
{% endcodeblock %}
これは自分の環境でmemcacheをIP:127.0.0.1、ポート:11211、8MBのRAMスペースで立ち上がる意味です。

### 6. phpで動作確認
下記ファイルを用意します。ファイル名は任意です(ここではmemcache.phpとしました)。

```php
<?php

$memcache = memcache_connect('127.0.0.1', 11211);

if ($memcache) {
	$memcache->set("str_key", "String to store in memcached");
	$memcache->set("num_key", 123);

	$object = new StdClass;
	$object->attribute = 'test';
	$memcache->set("obj_key", $object);

	$array = Array('assoc'=>123, 345, 567);
	$memcache->set("arr_key", $array);

	var_dump($memcache->get('str_key'));
	var_dump($memcache->get('num_key'));
	var_dump($memcache->get('obj_key'));
}
else {
	echo "Connection to memcached failed";
}
?>

```

これを/Applications/XAMPP/xamppfiles/htdocsに置いて、ブラウザでhttp://localhost/memcache.php(あるいはhttp://127.0.0.1/memcache.php)を開きます。
下記のようなページが表示されればOKです。
{% img http://www.kinopyo.com/blog/wp-content/uploads/2010/09/memcache-test-in-php.jpg memcache test in php %}

ちなみにmemcacheを停止するコマンドは：
{% codeblock %}
killall memcached
{% endcodeblock %}

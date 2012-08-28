---
layout: post
title: 'Kohana3でmemcacheを利用する方法'
date: 2010-9-24
wordpress_id: 1440
permalink: /blog/setup-memcache-in-kohana
comments: true
categories: ["php", "memcache", "PHP", "環境構築"]
---
## 前提条件
memcacheとphp_memcache extensionがインストールされたこと。
[http://www.kinopyo.com/blog/install-memcache-and-php-extension-in-mac-xampp](http://www.kinopyo.com/blog/install-memcache-and-php-extension-in-mac-xampp)を参考してください。

## 手順
### 1. application/bootstrap.phpを編集
Kohana::modulesのcacheのコメントを外します。
{% img http://www.kinopyo.com/wp-content/uploads/2010/09/kohana-bootstrap-module-cache.jpg Kohana active cache in bootstrap.php %}

### 2. 下記の内容でconfig/cache.phpを作成
場所はapplication/configでもいいしsystem/config、modules/configでもいいです。

```php
<?php defined('SYSPATH') or die('No direct script access.');
return array
(
	'default'  => array
	(
		'driver'             => 'memcache',
		'default_expire'     => 3600,
		// Use Zlib compression (can cause issues with integers)
		'compression'        => FALSE,
		'servers'            => array
		(
			array
			(
				// Memcache Server
				'host'             => '127.0.0.1',
				// Memcache port number
				'port'             => 11211,
				// Persistent connection
				'persistent'       => FALSE,
			),
		),
	),

);

```

### 3. 動作確認
まずはmemcacheを立ち上がってください。(ターミナルでmemcached -m 8 -l 127.0.0.1 -p 11211 -d  )
そしてbootstrap.phpの最後にテスト用のコードを追記します。

```php
$cache = Cache::instance();
$cache->set('hello','world');
die(var_dump($cache->get('hello')));

```

これで任意のページを開いて下記の内容が表示されれば成功ってことです。
string(5) "world"

テスト成功したらbootstrap.phpからテスト用のコードを削除してください。

---
layout: post
title: 'Windowsにmemcacheをインストール、PHPの設定'
date: 2010-11-26
wordpress_id: 1515
permalink: /blog/install-memcache-in-windows-setup-php
comments: true
categories: ["Apache", "memcache", "PHP", "php"]
---
## My環境
XAMPP1.7.3 + WinXP
ダウンロードは[こちら](http://www.apachefriends.org/en/xampp-windows.html)

## memcache側の設定
### memcacheのインストール手順
+ [http://code.jellycan.com/memcached/](http://code.jellycan.com/memcached/)より<strong>memcached 1.2.6 => win32 binary</strong>バージョンのファイルをダウンロード
+zipファイルを適当な場所(例えばc:\memcached)に解凍
+コマンドプロンプトから下記コマンドを叩く、Windowsサービスとしてインストール。これで今度Windowsが起動すると自動でmemcacheサーバが起動してくれる。
{% codeblock %}
c:\memcached.exe -d install
{% endcodeblock %}

### memcacheの起動(初回のみ)
コマンドプロンプト
{% codeblock %}
c:\memcached\memcached.exe -d start
{% endcodeblock %}

## php側
### php.iniの設定
XAMPPのパス/php/php.iniを編集：下記コードを追加
{% codeblock %}
extension = php_memcache.dll
{% endcodeblock %}

ここはLinux環境と違い拡張子が.soではなく.dll。

### php_memcache.dllのダウンロード
[http://downloads.php.net/pierre/](http://downloads.php.net/pierre/)から'memcache'を検索して正しいバージョンのファイルをダウンロード。
そしてxampp/php/extに入れる。

<br/>
ここで問題！正しいバージョンはなんなのか？間違ってダウンロードすると後でApacheサーバを立ち上がるときエラーが出るよ。私の環境だと<b>php_memcache-cvs-20090703-5.3-VC6-x86.zip</b>のファイルが正しいけど、今時点で上記URLには載せていない。結構ググって見ても結局古い結果で、しょうがなく友人からそのファイル貰った。。。ここにアップしたので、必要な方はダウンロードしてください。ウイルススキャンしてね。。
<a href='http://www.kinopyo.com/wp-content/uploads/2010/11/php_memcache-cvs-20090703-5.3-VC6-x86.zip'>php_memcache-cvs-20090703-5.3-VC6-x86</a>

## 動作確認
xamppでapacheサーバを起動、下記内容をphpファイルと保存してサーバのDocumentパス(デフォルトではXAMPP/htdocs)に置く。

```php

<?php
    $memcache = new Memcache; // instantiating memcache extension class
    $memcache->connect("localhost",11211); // try 127.0.0.1 instead of localhost
                                           // if it is not working

    echo "Server's version: " . $memcache->getVersion() . "<br />\n";

    // we will create an array which will be stored in cache serialized
    $testArray = array('horse', 'cow', 'pig');
    $tmp       = serialize($testArray);

    $memcache->add("key", $tmp, 30);

    echo "Data from the cache:<br />\n";
    print_r(unserialize($memcache->get("key")));
?>

```

## おまけ：memcacheメモリの調整
{% blockquote  %}
Memcached, by default, loads with 64mb of memory for it’s use which is low for most applications. To change this to something else, navigate to HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\memcached Server in your registry, find the ImagePath entry and change it to look something like this:

“C:\memcached\memcached.exe” -d runservice -m 512
{% endblockquote %}


## 参考
[http://www.codeforest.net/how-to-install-memcached-on-windows-machine](http://www.codeforest.net/how-to-install-memcached-on-windows-machine)
[http://pureform.wordpress.com/2008/01/10/installing-memcache-on-windows-for-php/](http://pureform.wordpress.com/2008/01/10/installing-memcache-on-windows-for-php/)

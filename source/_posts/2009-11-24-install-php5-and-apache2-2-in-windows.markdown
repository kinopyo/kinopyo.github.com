---
layout: post
title: 'PHP5とApache2.2をWindowsにインストール'
date: 2009-11-24
wordpress_id: 319
permalink: /blog/install-php5-and-apache2-2-in-windows
comments: true
categories: PHP Apache
---
<div class="section">
<h4>Apache</h4>
<h5>ダウンロード＆インストール</h5>
<ul>
<li><a href="http://httpd.apache.org" target="_blank">Welcome! - The Apache HTTP Server Project</a>から最新版を入手</li>
<li>インストールファイルを実行、下記2点注意すればOK</li>
<li>[Network Domain]と[Server Name]のところはlocalhostと記入</li>
<li>[Custom]インストールでインストール先が指定できる</li>
</ul>
<h5>設定</h5>
<p>[Apache Home]\conf\httpd.confを開いて下記のパスを自分の環境にあわせて</p>
<p>設定してください。このパスはサーバが立ち上がった際のrootとして使います。</p>
<ul>
<li>DocumentRoot "D:/www"</li>
<li>&#60;Directory "D:/www"&#62;</li>
</ul>
<h4>PHP</h4>
<ul>
<li><a href="http://www.php.net/downloads.php" target="_blank">PHP: Downloads</a>から入手
<ul>
<li>Windows BinariesからPHP 5.2.11 zip packageをダウンロード</li>
</ul>
</li>
</ul>
<p>拡張子がMSIのinstaller版もあるが、マニュアルでのインストールがすすめられる</p>
<ul>
<li>zipファイルを適当な場所に解凍。今回はd:\phpに。</li>
<li>Windowsの環境変数pathに設定</li>
<li>コマンドプロンプトで下記コマンドでインストール成功かを確認</li>
</ul>
<blockquote>
<p>php -v</p>
</blockquote>
<h4>php.ini</h4>
<ul>
<li>php.ini-recommendedをphp.iniにリネーム</li>
<li>doc_rootを検索し内容を編集</li>
</ul>
<blockquote>
<p>doc_root = d:\www</p>
</blockquote>
<p>Apacheサーバと同じルート(httpd.confの DocumentRoot)</p>
<h4>ApacheサーバとPHPの連携</h4>
<p>httpd.confの修正</p>
<blockquote>
<p>LoadModule php5_module d:/php/php5apache2_2.dll</p>
<p>AddType application/x-httpd-php .php</p>
<p>PHPIniDir "d:/php"</p>
</blockquote>
<p>ディレクトリは自分の環境に合わせて修正してください。</p>
<br/>
<h4>動作確認</h4>
<p>d:/phpにtest.phpというファイルを作ります。内容は下記になります。</p>
<p><?php phpinfo();?></p>
<p>注意！！<? phpinfo();?>は動かない！</p>
<p>Apacheサーバを再起動し、<a href="http://localhost/test.php" target="_blank">http://localhost/test.php</a>を叩いてPHPのページが表示されればOKです。</p>
<h4>参考サイト</h4>
<p><a href="http://blog.cheki.net/archives/250" target="_blank">  Apache2 + PHP5をWindowsXPにインストール</a></p>
<p><a href="http://www.adminweb.jp/apache/php/index3.html" target="_blank">php.iniの配置場所の指定(PHPIniDir) - PHP利用のための設定 - Apache入門</a></p>
</div>

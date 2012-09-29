---
layout: post
title: 'Mac(UNIX)でApache2.2サーバをインストール'
date: 2009-11-29
wordpress_id: 326
permalink: /blog/install-apache2-2-in-mac-or-unix
comments: true
categories: Apache Mac
---
<div class="section">
<p>一番デフォルトでのインストール手順です。</p>
<h4>インストール</h4>
<p>1. <a href="http://httpd.apache.org/download.cgi" target="_blank">Download - The Apache HTTP Server Project</a>でUNIX Sourceをダウンロード</p>
<p>2. 解凍し、ターミナルを開いてそのディレクトリに移動</p>
<p>3. 次のコマンドを実行、--prefix="インストール先"を指定。省略された場合は/usr/local/apache2になる。他にモジュールとかの設定も可能。</p>
{% codeblock %}
./configure --prefix=/users/kinopyo/develop/apache
{% endcodeblock %}
<p>4. ビルド、インストール</p>
<p>次のコマンドを実行、それぞれ時間がすこしかかる</p>
{% codeblock %}
make
make install
{% endcodeblock %}
<p>これでインストールは完了です。</p>
<h4>カスタマイズ：httpd.confを編集</h4>
<p>ここからはプラットフォームとは関係なく単純なApacheの世界です。</p>
<p>前回の記事を参照してください：</p>
<p><a href="http://d.hatena.ne.jp/kinopyo/20091124/1259017666" target="_blank">PHP5とApache2.2をWindowsにインストール - kinopyoの日記 </a></p>
<h5>補足</h5>
<p>Windowsはインストールウィザードでインストール時</p>
<p>ServerAdminとServerNameの編集ダイアログがあります。</p>
<p>一方MacはGUIのインストールではないため、</p>
<p>手動でhttpd.confに上記二つのプロパティを設定する必要があります。</p>
<h4>テスト</h4>
<p>サーバの起動：</p>
{% codeblock %}
$ インストール先のディレクトリ/bin/apachectl -k start
{% endcodeblock %}
<p>サーバの停止：</p>
{% codeblock %}
$ インストール先のディレクトリ/bin/apachectl -k stop
{% endcodeblock %}
<p>これでブラウザで<a href="http://localhost:80" target="_blank">http://localhost:80</a>にアクセスすればページが表示されるはずです。</p>
<h5>トラブルにあった！</h5>
<p>上記コマンドを打つディレクトリはApacheサーバがインストールされたディレクトリです。</p>
<p>例えば/users/kinopyo/develop/apacheにインストールされたとして、</p>
<ol>
<li>まずはcd /users/kinopyo/develop/apacheに移動</li>
<li>次に/bin/apachectl -k startで実行</li>
</ol>
<p>もし第一歩でbinディレクトリまで移動し、直接apachectl -k startを実行したら、</p>
<p>下記のようなエラーメッセージが出て、起動失敗になります。</p>
{% codeblock %}
(13)Permission denied: make_sock: could not bind to address [::]:80
(13)Permission denied: make_sock: could not bind to address 0.0.0.0:80
no listening sockets available, shutting down
Unable to open logs
{% endcodeblock %}
<br/>
<p>ちなみにこのメッセージが出るもう一つのパターンはポート番号が既に使われている場合です。</p>
<p>その時は下記コマンドで検出するし、使っているアプリを停止するか</p>
{% codeblock %}
netstat -na | grep 8082
{% endcodeblock %}
<p>httpd.confのListenとServerNameのポート番号を新たに設定する必要があります。</p>
<br/>
<p>参考サイト：</p>
<p><a href="http://httpd.apache.org/docs/2.2/install.html" target="_blank">Compiling and Installing - Apache HTTP Server</a></p>
<p><a href="http://lists.freebsd.org/pipermail/freebsd-questions/2003-November/025576.html" target="_blank"> apache install problem   </a></p>
</div>

---
layout: post
title: 'Mac OSでsqliteをインストール'
date: 2009-10-11
wordpress_id: 271
permalink: /blog/install-sqlite-in-mac
comments: true
categories: [nil]
---
<div class="section">
<h4>インストール</h4>
<ul>
<li>公式サイト(<a href="http://www.sqlite.org/download.html" target="_blank">http://www.sqlite.org/download.html</a>)でファイルをダウンロード。Macなら二番目の「sqlite-amalgamation-3.6.18.tar.gz」をダウンロードすればよい。</li>
<li>Macのターミナルを起動し、上記解凍パスに移動する。</li>
<li>下記コマンドを実行する。</li>
</ul>
<blockquote>
<p>./configure --prefix=ここでインストールパスを指定</p>
<p>make</p>
<p>make install</p>
</blockquote>
<ul>
<ul>
<li>私の場合は--prefix=/users/user_name/Database/sqlite</li>
</ul>
</ul>
<p>インストールの詳細は解凍先のドキュメントの「INSTALL」を参照してください。</p>
<p>ここでは一番簡単(デフォルト)のコマンドを紹介します。</p>
<p>英語ばかりでわかりづらいかもしれません。</p>
<p><br/></p>
<p>これでインストールは完了です。</p>
<p>指定したインストール先には「bin」、「include」、「lib」の三つのフォルダがあるはずです。</p>
<p>次にターミナルでbinフォルダに移動します。</p>
<p>ここからはsqliteのシンタックスになります。</p>
<h4>データベースの起動/作成</h4>
<blockquote>
<p>sqlite test.db;</p>
</blockquote>
<p>これでtestという名のデータベースにつながります。もしtest.dbのファイルがなければ自動で作成されます。</p>
<p>こんなメッセージも出るはずです。</p>
<blockquote>
<p>SQLite version 3.4.0</p>
<p>Enter ".help" for instructions</p>
</blockquote>
<h4>テーブルの作成</h4>
<p>次に簡単なテーブルを作成し、データをINSERTしましょう。</p>
<blockquote>
<p>sqlite&#62; create table Employee(id int,name varchar(15));</p>
<p>sqlite&#62; insert into Employee values (1,'Jim');</p>
<p>sqlite&#62; insert into Employee values (2,'Tom');</p>
<p>sqlite&#62; select * from Employee;</p>
<p>1|Jim</p>
<p>2|Tom</p>
<p>sqlite&#62; </p>
</blockquote>
<h4>データベースのクローズ</h4>
<blockquote>
<p>.exit</p>
</blockquote>
<p>ちょっと探しましたが、このサイトで日本語の資料がたくさんあるようです。</p>
<p><a href="http://www.dbonline.jp/sqlite/index.html" target="_blank">http://www.dbonline.jp/sqlite/index.html</a></p>
</div>

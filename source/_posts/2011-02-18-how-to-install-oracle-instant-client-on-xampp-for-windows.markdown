---
layout: post
title: 'Windows XAMPPにOracle Instantclientをインストール'
date: 2011-2-18
wordpress_id: 1610
permalink: /blog/how-to-install-oracle-instant-client-on-xampp-for-windows
comments: true
categories: ["oracle", "PHP", "php", "XAMPP", "環境構築"]
---
Oracle Instantclientをインストールすることで、PHPからOracleデータベースへの接続が可能になります。

XAMPPのデフォルトインストールではそれが無効となっています。確認方法はphpinfoのページから'oci8'を検索して何もなかったらつまり接続できてないことです。

## 手順
+  php.ini(XAMPP/phpのパスにある)の中から;extension=php_oci8.dllを検索して、セミコロン(;)を削除。
+  Oracleから“Instant Client Package – Basic” for Windowsをダウンロードし、任意の場所に解凍。ここではc:\instantclient_11_1とする。
+  Windowsの環境変数pathに上記instantclientが解凍されたパスを追加(c:\instantclient_11_1)
+  そしてWindowsを再起動！
+  Apacheを再起動

<br/>
## 確認
phpinfoのページからoci8を検索してあれば成功！

<br/>
## その他
+  ORACLE_HOMEやORACLE_SIDなどの環境変数はInstant Clientでは必要ないから設定しなくても大丈夫だそう。
+  パス設定後Windowsを再起動しないと、"unable to load dynamic library php_oci8.dll"のようなエラーが出た。

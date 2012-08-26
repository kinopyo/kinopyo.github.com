---
layout: post
title: 'Macのターミナルを活用'
date: 2010-11-29
wordpress_id: 1534
permalink: /blog/tips-for-mac-termina
comments: true
categories: ["Linux", "Mac"]
---

## ターミナルの起動
ターミナルはApplication/Utilitiesフォルダにあります。
CTRL+Spaceで直接Terminalを叩いても直接開けますので、
とても便利でずっとこれを使ってます。

## 基本コマンド
:ls:(Windowsのdirコマンドと同じ役割)list files and directories
:cd:change directory
:mkdir:create a new directory
:cp:copy files or directories
:mv:move (rename) files or directories
:rm:remove files or directories


## 便利なコマンド
+  pwd
今のディレクトリのパスを返します。"/Users/(yourusername)"のような

+  open
Finderでダブルクリックと同じ効果です。アプリを開くに使います。

+  ~
波記号はHomeディレクトリのショートカットです。
例えばcd ~で叩くとデフォルトで"/Users/(yourusername)"ディレクトリに行きます。

## ジョブコントロール
+  ps -ax
これはActivity Monitorのコマンドバージョンと理解していいでしょう。
現在アクティブなアプリのリストを表示します。
よくgrepコマンドと組み合わせて使います。

```
ps -ax | grep http
ps -ax | grep mysql

```

+  kill
ps -axの一番目の列はプロセスのIDの列です。
あるプロセスを強制的に終了させたい場合はID指定で"kill"できます。

```
kill xxx

```
上記の"xxx"はプロセスのIDです。


またアプリの名前がわかった場合はkillallコマンドが使えます。

```
killall Dock

```
大文字小文字は区別しますので、気おつけてください。

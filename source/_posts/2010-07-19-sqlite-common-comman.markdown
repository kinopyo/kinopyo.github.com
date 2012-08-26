---
layout: post
title: 'SQLite common command'
date: 2010-7-19
wordpress_id: 1257
permalink: /blog/sqlite-common-comman
comments: true
categories: [nil]
---
## SQLiteの起動、データベースの選択/作成
sqlite DB_NAME

DB_NAMEは実際のファイル名と同じです。例えば：
sqlite db/development.sqlite3

## テーブル一覧
.tables
.ta

## テーブルスキーマを見る
.schema TABLE_NAME

## ヘルプ
.help

## シェルモードを終了
.quit
.exit

詳しくは[http://www.sqlite.org/sqlite.html](http://www.sqlite.org/sqlite.html)を参照してください。

# 中文
## SQLite的启动，选择或创建数据库
sqlite DB_NAME

DB_NAME即是数据库名又是文件名。因为SQLite的一个文件就是一个数据库。比如Ruby开发中常用的：
sqlite db/development.sqlite3

## 所有表的一览
.tables
.ta

## 查看表结构
.schema TABLE_NAME

## 查看帮助
.help

## 退出SQLite
.quit
.exit

更多请参照命令[http://www.sqlite.org/sqlite.html](http://www.sqlite.org/sqlite.html)。

# English

## To start SQLite program, select/create a Database
sqlite DB_NAME

DB_NAME is also the file name.For example:
sqlite db/development.sqlite3

## List names of tables
.tables
.ta

## Show the create statements
.schema TABLE_NAME

## Help
.help

## Exit SQLite program
.quit
.exit

For more information, visit [http://www.sqlite.org/sqlite.html](http://www.sqlite.org/sqlite.html).

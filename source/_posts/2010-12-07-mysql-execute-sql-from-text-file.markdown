---
layout: post
title: 'MySQL: SQL文のテキストファイルを実行するには'
date: 2010-12-7
wordpress_id: 1585
permalink: /blog/mysql-execute-sql-from-text-file
comments: true
categories: ["MySQL", "sql"]
---
1000件くらいのinsert文を用意して、それをコピって一気にmysqlのコマンドラインに貼りつけたらうまく行かなかったんです。sql文に文法的間違いがなくてもエラーとなったり、表示が崩れたりしました。数件なら多分まだいいんですけど、さすが1000件だと(コマンドラインに貼り付けるやり方では)処理が追えない気がします。

それらのsql文をファイルに保存し実行すれば問題なかったので、以下がそのコマンドです。

```sql
mysql> source file_name
--あるいは
mysql> \. file_name
```

また下記文を書けば進捗情報が見れるとMySQLのレファレンスで書かれてますが、時間の関係上今回は試してませんでした。

```sql
SELECT '<info_to_display>' AS ' ';
```

参考：
[http://dev.mysql.com/doc/refman/5.0/en/batch-commands.html](http://dev.mysql.com/doc/refman/5.0/en/batch-commands.html)

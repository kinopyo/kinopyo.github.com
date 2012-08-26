---
layout: post
title: 'Oracle SQL*Plusで出力したファイルをExcelで文字化けの解決策'
date: 2011-9-9
wordpress_id: 2190
permalink: /blog/oracle-sqlplus-output-file-garbled-when-open-in-excel
comments: true
categories: ["excel", "oracle", "Oracle", "sqlplus", "文字化け"]
---
## 現象
SQL# Plusで出力したcsvファイルなどをExcelで開いたら日本語の部分が全部文字化けになっちゃいました。

## 原因
出力ファイルはUTF8ですが、ExcelではShiftJisじゃないと文字化けするらしいです。

## 解決策
秀丸などのエディターで出力ファイルを開き、エンコードUTF8で名前をつけて保存。
そうすればExcelで開くときに文字化けは治る。

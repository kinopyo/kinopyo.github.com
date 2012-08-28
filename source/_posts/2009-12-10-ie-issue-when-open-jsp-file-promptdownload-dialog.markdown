---
layout: post
title: 'IEでJSPを開こうとするとダウンロードのプロンプトダイアログが出る'
date: 2009-12-10
wordpress_id: 475
permalink: /blog/ie-issue-when-open-jsp-file-promptdownload-dialog
comments: true
categories: [nil]
---
秀丸でjspと関連付けたら、IEでJSPを開こうとするとダウンロードのプロンプトダイアログが出る。

## 回避方法
関連付けを決断！
+  エクスプローラの「ツール→フォルダ オプション→ファイルの種類→拡張子」にJSPを捜し、「詳細設定」を開いてopenアクションを削除。
+  あるいはファイルの種類のタブの中の「削除」ボタンで削除
<p style="text-align: center;">{% img http://kinopyo.com/wp-content/uploads/2009/12/file_associate.JPG JSPファイルの関連付け %}</p>

秀丸が悪いのか、何が悪いのかは調べてないです。
とにかくこれで一応解決。

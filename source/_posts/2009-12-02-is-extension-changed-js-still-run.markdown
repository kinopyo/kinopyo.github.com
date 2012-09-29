---
layout: post
title: '拡張子が変更されたJavaScriptは実行されるか？IE,Firefoxでのセキュリティ'
date: 2009-12-2
wordpress_id: 334
permalink: /blog/is-extension-changed-js-still-run
comments: true
categories: Javascript
---
<div class="section">
<p><a href="http://gihyo.jp/dev/serial/01/web20sec/0001?page=2" target="_blank">ここが危ない！Web2.0のセキュリティ：第1回　Ajaxとクロスサイトスクリプティング｜gihyo.jp … 技術評論社</a>の勉強メモ＆実験です。</p>
<h4>実験</h4>
<p>あるJavaScriptの拡張子をcsvに変更してSCRIPTタグでそれをインポートするHTMLを用意します。</p>
<p>そのJavaScriptを実行しようとするとIEのデフォルトセキュリティオプションでは、</p>
<p>ファイルのダウンロードダイアログが出ます。</p>
<p>Firefoxは拡張子がcsvにもかかわらずちゃんとJavaScriptと認識してそれを実行します。</p>
<h4>原理</h4>
<p>CSVファイルは単にカンマで区切られたデータですので，スクリプトは実行されないはずです。</p>
<p>Internet Explorerの仕様にセキュリティ設定に「内容によってファイルを開く」という設定ががあります（図2）。 </p>
<p><img alt="" src="http://image.gihyo.co.jp/assets/images/dev/serial/01/web20sec/0001/thumb/TH300_fig02.png"></p>
<blockquote title="http://gihyo.jp/dev/serial/01/web20sec/0001?page=2" cite="http://gihyo.jp/dev/serial/01/web20sec/0001?page=2">
<p>これは，Internet Explorerがファイルの中身を見て，その中にHTMLっぽい文字列が含まれていればHTMLだと判断するということを意味しています。このため拡張子やレスポンスに含まれるContent-Typeヘッダとは関係なく，外部から参照可能なファイルにはクロスサイトスクリプティング対策が必要であるということになります。</p>
<p>一方，Firefoxの場合はレスポンスのContent-Typeヘッダを見て判断しますので，ファイルの中身が何っぽいのかを気にする必要はありません。 </p>
<cite><a href="http://gihyo.jp/dev/serial/01/web20sec/0001?page=2" target="_blank">http://gihyo.jp/dev/serial/01/web20sec/0001?page=2</a></cite></blockquote>
<p>この観点からはIEのほうがセキュリティの面で高いと見られます。</p>
</div>

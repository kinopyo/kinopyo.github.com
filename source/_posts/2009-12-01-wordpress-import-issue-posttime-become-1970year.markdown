---
layout: post
title: 'はてなからWordPressへ移行時、投稿時間が1970年に'
date: 2009-12-1
wordpress_id: 331
permalink: /blog/wordpress-import-issue-posttime-become-1970year
comments: true
categories: [nil]
---
<div class="section">
<h4>移行手順</h4>
<ul>
	<li>はてなダイアリーの「管理→ データの管理→ Movable Type形式」で記事をダウンロード</li>
	<li>そのままWordPressの「ツール→ インポート→ Movable Type and TypePad」にアップロード</li>
</ul>
<h4>トラブル</h4>
すると一部の記事の投稿時間が1970年になってしまったんです。

検索してみたらはてなより出力されたファイルを下記のように<span style="font-weight: bold;">「00:00:00」の「AM」を消せばいい</span>とのことです。

	<li>修正前</li>

`DATE: 11/19/2009 12:47:59 AM`

	<li>修正後</li>

`DATE: 11/19/2009 12:47:59`

<br/>
秀丸なのどエディタで一気に変更できるため、あんまり時間かからないはずです。
が、それでも一つの記事が1970になってしまって、そのデータをよ～く見たら「0:xx:xx PM」の形になってました。
ほかにもいろんなPMで始まる記事があるんですが、なぜかこれだけバグってます。
試しに
`DATE: 11/19/2009 00:47:59 PM`
を
`DATE: 11/19/2009 01:47:59 PM`
に変更したら解決しました。やはり<span style="font-weight: bold;">0時のPMはうまく認識されないよう</span>です。
<br/>
</div>
<h4>まとめ</h4>
「AM」をすべて消す
「2009 00:」を検索し「2009 01:」のように00時以外の時間に置換する

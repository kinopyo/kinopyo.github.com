---
layout: post
title: 'Same-Originポリシー勉強メモ'
date: 2009-11-23
wordpress_id: 315
permalink: /blog/memo-of-same-origin-policy
comments: true
categories: [nil, "webservice"]
---
<div class="section">
<p>gihyoサイトの「ここが危ない！Web2.0のセキュリティ」連載の第2回：<a href="http://gihyo.jp/dev/serial/01/web20sec/0002" target="_blank">「Same-Originポリシーと迂回技術」</a>の勉強メモです。</p>
<h4>定義</h4>
<p>他のドメインのサイトへはリクエストを送信できない制限のことをSame-Originポリシーと呼びます。同じドメインであってもポート番号やプロトコル（HTTPとHTTPSなど）が異なれば，異なるサイト（クロスドメイン）とみなされアクセスできません。クロスドメインアクセスは機能として実装されていないのではなく，セキュリティ上の理由から禁止されているそうです。</p>
<h4>必要性</h4>
<p><img alt="" src="http://image.gihyo.co.jp/assets/images/dev/serial/01/web20sec/0002/thumb/TH400_fig02.png"></p>
<p>俺があの黒の攻撃者とし、攻撃目標がユーザのメールアカウント情報だとします。もしクロスドメインにアクセスする制限がなければ、事前に用意したスクリプトで(urlをメールサーバに設定)メールアカウントの情報が取得できるようになってしまいます。(この辺りはCookieの話が出てきます)</p>
<h4>ウェブの基本ルール</h4>
<p>Ajaxだけではなく、フレームやサブウインドウの情報にアクセスする場合などにも存在する</p>
<h4>クロスドメインでデータを取得する方法</h4>
<p>    * リバースPorxy</p>
<p>    * SCRIPTタグ（JSONP）</p>
<p>    * Flash</p>
<p>    * 画像</p>
<p>    * スタイルシート</p>
<h4>リバースProxy</h4>
<p><img alt="" src="http://image.gihyo.co.jp/assets/images/dev/serial/01/web20sec/0002/thumb/TH400_fig03.png"></p>
<p>データ提供サーバにとってユーザの身元は隠れているため、攻撃者に利用しやすい</p>
<p>ユーザの身元を確認しようとすると、ユーザ情報を扱わなければならない</p>
<p>ユーザ情報--&#62;サーバ--&#62;データ提供サーバ</p>
<p>　</p>
</div>

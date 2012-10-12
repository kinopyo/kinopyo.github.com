---
layout: post
title: "Macbook Pro Late 2008にSSDを換装"
date: 2012-10-12 22:12
comments: true
categories: Mac
---
2009年の春に買ったMacbook Pro、モデルはLate 2008。当時は全部ハイスペックにカスタマイズしたんですが、最近さすがにもう何もかも遅いと感じました。

そこでコストパフォーマンスの一番いい選択肢としてSSDに換装してみました。経験談から言うとだいぶ速くなりました。

## OCZ SSD OCZ Vertex4 2.5" 256GB

家のメインマシンとして使うので256GBは必要です。OCZは友達から直接お勧められたブランドで、[価格.comのレビュー](http://review.kakaku.com/review/K0000359199/)も結構参考になりました。

<a href="http://www.amazon.co.jp/gp/product/B007RUV564/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B007RUV564&linkCode=as2&tag=fantasyday-22"><img border="0" alt="OCZ SSD OCZ Vertex4 2.5 inch 256GB" class='no_fancybox' src="http://ws.assoc-amazon.jp/widgets/q?_encoding=UTF8&ASIN=B007RUV564&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=fantasyday-22" alt='OCZ SSD OCZ Vertex4 2.5" 256GB'></a><img src="http://www.assoc-amazon.jp/e/ir?t=fantasyday-22&l=as2&o=9&a=B007RUV564" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

**注意** 実は最初Intel SSD 330 Seriesを購入したのですが、全然**相性が合わな**くて使い物にならなかったんです。まったく識別されなかったり、しょっちゅうMacのレインボーカーソルになったりしました。

<a href="http://www.amazon.co.jp/gp/product/B007P71JJM/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B007P71JJM&linkCode=as2&tag=fantasyday-22"><img border="0" alt="Intel SSD 330 Series Maple Crest 180GB MLC 2.5inch 9.5mm Reseller Box SSDSC2CT180A3K5" class='no_fancybox' src="http://ws.assoc-amazon.jp/widgets/q?_encoding=UTF8&ASIN=B007P71JJM&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=fantasyday-22" ></a><img src="http://www.assoc-amazon.jp/e/ir?t=fantasyday-22&l=as2&o=9&a=B007P71JJM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />


> Xbench、BootCamp上のXPのCDMでも転送速度が110MB/s超で頭打ちになります。後から調べて分かったのですが、MCP79とIntelSSDは相性が悪いらしく、海外のフォーラムでは520/510も同様にSATA1.5に制限されるような情報もありました。
> -- <cite>にがたけさん</cite>
-- [価格.com - OCZ VTX4-25SAT3-256G レビュー・評価](http://review.kakaku.com/review/K0000359199/#535139)

AmazonのSSDランキングではIntel SSDが一番人気でレビューも高い点数が付いてますが、購入する前は自分のMacのSerial-ATAの型番を確認しておいたほうがいいですね。MacのSystem Reportから確認できます。

![Macbook Pro Serial-ATA](http://cdn.kinopyo.com/images/macbook_pro_serial_ata.png)

## 必要なツール(Amazon link)
### 必須アイテム！
<a href="http://www.amazon.co.jp/gp/product/B001VB8ANQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B001VB8ANQ&linkCode=as2&tag=fantasyday-22"><img border="0" alt="ベッセル(VESSEL) パワーグリップ トルクスドライバー T6 No.B-5400TX" class="no_fancybox" src="http://ws.assoc-amazon.jp/widgets/q?_encoding=UTF8&ASIN=B001VB8ANQ&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=fantasyday-22" ></a><img src="http://www.assoc-amazon.jp/e/ir?t=fantasyday-22&l=as2&o=9&a=B001VB8ANQ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<a href="http://www.amazon.co.jp/gp/product/B002SQLEIG/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B002SQLEIG&linkCode=as2&tag=fantasyday-22"><img border="0" class='no_fancybox' alt="アネックス(ANEX) 精密ドライバー プラス00×50 No.3450" src="http://ws.assoc-amazon.jp/widgets/q?_encoding=UTF8&ASIN=B002SQLEIG&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=fantasyday-22" ></a><img src="http://www.assoc-amazon.jp/e/ir?t=fantasyday-22&l=as2&o=9&a=B002SQLEIG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

この２つはSSDを固定するに使います。

### あれば便利

<a href="http://www.amazon.co.jp/gp/product/B0068GBGNU/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B0068GBGNU&linkCode=as2&tag=fantasyday-22"><img border="0" class='no_fancybox' src="http://ws.assoc-amazon.jp/widgets/q?_encoding=UTF8&ASIN=B0068GBGNU&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=fantasyday-22" alt="玄人志向 ハードディスクケース SATA3.0対応 USB3.0対応 SSDにオススメ！ GW2.5SATA3-U3"></a><img src="http://www.assoc-amazon.jp/e/ir?t=fantasyday-22&l=as2&o=9&a=B0068GBGNU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />


自分は換装されたHDDからファイルをコピーして来るのに使いました。

## 換装＆OSのインストール
ここは箇条書きで抜粋します。

1. SSDをまず上記購入したケースに入れてMacに接続しDisk Utilityでフォーマットする
2. SSDとHDDを入れ替え、HDDはケースに入れる
3. Mac起動時にoptionキーを押しながら出てくる画面からOSインストール => SSDを選択
4. App Storeのメール＆パスワードを入力してOSのインストールファイルをダウンロード
4. Mountain Lionインストール完了直前はファイル移行するかが問われる、その時に旧HDDからコピーって来るのを選択。ここは任意で。
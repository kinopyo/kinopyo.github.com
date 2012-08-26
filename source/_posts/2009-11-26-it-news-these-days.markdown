---
layout: post
title: '最近のIT業界動向'
date: 2009-11-26
wordpress_id: 322
permalink: /blog/it-news-these-days
comments: true
categories: [nil, "diary"]
---
<div class="section">

専門家ではないので記事のテーマがちょっとでかすぎるかもしれませんが、

最近気になったニュースをベースにざっと述べようと思います。
<h4>2010年注目の資格、一位が仮想化技術</h4>
これは@ITの記事による結果です。

仮想化といえばVMWareくらいは知ってますけど、

Mac上でWindowsのアプリをたまたま実行する時に使ってました。

「運用コスト削減のためのサーバ統合やクラウドの活用」などのことにどう繋いでいるのか全然イメージできません。。。

少し興味はあるんで、後で勉強しとこう。

関連の資格は以下のようです。
<ul>
	<li>ヴイエムウェアの「VCP」（VMware Certified Professional）</li>
	<li>マイクロソフトの「Hyper-V仮想化検定」「MCP」（Microsoft Certification Program）</li>
	<li>シトリックスの「CCEA」（Citrix XenServerのCitrix Certified Enterprise Administrator）</li>
</ul>
<h4>クラウド</h4>
このキーワードもITユースから頻繁に出てきますが、

どのようにプログラマのキャリアに影響するか、

知りたいですね。
<h4>JDK 7 Milestone 5 build</h4>
Java7のニュースはずっと聞いてたんですが、

なかなか使ってみる時間がないですね。

今日雑誌でちらっと読んだのですが、

モジュール化、多言語の対応などの機能が追加されたそうです。

特にモジュールのサポートは「JAR HELL」(Jarの地獄)から救う有力な機能だそうです。これからクラスパスなど特に気にしなくてモジュール単位になりますと。

またコレクション周りの使い方も強化されましたね。

実は一番気に入ったのがswitch文がやっとString文字列をサポートしたことです。

今までJavaのswtich文があんまり使えないなと何となく感じましたが、

Java7になるとやっと文字列できましたね！
```java

String s = "...";
switch (s) {
case "quux":
	processQuux(s);
	// fall-through
case "foo":
case "bar":
	processFooOrBar(s);
	break;
case "baz":
	processBaz(s);
	// fall-through
default:
	processDefault(s);
	break;
}

```
<h4>In the end..</h4>
ということでIT業界どんどん進化していきます。

Java7,,,やってみたいっす！

</div>

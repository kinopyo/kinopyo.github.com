---
layout: post
title: 'headには一番最初にMETAタグで文字コードを指定するのが望ましい'
date: 2010-1-27
wordpress_id: 915
permalink: /blog/meta-tag-sequence-in-head-section
comments: true
categories: [nil]
---
HTMLのheadセクションにはタイトルといろんなMetaタグが記述されているが、
その記述順番に気になったことはありますか?
そしてそれがどのような影響があるかぐぐってみました。

{% blockquote }

headセクション内のタグの記述順に特に決まりはないが、"charset"で示す文字コード指定のタグは、titleタグやmeta description/keywordsタグよりも先に記述することが推奨される。の中身がまさに、文字で書かれ、文字コード判定が必要だからです。

{% endblockquote %}

そういえばWordpressを使ってからこの辺全然気にしてないので
早速自分のサイトのheadセクションを確認しました。
下記のようなものです。

```xml

&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US"&gt;
&lt;head profile="http://gmpg.org/xfn/11"&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt;
&lt;title&gt;Kinopyo&amp;#039;s Blog&lt;/title&gt;

```

なるほど、、metaタグでcharsetがUTF-8になってるから
titleのところのシングルクォーテーションがUTF-8の#039になったわけですね。
考えてみれば当たり前のことだけれど。。。

## 参考サイト
[MetaタグとTitleタグの位置関係について](http://www.google.com/support/forum/p/webmasters/thread?tid=43832eca33833101&amp;hl=ja)
[ブラックなSEOで人生を失った悲惨な男の物語 など10記事（海外&amp;国内SEO情報）](http://web-tan.forum.impressrd.jp/e/2010/01/08/7139)

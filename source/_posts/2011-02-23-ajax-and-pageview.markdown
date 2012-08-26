---
layout: post
title: 'Ajaxとアクセス解析PVの関係'
date: 2011-2-23
wordpress_id: 1615
permalink: /blog/ajax-and-pageview
comments: true
categories: ["ajax", "Google", "pageview", "アクセス解析"]
---
AJAXでのアクセスはPVにカウントされない、というのをこの間にミーティングで知りました。考えてみりゃ当たり前のことですが、考えたことはなかったです。。でどうするか、とのことでちょっとぐぐってみました。

結論からいうと<strong>ダミーのページを指定するようにJavascript側で書く</strong>（Google Analytics前提）

```javascript
<script type="text/javascript">
urchinTracker(); // デフォルト
urchinTracker("/hogehoge");
urchinTracker("/hogehoge/hege");
</script>

```
みたいな感じです。urchinTrackerはGoogle Analyticsが提供してくれるファンクションです。
ダミーページに階層式にするのは後で統計しやすいような工夫だそうです。

原理はこちらを参照してください：[http://markezine.jp/article/detail/1243](http://markezine.jp/article/detail/1243)
ちょっと長いですが、細かく解説した文章です。

こちらも役に立つかと思います。[http://creazy.net/2007/06/ajax_access_analyze.html](http://creazy.net/2007/06/ajax_access_analyze.html)

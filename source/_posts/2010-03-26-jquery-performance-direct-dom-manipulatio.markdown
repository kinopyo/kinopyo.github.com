---
layout: post
title: 'jQueryパフォーマンス：DOM操作について'
date: 2010-3-26
wordpress_id: 1053
permalink: /blog/jquery-performance-direct-dom-manipulatio
comments: true
categories: [nil]
---
DOM操作を避けてjQueryのパフォーマンスを改善する掟です。
こんなコードがあるとしましょう。

## パフォーマンスの悪い例

```javascript
var list = *....*;    // 長さ100の配列とする

for (var i in list) {

    var li = document.createElement("li");

    $(li)
       .attr("id", "li" + i)
       .text(list*i*);

$("ul").append(li);

}

```

## 改善したコード

```javascript
var list = *....*;    // 長さ100の配列とする

var li = "";
for (var i in list) {

    li += "<li id='li" + i "'>" + list*i* + "</li>";

}

$("ul").html(li);

```

## まとめ
+  document.createElementの代わりにHTMLの文字列を作る
+  jQueryオブジェクトに属性やテキストを設定するのではなく、直接HTML文字列に書く
+  for文内毎回appendの代わりにhtml()を使う

実際のプロジェクトでやってみたら10倍以上は速くなりました。
とは言ってもこれはIE6でのパフォーマンスで、
FirefoxやIE8だと悪い例のコードても遅いとは実感できないくらいでした。

ちなみに
$(li).attr(...).val(...).text(...)の方は読みやすいので結構気に入ったんですけど。。。

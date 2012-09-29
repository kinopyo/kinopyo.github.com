---
layout: post
title: 'IE JavaScript実行した際の「アクセスが拒否されました」メッセージ'
date: 2009-11-19
wordpress_id: 311
permalink: /blog/javascript-message-of-access-denied-in-ie
comments: true
categories: IE Javascript
---
## 経緯 ##

<p>iframeで動的に画面を読み込む際URL不正などによる通信エラーが起こした場合の</p>
<p>エラーハンドラを追加したかったので判断するロジックが必要でした。</p>
<p>わざと誤ったURLを渡して検証しましたが、以下のコードはだめでした。</p>

```javascript
// documentがnullかと思ってそれで判断しようとしたんです。
if (this.contentWindow.document) {}
```

## 現象 ##

<p>あるプロパティは存在しているのに、アクセスができない。コードで書くと</p>

```javascript
// プロパティがオブジェクトに存在するかを判断
// ここはアラーとが出した、つまり存在したってこと
if ("aProperty" in obj) alert('obj has aProperty');
// 次にそのオブジェクトにアクセスしようとすると
// エラーになった
obj.aProperty
```

<p>IE8の開発ツールで見たら「アクセスが拒否されました」と書いてある。</p>

![](http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091119/20091119133655.jpg)

## エラーをcatch ##

<p>判断のロジックをtry-catch文に書けばいいです。</p>

```javascript
try {
  this.contentWindow.document;
} catch (e) {
  if (e.number == -2147024891) {
    //アクセスが拒否されました。
    alert(e.message);
  } else {
    alert("別のメッセージ");
  }
}
```

<p>参考サイト：<a href="http://sei.qee.jp/docs/freetalk/2009/02.html" target="_blank">http://sei.qee.jp/docs/freetalk/2009/02.html</a></p>

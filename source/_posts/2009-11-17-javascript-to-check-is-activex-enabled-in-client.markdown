---
layout: post
title: 'クライアント側のActiveXが有効か無効かを検出するJavaScript'
date: 2009-11-17
wordpress_id: 308
permalink: /blog/javascript-to-check-is-activex-enabled-in-client
comments: true
categories: Javascript
---
## 知っておくべきこと ##

- ActiveXはIE専用のものと理解してよい、Firefoxなどでは存在しない
- new ActiveXObject("Microsoft.XMLHTTP")でIEのXMLHttpRequestが生成される
- IE のバージョンによっては、"Microsoft.XMLHTTP"の代わりにこれらも使用できるそうです：
  - "Msxml2.XMLHTTP.5.0"
  - "Msxml2.XMLHTTP.4.0"
  - "Msxml2.XMLHTTP.3.0"
  - "Msxml2.XMLHTTP"
- もし生成できればActiveXコントロールは有効になっている

## 検出ソースコード ##

```javascript
// ブラウザがIEの場合
if (window.ActiveXObject) {
  try {
  //IEのXMLHttpRequestオブジェクトを試しに生成
  var xhr = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {
    alert('ActiveXコントロールは無効になっています');
  }
}
```

<br/>
## 参考サイト ##

<p><a href="http://deztec.jp/x/05/faireal/faireal-5-20-index.html#d20503a" target="_blank">動画をHTMLに埋め込むヒント - faireal.net</a></p>
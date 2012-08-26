---
layout: post
title: 'Javascript window.openで開いたページで親ウィンドウのdocumentを取得には'
date: 2010-1-29
wordpress_id: 928
permalink: /blog/javascript-get-opener-window-document
comments: true
categories: [nil]
---
window.open()で新規開いた小窓ウィンドウで親ウィンドウのdocumentを取得するには
下記のプロパティを使います。

```javascript
window.opener.document

```

これで親ウィンドウの値を取得するだけではなく、
値を編集することもできます。
<br/>

例えば下記のコードは親ウィンドwのフォーム内のテキストをAAAに変更します。
新規開いたページに記述します。

```javascript
window.opener.document.FORM1.TEXT1.value = "AAA";

```

## 参考サイト
[とほほのJavascriptレファレンス：ウィンドウオブジェクト](http://www.tohoho-web.com/js/window.htm#open)

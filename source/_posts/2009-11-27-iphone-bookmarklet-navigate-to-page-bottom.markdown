---
layout: post
title: 'iPhoneでページ最下部へ移動するブックマークレット'
date: 2009-11-27
wordpress_id: 323
permalink: /blog/iphone-bookmarklet-navigate-to-page-bottom
comments: true
categories: [nil]
---

### ブックマークレット(Bookmarklet)とは
簡単に言うとJavaScriptをブックマークしたものです。
普通はURLをブックマークするに対し、JavaScriptをブックマークします。
そしてこのブックマークを選ぶときは保存されたJavaScriptが実行されます。
iPhoneのブラウザ関連のアプリでは結構使われています。

### 最下部へ移動するJavaScriptをiPhoneに登録する方法

```javascript
javascript:<span class="synStatement">window</span>.scrollTo(0,<span class="synStatement">document</span>.documentElement.scrollHeight);
```

- まずSafariで任意のサイトをブックマークする
- そのブックマークを編集する
- 一行名に好きな名前(ここではPage Bottom)を記入し、二行目を上記のJavaScriptを貼付けで保存する

![](http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091128/20091128002653.png)

- ページの最下部へ移動したい時はブックマークからさっき登録したブックマークレットをタップすればOK。

![](http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091128/20091128002655.png)

参考サイト：
- [iPhoneでページ最下部へ移動するブックマークレット | CSS-EBLOG](http://css-eblog.com/javascript/scrolltoend-for-iphone.html)
- [ブックマークレットとは - はてなキーワード](http://d.hatena.ne.jp/keyword/%A5%D6%A5%C3%A5%AF%A5%DE%A1%BC%A5%AF%A5%EC%A5%C3%A5%C8)
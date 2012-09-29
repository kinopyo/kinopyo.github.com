---
layout: post
title: 'jQueryのtoggle(switch)が大変便利、条件文5行のコードが1行に短縮！'
date: 2009-11-27
wordpress_id: 324
permalink: /blog/jquery-toggle-swtich-tips
comments: true
categories: jQuery
---
toggle()の普通の使い方は多分皆さんご存知だと思います。
該当要素をクリックするたびに表示/非表示を切り替えます。

![](http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091128/20091128134759.gif)

今日紹介するのはこのswitchパラメータ付のtoggleです。
**swtich文を評価しtrueであれば要素を表示、falseであれば非表示です。**
これで下記のコードがこのswtich付きのtoggle文なら一行ですみます。

```javascript
if (name == "kinopyo") {
	$("p").show();
} else {
	$("p").hide();
}
```

これがこうなります。

```js
$("p").toggle(name == "kinopyo");
```

どうですか？すごくないですか？
まさにjQueryの「The Write Less, Do More」ですよね。
ただし判断の条件文が行の最後になるので、
読みやすさは多少落ちると思います。
<br/>
ちなみに、Googleの単語とよく似ているので、ついついtoogleと書いちゃいますorz
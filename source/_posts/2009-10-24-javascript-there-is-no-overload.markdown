---
layout: post
title: 'JavaScriptにオーバーロードはない'
date: 2009-10-24
wordpress_id: 280
permalink: /blog/javascript-there-is-no-overload
comments: true
categories: Javascript
---
javaをやってからJavaScriptにかえると、
なかなかなれませんね。
<br/>
例えばJavaではオーバーロードができるが、
JavaScriptには通用しない。
<br/>
すごく簡単に言うと、オーバーロードは多重定義の意味で、
同じメソッド名で違う型、数のパラメータがある時、それぞれ一つのメソッドとして認められる。
一方、JavaScriptでは後勝ちです。
先に定義したものが無効になります。

```js
function func(param) {
  alert(param);
}
function func() {
  alert(1);
};
func('test');
func();
```

同じfuncの名前で作られた関数で、一個目はparamというパラメータがついてる。
二番目はパラメータがない。
すると結果は： 1 1 になります。
常に後で定義したものが勝ちます。
<br/>
```js
function func(){
  alert(1);
};
function func(param){
  alert(param);
}
```

これは「test undefined」になります。
---
layout: post
title: 'JavaScript: argumentsは配列じゃない、配列のメソッドを使うには'
date: 2009-11-18
wordpress_id: 309
permalink: /blog/javascript-argumentsis-array-like-object
comments: true
categories: Javascript
---
<div class="section">
<p>argumentsは配列じゃないため、配列のメソッドは</p>
<p>使えません。ということは本を読んだとき当たり前だと思ったんですが、</p>
<p>実際コードに落としたときは</p>
<p>自然とargument.slice()を書いちゃいました。</p>
<h4>argumentsで配列のメソッドを使うには</h4>
<p>Array.prototype.<配列のメソッド>.call(arguments,<パラメータ>)</p>

```js
Array.prototype.slice.call(arguments, 2)
```

<p>上記の意図としてはarguments.slice(2)の表現に近いです。</p>
<h4>argumentsはarray-likeオブジェクト</h4>
<p>ここでちょっとargumentsの基本知識を復習します。</p>
<p>length属性もあるし、[]でindex指定のオブジェクトを参照できますけど、</p>
<p>argumentsは配列に似ているオブジェクトだけです。</p>
<h5>予約語</h5>
<p>Technically, argumentsは予約語ではないですが、</p>
<p>予約語として認識してよいです。</p>
<p>つまりargumentsという変数は作成しないでってことです。</p>
<br/>

```js
function foo(x){
  alert(x);
  var arguments;
  arguments[0] = null;  //xの値が変更されちゃう
  alert(x);	// null が出力される
}
```

<h5>callee Property</h5>
<p>Refers to the function that is currently being executed.</p>
<p>今実行中のファクションを参照しています。</p>

```js
function(x) {
  if (x <= 1) return 1;
  return x * arguments.callee(x-1);
}

```
</div>

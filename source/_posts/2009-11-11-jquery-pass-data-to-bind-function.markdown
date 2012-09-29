---
layout: post
title: 'jQuery bindバインド時にデータを渡す'
date: 2009-11-11
wordpress_id: 300
permalink: /blog/jquery-pass-data-to-bind-function
comments: true
categories: jQuery
---
## 誤った使い方 ##

例えばbind時にname変数に格納された情報を渡したい

```
var name = "kinopyo";
$(":button").bind("click", function(name){
  alert(name);
});
```

<p>これは誤った使い方です。</p>
<p>alertでは望まれた「kinopyo」の文字列は表示されません。</p>
<p>私は最初jQueryに触れたときはこんな書き方をしたんです。</p>
<br/>
<p>もちろんname変数とbindのコールバックは同じスコープなのでfunctionから直接name変数を参照できますが、</p>
<p>ここではあえて誤った使い方にしました。</p>
<br/>
<p>実際alertでは[object Object]と表示されました。</p>
<p>firebugで中身をのぞいてみるとこんな感じのオブジェクトです。</p>

![](http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091111/20091111222209.jpg)

<p>このnameは一体何のか、答えはjQueryのEventオブジェクトです。</p>
<p>Eventオブジェクトについてはこの記事<a href="http://d.hatena.ne.jp/kinopyo/20091111/1257946561">「jQuery Eventオブジェクトの詳細、バブリングの仕組み」</a>を参照してください。</p>

## bindのAPI ##

<p>**bind(type, [data], fn)**</p>

- type：click, dbclick,mousedown...などトリガーとなるイベントタイプ
- [data]：第三パラメータのハンドラにデータを渡す。括弧は配列の意味ではなく、省略可の意味
- fn：イベントハンドラ
- パラメータ：jQueryのEventオブジェクト、event.dataで第二引数の[data]を参照できる

<p>jQueryは第二パラメータに対してdataかfunctionか自動判断してます。</p>
<p>普段使い慣れたのはdataを省略したものでしょう。</p>
<p>さっきの例を修正すると、正しく「kinopyo」が表示されます。</p>

```javascript
var name = "kinopyo";
$(":button").bind("click", name, function(event){
  alert(event.data);
});
```

<p>渡されるのはJavaScriptのオブジェクトです。。</p>
<p>つまり配列も、キー値ペアのオブジェクトも全部渡されます</p>
<br/>

## 参考サイト ##

<p><a href="http://docs.jquery.com/Events/bind">公式サイトのbindドキュメント</a></p>
<p><a href="http://stacktrace.jp/jquery/api/events/bind.html">StackTraceサイト</a></p>

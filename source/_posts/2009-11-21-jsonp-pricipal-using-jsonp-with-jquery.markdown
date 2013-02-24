---
layout: post
title: 'JSONPの動作原理、jQueryでJSONPを利用'
date: 2009-11-21
wordpress_id: 313
permalink: /blog/jsonp-pricipal-using-jsonp-with-jquery
comments: true
categories: [nil, "webservice"]
---
前回の記事の続きとしてJSONPを勉強しました。

XMLHttpRequestはセキュリティ上の制限により、

クロスドメインの通信ができないです。

でもウェブサービスのようなどうしてもクロスドメインで通信したい場合があります。

その時の手段してあげられるのがこのScriptタグです。

(他の手段としてiframeやflashとリバースプロキシがあるそうです)

## JSONPとは

> JSON with paddingの略

> Javascriptの非同期通信でよく使われるXMLHttpRequestオブジェクトにはSame-Originポリシーが存在し、クロスドメインアクセスができない。

> 一方，scriptタグを用いると，ドメインの異なるサーバに置いているスクリプトファイルを読み込むことができる。この仕組みを利用し、scriptタグのsrcに、データを取得できるAPIのURLを指定し，ドメインの異なるサーバからデータを取得する仕組みの総称として、JSOPという言葉が使われる。JSONP用のAPIでは、関数名＋取得データをjson形式で表記して引数とした形式(例.callbackFunc({id:1000,name:aaa}))のレスポンスが一般的で、APIから返されるコールバック関数と同じ名前の関数(callbackFunc(jsonData))をクライアント側で定義しておけば、データを読み込んだ際にそのコールバック関数が実行される。動的にscriptのDOMを生成することで、非同期でデータが取得できるようになる。

> ただし、Same-Originポリシーが存在しないため、機密情報をAPIに含める際には十分な注意が必要である。

## 動作原理

やはりソースコードで読むほうが早いだと思います。

以下gihyo.netからのサンプルコードです。

```html
<html>
  <body>
    <script>
      function callback(x) {
        // コールバック関数を定義
        alert(x["name"]);
      }
    </script>
    <script src="http://mail.example.com/json.dat"></script>
  </body>
</html>
```

### データ提供サーバ側が用意したJSON
json.datの中身

```js
callback( { "name" : "Fukumori" } );
```

### 簡単まとめ
要はクライアント側で先にデータを扱うコールバック関数を定義

その名はデータの提供側とのコールバック関数名と一致する必要がある

scriptタグでデータ提供サーバのデータをインポート

すると先に用意したコールバック関数が走ってデータを処理する



もっと詳しい動作原理とセキュリティはgihyoの特集を参照してください。
とても分かりやすいです。おすすめ！

[第3回　JSONPでのクロスドメインアクセス：ここが危ない！Web2.0のセキュリティ｜gihyo.jp … 技術評論社](http://gihyo.jp/dev/serial/01/web20sec/0003?page=1)

## jQueryでJSONPを使う

jQueryのAjaxメソッドには$.getJSONがあります。

このメソッドはjQuery1.2からJSONPも対応したようです。

> As of jQuery 1.2, you can load JSON data located on another domain if you specify a JSONP callback.

利用方法はurlの最後に”?”付きのコールバックパラメータを追加することです。

例えば”example.com?callback=?”こんな感じです。

callbackの値は指定しなくてもよいみたい、

jQueryが自動で変換してくれます。

ただしコールバックのパラメータ名はデータ提供側によって異なるかもしれません。

例えばヤフーPipesは”_callback=?”を要求してるそうです。
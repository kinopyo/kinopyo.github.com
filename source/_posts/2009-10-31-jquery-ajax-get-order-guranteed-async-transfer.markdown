---
layout: post
title: 'jQueryでajax：非同期通信時、実行順番を保障する方法'
date: 2009-10-31
wordpress_id: 289
permalink: /blog/jquery-ajax-get-order-guranteed-async-transfer
comments: true
categories: jQuery
---

## 前記：
この記事では多数のAJAX通信が発生した際、
「非同期」の処理順番を保障する方法を検討します。
すべては私個人の経験なので、もしこれよりもっどいい方法があれば
ぜひ教えてください。
実際この問題にぶつかった際の考えの流れで書いています。
使えない案や、懸念がある案も全部述べたので、文章が長くなってしまいました。
開発する当時はまだインターネットにつながらないので、
何の情報も取得できず、考えたんです。
後でネットで調べたら<a href="http://plugins.jquery.com/project/ajaxqueue" target="_blank">Ajax Queue</a>のプラグインが
同じことをしてくれます。
このプラグインを使った後に所感を書く予定です。

## 本題

AJAXはご存知だと思います。非同期通信でページをリフレッシュせずに動的に通信ができる、
リッチなウェブアプリケーションを構築する上で不欠けんな存在であります。

一方、この「非同期」というのは特徴であり、たまには厄介なことになります。
例えばajaxの処理と普通の処理の実行順序を気にするとき、
コードの書いた順番とおり実行する保障はありません。

### jQueryでコードを書くと、こんな感じです。

```javascript
$.ajax(option);
alert('ajax done');
```
ここでajax通信が終わってからalertが出るように見えますがそうとは言い切れないです。
ajax通信が終わってない段階でalertが出るかもです。
ならばどうしたらいいんですか？

一番簡単なのはjQueryが用意したコールバック関数です。

```js
$.load(url, [data], [callback])
$.get(url, [data], [callback], [returnType])
$.getJSON(url, [data], [callback])
```

などがあります。
[data]がなければ、コールバックの関数を二番目のパラメータで書いてもOKです。
jQueryは内部的に判断してくれます。dataなのか、コールバックかを。

そして$.ajaxにはoptionでsuccessやcompleteにコールバックを設定できます。
これらを用いて上記のコードを以下のように改善できます。

$.ajax(option)の場合
```js
.load(url,[data],[callback])
$.get(url,[data],[callback],[returnType])
$.getJSON(url,[data],[callback])
```

### ここで問題2に入ります。
もし必要なajax通信が一つ以上で、すべてのajax通信が完了した後に何かの処理が実行したい場合は
どうすればいいでしょうか。

コードで書くと、こんな感じです。
```js
$.ajax(option1);
$.ajax(option2);
$.ajax(option3);
function(){
	alert('all ajax done');
}
```

## 案1:ajaxのグローバル関数

jQueryではajaxのグローバル関数と呼ばれるいくつかの関数を提供してくれました。
それらは以下のようなものです。

```js
.ajaxComplete(handler)
.ajaxSuccess(handler)
```

これらはDOM上のどの要素にも設定でき、AJAX通信が行われる際に呼び出されます。

例えば以下のようなコードがあります。
```js
$(document).ajaxComplete(function(){
	alert('ajax complete');
});
```

これはdocument要素において、何かのajax通信が完了したらパラメータのコールバックを実行する意味です。
selectorにはもっと範囲を縮むことができます。
例えばこんなHTMLがあるとします。

```js
<div id='content'></div>

$('#content').ajaxComplete(function(){
	alert('content ajax complete');
});
```
これならidがcontentのdivにajax通信が完了する際のコールバックを示しています。

しかしこれだけではまだ問題2を解決できません。
```js
$.ajax(option1);
$.ajax(option2);
$.ajax(option3);
$(document).ajaxComplete(function(){
	alert('ajax complete');
});
```

こう書くと、任意の通信が完了したらこのajaxCompleteが呼ばれ、
ほかの二つの処理がどうなってるかはまったくわからないです。

ここで$.ajax(option)のoptionに注目しましょう。
optionにはglobalというフラグがあり、デフォルトはtrueになってます。
その役割はグローバル関数の監視対象にするかしないかです。
このフラグをfalseに設定すれば、該当のajax通信がどうなってもグローバル関数はトリガーしません。
なので、通信処理1と2のglobalフラグをfalseに設定し、最後の処理3をtrueに設定すれば、
処理3が実行完了した際、グローバルのajaxCompleteが実行されます。

改善したコードは以下になります。一部省略しました。

```js
var option1 = {
	global: false
	// ほかのurlなどの設定
}

var option2 = {
	global: false
	// ほかのurlなどの設定
}

var option3 = {
	global: true
	// ほかのurlなどの設定
}

$.ajax(option1);
$.ajax(option2);
$.ajax(option3);
$(document).ajaxComplete(function(){
	alert('ajax complete');
});
```
しかし、ここで懸念事項があります。
ajax処理の間の順番はどうなるか断言できません。
つまりこういった順番で実行されたかもです。

処理1実行
処理1完了
処理2実行
処理3実行
処理3完了
グローバルの関すを呼び出す
処理2完了

軽く動作確認ではちゃんと思ったとおり1,2,3で動いていますが、
やはりその辺が気になって、やめました。


## 案2：ajaxをラッパーした関すを作る

$.ajax(option)のoptionにはcompleteというのがあります。
successと使い方は同じで、successは通信が成功した際実行するコールバックで、
completeは完了した際のコールバックです。

なので今回思い出したのアイディアはこのcompleteに次のajax処理を指定して、
さらにその次のajaxのcomplete optionにも後のajax処理を指定したらどうでしょうか。
尻尾をどんどん噛んでいく蛇のイメージです。

(抜粋)
```js
var option1 = {
	complete: $.ajax(option2)
}

var option2 = {
	complete: $.ajax(option3)
}

var option3 = {
	complete: function(){
		alert('ajax all complete');
	}
}

$.ajax(option1);
```

動作確認でOKでした。
completeオプションで前のajax通信が必ず完了した後に次のajax通信を始まることを
保障しています。
これでajaxのチェインができました。

これをちょっと綺麗にラッパーした関数を作りました。
ご覧ください。

```js
function doOrderGuaranteedAjax(ajaxOptionArray, allCompleteHandler){
  var defaults = {
    type : "GET",
    dataType : "text",
    complete : function() {
      // 最初の要素を削除
      ajaxOptionArray.shift();
      // すべての通信が完了した場合
      if (ajaxOptionArray.length == 0 ) {
        // コールバックが設定された場合
        if (allCompleteHandler) {
          allCompleteHandler();
        }
      } else {
        // 通信配列にまだ通信が残っている場合
        option = ajaxOptionArray[0];
        // ajaxのオプションを次の通信に切り替え
        opts = $.extend({}, defaults, option);
        // 通信を開始
        $.ajax(opts);
      };
    }
  };

  // 初期指定
  var option = ajaxOptionArray[0];
  var opts = $.extend({}, defaults, option);
  // 一回のみ実行
  $.ajax(opts);
};
```

まず$.ajax(option)のoptionを順番でpushした配列が第一パラメータで渡されます。
2～23行まではデフォルトのoptionを構築し、一回目の処理は29行から走ります。
そしてデフォルトのoptionではcompleteで実行完了した処理を配列から削除(7行)します。
配列にまだ待ち状態の処理があるならオプションを次の通信に切り替えます(14～20行)。
もし配列にある処理が全部実行完了したら、コールバックを呼びます(9～13行)。

使い方はまずオプションを一つの配列にpushし、その配列を一番目のパラメータで、
コールバックを二番目のコールバックで渡します。

```js
var optionArray = [];
optionArray.push(option1);
optionArray.push(option2);
optionArray.push(option3);
doOrderGuaranteedAjax(optionArray, function(){
	alert('all complete');
});

```
arrayのpushとshiftを利用し、スタック構造を真似してます。
push() は array の最後に配列要素を加えます。
shift() は array の最初の要素を削除します。

これでファーストイン、ファーストアウトFIFOが実現し、
処理の順番が保ちます。

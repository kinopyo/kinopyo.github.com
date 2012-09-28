---
layout: post
title: 'jQuery bind, unbind：多重バインド、リファレンス、名前空間の利用'
date: 2009-11-10
wordpress_id: 298
permalink: /blog/jquery-bind-unbind-multy-bind-reference-and-namespace
comments: true
categories: Javascript jQuery
---
## 多重bind

- 検証：一つのボタンにイベントを多重バインドした時の動き

```js
$(input).bind('click', function() {
  alert(1);
});
$(input).bind('click', function() {
  alert(2);
});
$(input).bind('click', function() {
  alert(3);
});
```

- 出力：inputのボタンをクリックするとalertで1,2,3が次々と出る
- 結論：バインドされた順番どおり実行

## 一括unbind

- 検証：上記多数バインドされた要素に対し、一括でunbind

```js
$(input).unbind('click');
```

- 出力：なし
- 結論：一括でunbindされた

## 特定のイベントのみunbind

- 検証：多数bindしたイベントの中で、特定のイベントのみunbind

### バインド時のファンクションをそのまま記述(失敗)

```js
$(input).unbind('click', function() {
  alert(2);
});
```

- 出力：1, 2, 3
- 結論：失敗

### ファンクションのリテラル(リファレンス)を通してunbind

```js
function out1() {
  alert(1);
};
function out2() {
  alert(2);
};
function out3() {
  alert(3);
};
$(input).bind('click',out1);
$(input).bind('click',out2);
$(input).bind('click',out3);
$(input).unbind('click',out2)
```

- 出力：1, 3
- 結論：ファンクションのリテラル(リファレンス変数)を通して指定したイベントのみをunbindできる、しかしこれはあらかじめファンクションを定義しておかないと駄目

### 名前空間を用いてbind

```js
$(input).bind('click.1', function() {
  alert(1);
});
$(input).bind('click.2', function() {
  alert(2);
});
$(input).bind('click.3', function() {
  alert(3);
});
$(input).unbind('click.2');
```

- 出力：1, 3
- 結論：bindの第一引数でevent.namespaceと名前空間を使えばうまくunbindできる

同じの名前空間で複数のイベントにbindされた際

```js
$(input).bind('click.namespace', function() {});
$(input).bind('blur.namespace', function() {});
$(input).unbind('.namespace');
```

- 結論：名前空間指定で一括でunbindできる

### 一つのイベントに複数の名前空間を登録 ###

```js
$(input).bind('click.1.2',  function() {});
// click.1.2の名前空間にたどり着ける
$(input).trigger('click.1');
// click.1.2名前空間にたどり着ける
$(input).unbind('click.2');
```

- 結論：複数の名前空間のうち、任意の一つを使えばそのイベントを選択できる

公式サイト(英語)：

- [bind Events](http://docs.jquery.com/Events/bind#typedatafn)
- [Namespaced_Events](http://docs.jquery.com/Namespaced_Events)

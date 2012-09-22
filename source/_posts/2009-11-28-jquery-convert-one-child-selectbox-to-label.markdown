---
layout: post
title: 'jQueryでoptionが一つのSelectボックスをラベル表示'
date: 2009-11-28
wordpress_id: 325
permalink: /blog/jquery-convert-one-child-selectbox-to-label
comments: true
categories: [nil]
---
htmlにoptionが一つしかないselectboxがあるとします。
このようなselectを非表示にし、そのテキストラベルで表示させたいのもありですね。

```html
<select>
    <option>1</option>
</select>
```

### jQuery文はこれ

```javascript
//:only-childフィルタで子要素が一つしかない要素を選択
var $target = $("select :only-child");

$.each($target, function(index, item) {

  // spanのhtmlを構築
  var span = '<span>' + $(this).text() + '</span>';

  // thisはoptionを指しているため、そのparentのselect要素を非表示
  // 構築したspanを挿入
  $(this).parent().hide().after(span);

});
```

### さらにブランクの要素をフィルタ
selectボックスの先頭がblankのケースが結構あると思います。
その場合はラベル表示させたくないです。
なのでそれをフィルタするには、以下のようにfilter()を使います。

```javascript
var $target = $("select :only-child").filter(function(index) {
	return $.trim($(this).text()).length != 0;
});
```

### $.trim()の1000倍速い方法でブランクを検出
jQueryにはblankを検出するメソッドがないため、上記のソースコードでは
$.trim()を利用して判断しています。
しかしこの$.trim()は遅いとの報告がありました。
そこでblankのテキストを検出するためのメソッドも提供されました。
$.trim()が2000msかかったものがこれだと0.5msになったようです。

```javascript
blank: function( text ) {
	return !text || !/\S/.test(text);
}
```

興味のある方はこの記事を参照してください。英語のサイトです。
[Zipalong Blog » Blog Archive » jQuery: x1000 faster test for blank strings (on large strings)](http://zipalong.com/blog/?p=287)
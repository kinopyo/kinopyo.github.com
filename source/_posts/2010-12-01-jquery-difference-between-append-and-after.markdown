---
layout: post
title: 'jQuery: append(prepend,appendTo,prependTo)とafter(before,insertAfter,insertBefore)の違い'
date: 2010-12-1
wordpress_id: 1563
permalink: /blog/jquery-difference-between-append-and-after
comments: true
categories: ["JavaScript", "jQuery"]
---
jQueryのappendやafterは全部DOM Manipulation、つまりDOM操作のメソッドであります。どう違うかは下記ソースコードを見るのが一番速いでしょう。

## append(prepend,appendTo,prependTo)は要素内に、子供要素として貼り付ける

```javascript
$('<span>span text</span>').appendTo(".chapter");

```

```html
<div class="chapter"> ... </div>

```

組み立てた結果：

```html
<div class="chapter">
	...
	<span>span text</span>
</div>

```

append、appendToは最後の子供要素として、prepend、prependToは最初の子供要素として挿入する感じです。

## after(before,insertAfter,insertBefore)は要素の外、つまり同一のレベルで兄弟要素として貼り付ける

```javascript
$('<span>span text</span>').insertAfter(".chapter");

```
組み立てた結果：

```html
<div class="chapter">
	...
	<span>span text</span>
</div>

```

## htmlタグがなければ無効

```javascript
$('some text').appendTo(".chapter");

```

htmlに何の変更もないです。

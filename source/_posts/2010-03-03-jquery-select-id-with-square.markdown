---
layout: post
title: 'jQuery IDに括弧がついたオブジェクトを取るには'
date: 2010-3-3
wordpress_id: 1012
permalink: /blog/jquery-select-id-with-square
comments: true
categories: [nil]
---
こんなHTMLがあるとします。
idに**が付いてますね。

```html
<input id="foo*0*" type="text" />
<input id="foo*1*" type="text" />
<input id="foo*2*" type="text" />

```

こういうIDに括弧が付いたモノに対して
普通の#付きのjQueryセレクタでは選択できません。

```javascript
$("#foo*0*");    // 取れません

```

属性フィルタ*attribute=value*でとるのが正解です。

```javascript
$("*id='foo[0]'*");

```

0311更新：
もし具体的なタグがわかってあれば、
それを指定することでパフォーマンスを向上できます。
上記の例で言うと

```javascript
$("input*id='foo[0]'*");

```

このほうが速いです。

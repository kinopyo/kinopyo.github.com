---
layout: post
title: 'テキストボックスの文字列を選択(色逆転)、取り消すには'
date: 2009-12-10
wordpress_id: 462
permalink: /blog/how-to-select-and-deselec-text-of-an-input-box
comments: true
categories: Javascript
---
テキストボックスの文字を選択された状態にする方法とその解除方法です。
IEの場合selectボックスにselect()関数を使うとJavaScriptエラーになります。
Firefoxは大丈夫です。

```js
function selectFocusText(element){
	// for IE
	if (element.nodeName == "SELECT") return;
	element.select();
};

function unselectFocusText(){
	// for IE
	if (document.selection) {
		document.selection.empty();
	// for Firefox
	} else if (window.getSelection) {
		window.getSelection().removeAllRanges();
	}
};
```

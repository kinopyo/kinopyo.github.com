---
layout: post
title: 'JavaScript: カンマ区切りで数値をフォーマットする'
date: 2010-11-29
wordpress_id: 1531
permalink: /blog/javascript-format-number-to-japanese-currency
comments: true
categories: ["JavaScript", "Snippet"]
---
```javascript

/## 
 #  数値を日本円表現にフォーマット。
 #  例：12345 -> 12,345
 # 
 # /
num2Currency = function(obj){

	// 画面項目の値
	var str=obj.value;
	var num = new String(str).replace(/,/g/"");
	while(num != (num =num.replace(/^(-?\d+)(\d{3})/,"$1,$2")));
	obj.value = num;

}

/## 
 #  日本円表現を数値にフォーマット。
 #  例：123,45 -> 12345
 # 
 # /
currency2Num = function(obj){

	var str=obj.value;
	var num = str.replace(/,/g,"");
	obj.value = num;
}

```

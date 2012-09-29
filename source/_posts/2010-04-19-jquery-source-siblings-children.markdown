---
layout: post
title: 'jQuery siblings()とchildren()の内部ソースを見た'
date: 2010-4-19
wordpress_id: 1080
permalink: /blog/jquery-source-siblings-children
comments: true
categories: jQuery
---
よく出来ていると思います。
勉強になります。

```javascript
siblings: function( elem ) {
	return jQuery.sibling( elem.parentNode.firstChild, elem );
},
children: function( elem ) {
	return jQuery.sibling( elem.firstChild );
},

```

そしてjQuery.sibling()の中身です！
nodeTypeが1の場合はelementノードの意味です。
nはループに使われて、elemは除外する要素です。
例えばsiblings()の場合は自分自身を除外しています。
for文の書き方も覚えとこう、、
javaでのIteratorのhasNext()関数みたいな動きをしていますね。

```javascript

	sibling: function( n, elem ) {
		var r = **;

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}

```

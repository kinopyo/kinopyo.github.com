---
layout: post
title: 'jsp内のコメントアウトはjsp式の記述で'
date: 2010-2-17
wordpress_id: 942
permalink: /blog/comment-in-jsp-should-use-jsp-expression
comments: true
categories: Java
---
## 基本
多分ほとんどの人は分かっていると思いますが、
jspファイル内のコメントの記述は以下になります。

```html
<%-- JSPのコメント --%>

```

そしてHTMLのコメントの記述は

```html
 &lt;!-- HTMLのコメント -->

```

## 問題
SP内でもHTMLのコメント記述が使えますが、
コメントアウトした部分にJavaプログラムが埋め込んだ場合
そのコードは実はコンパイルされてしまいます。
例えば、

```html
&lt;!-- コメントアウト
<input type="text" value="<%= request.getNotExistMethod() %>" />
 -->

```

ここでは全く存在しないJavaのメソッドを書きました。
このままだとJSPがコンパイルエラーになります。
"The method getNotExistMethod() is undefined for the type HttpServletRequest"というメッセージです。

## 正しい方法
Javaプログラムが埋め込んだコードをコメントアウトするには
JSPのコメント式を記述します。
上記の例で言うとこうなります。

```html
<%-- JSPコメントアウト
<input type="text" value="<%= request.getNotExistMethod() %>" />
	-%>

```

## 補足
下記のようなコンパイルが通るJavaコードが書かれた場合は、
もちろんエラーは出ないし、 HTMLの部分もコメントアウトされたため画面には何も表示されません。

```html
&lt;!-- コメントアウト
<input type="text" value="<%= request.getContextPath() %>" />
	->

```

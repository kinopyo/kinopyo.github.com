---
layout: post
title: 'Java：List操作時のUnsupportedOperationExceptionについて'
date: 2010-4-16
wordpress_id: 1074
permalink: /blog/java-unsupportedoperationexception-when-manipulate-java-list
comments: true
categories: [nil]
---
久々にJavaを書いたので、表題のExceptionにハマっちゃいました。
こんなコードでした。

```java
String** array = {"a", "b", "c"};

List<String> list = Arrays.asList(array);

list.add("d");

```

ちょこっとググッてみたらasListで作ったListに
add()で要素を追加すると上記のExceptionになるそうです。
asListのJavadocでの記載は
{% blockquote }

指定された配列を基にする固定サイズのリストを返します。返されたリストへの変更は、そのまま配列に書き込まれます。(後は省略)

{% endblockquote %}

なるほど。。。
とりあえず深く考えずに下記のように書き換えて回避しました。

```java
String** array = {"a", "b", "c"};

List<String> list = new ArrayList<String>();

list.addAll(Arrays.asList(array));

list.add("d");

```

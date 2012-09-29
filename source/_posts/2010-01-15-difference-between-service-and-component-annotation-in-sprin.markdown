---
layout: post
title: 'Spring: @Serviceと@Componentの区別は？'
date: 2010-1-15
wordpress_id: 789
permalink: /blog/difference-between-service-and-component-annotation-in-sprin
comments: true
categories: Java
---
@ComponentアノテーションはJavaのクラスにつけるもので
このクラスをコンテナが管理するBeanとして登録する機能です。
@Serviceアノテーションも現状では@Componentと違いはありませんが、
通常<strong>サービス層</strong>のコンポネントは@Serviceアノテーションをつけます。
その理由は主に以下の二つです。
+  コンポーネントがサービス層のコンポーネントを明確にする意味で
+  今後@Serviceアノテーションを付与したBeanには自動的にトランザクション管理の機能が付与されるなどの機能拡張も期待される
<br/>
Spring3.0のリリースノートを見たところ特に@Serviceに関する変更はないみたいです。
なのでサービス層のクラスに対して@Componentか@Serviceか悩んでるんだっだら
@Serviceをつけた方がいいでしょう。
<br/>
参考サイト：
[Spring 2.5の新機能を使ってアプリケーションを作る(その1)](http://www.infoq.com/jp/articles/spring2.5-1)

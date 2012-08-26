---
layout: post
title: 'Ruby: 既存クラスにメソッドを追加、class_evalとsingleton method'
date: 2011-9-9
wordpress_id: 2184
permalink: /blog/ruby-add-method-to-string-class
comments: true
categories: ["metaprogramming", "Ruby"]
---
Rubyのクラスにメソッドを追加する方法です。ここではStringを例にしました。

{% gist 1205255 solution_1.rb %}
solution_1.rbはOpen Classというテクニックです。classキーワードで既存クラスを定義するときは上書きするのではなく、拡張した感じで、他のStringメソッドに影響がないです。

{% gist 1205255 solution_2.rb %}
solution_2.rbはただ<strong>class_eval</strong>の理論を試したかっただけです。<strong>class_eval</strong>はスコープ内の<strong>self</strong>と<strong>current class</strong>をreceiverのStringクラスに変更するんです。だからclass_evalのブロック内に定義したメソッドはStringのinstance methodになります。

{% gist 1205255 solution_mistake.rb %}
solution_mistake.rbはStringのクラスメソッド(Singleton methods)を定義したもので、instance methodではないです。

最近「Metaprogramming Ruby」という本を読んでます。よくわからなかったこととか、曖昧だっだことがすっきりした感じです。お勧めです！



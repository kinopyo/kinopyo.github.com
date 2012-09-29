---
layout: post
title: 'Ruby オブジェクトのクラスを調べるには？'
date: 2010-2-3
wordpress_id: 935
permalink: /blog/to-find-out-ruby-object-class
comments: true
categories: Ruby
---
Rubyでは変数の型を宣言しないです。
そのため、オブジェクトは実際に何型かがわからない時が多いです。
オブジェクトのクラスを調べるには以下の三つの方法があります。

## class
オブジェクトのクラスを調べられます。
返された結果はクラス名です。
例：

```ruby
"文字列です。".class

```
出力結果：string

## kind_of?
オブジェクトは特定のクラス又はそのサブクラスのインスタンスかどうかを調べられます。
モジュールに関しても、調べられます。
返された結果はtrue又はflaseです。
例：

```ruby
"文字列です。".kind_of?(String)

```
出力結果：true


ちなみに、is_a？メソッドもあります。kind_of？の使い方と同じです。

## instance_of?
オブジェクトは特定のクラスのインスタンスかどうかを調べられます。
kind_of?との区別は、サブクラスを含まらないことです。
つまり、kind_of?はサブクラスまで調べられますが、
instance_of?は特定のクラスだけ、サブクラスを調べられないです。
返された結果はtrue又はflaseです。
例：

```ruby
"文字列です。".instance_of?(String)

```
出力結果：true

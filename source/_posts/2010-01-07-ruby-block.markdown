---
layout: post
title: 'Rubyブロック'
date: 2010-1-7
wordpress_id: 760
permalink: /blog/ruby-block
comments: true
categories: Ruby
---
## ブロックとは？
Rubyでは、メソッドにデータを渡すだけではなく、処理も渡せます。
メソッドに渡された処理はブロックといいます。

## ブロックを渡すには？
ブロックを渡すには、二つの方法があります。
+ ①メソッドの最後に｛｝で囲んだコードを渡す。

```ruby
test_block {puts 'In the block'}
```

+ ②メソッドの最後にdo..endで囲んだコードを渡す。

```ruby
test_block do
  puts 'In the block'
end
```

## ブロックの使い方？
ブロックは使ってもらわないと、意味がありません。
使ってもらうということは、相手のメソッドが、ブロックの処理を実行することです。
メソッドの中で、渡されたブロックの処理を実行するには、yieldを使います。

```ruby
def test_block
  # test_blockメソッドを定義する
  puts 'Start of method'
  yield
  puts 'End of method'
end

test_block {puts 'In the block'}
```

実行結果：

```plain
Start of method
In the block
End of method
```

## ブロックにはパラメータを渡す？
ブロックにはパラメータを渡せますか？もちろんです。
パラメータの定義はブロックで、
yieldでブロックを実行する際には、パラメータを渡します。
ブロックは渡されたパラメータを受け取って、処理します。
文字の説明だけで、わからないかもしれません。
実はメソッドの定義とほとんど変わらないです。
サンプルを見てみましょう。

```ruby
def test_block_pramater
  yield('helloworld')
end
call_block {|str, num| puts 'Ruby sample:'+str }
```
※注意点：ブロックでは、||でパラメータを受け取っています。

## 渡されたブロックをさらに別のメソッドを渡すには？
渡されたブロックをさらに内部で使っているメソッドに渡すことができます。
引数の最後に&付きの引数を指定してブロックを受け取リます。

```ruby
def test_block(&block)
  # test_blockメソッドを定義する
  puts 'Start of test_block'
  test_block_paramater(&block)
  puts 'End of test_block'
end

def test_block_paramater(&block)
  puts 'Start of test_block_paramater'
  yield
  puts'End of test_block_paramater'
end

test_block {puts 'In the block'}
```

実行結果：

```plain
Start of test_block
Start of test_block_paramater
In the block
End of test_block_paramater
End of test_block
```

※One Point：ブロック引数を渡す時、＆がつければ、引数名は何でも大丈夫です。

## ブロックが渡されたか調べるには？
yieldを実行する時、ブロックが渡されるかどうかを確認することができます。
block_given?を使って、ブロックがあるかどうかを確認できます。

```ruby
def test_block
  # test_blockメソッドを定義する
  puts 'Start of method'
  yield if block_given?
  puts 'End of method'
end

test_block {puts 'In the block'}
```

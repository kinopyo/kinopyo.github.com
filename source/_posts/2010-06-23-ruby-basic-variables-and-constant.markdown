---
layout: post
title: 'Ruby Variables and Constants'
date: 2010-6-23
wordpress_id: 1184
permalink: /blog/ruby-basic-variables-and-constant
comments: true
categories: [nil]
---
## 変数
### 例1

```ruby
temperature = 34
puts temperature

```

### Rubyの変数名
Rubyではキャメルケースより、アンダースコアが好みだそうです。
例えば変数名page_transfer_managerはOKだけど、pageTransferManagerはNG。

### 予約語

{% blockquote >
__FILE__	def	in	self
__LINE__	defined?	module	super
BEGIN	do	next	then
END	else	nil	true
alias	elsif	not	undef
and	end	or	unless
begin	ensure	redo	until
break	false	rescue	when
case	for	retry	while
class	if	return	yield
<<

### Example2

```ruby
age = 99
puts "My age: " + String(age)
puts "My age: " + age.to_s
puts "My age: #{age} "

```

整数を文字列に変換することに注意してください。
ダブルクォーテーション内であれば任意の式を#{ }に入れることができます。

## Constants

```ruby
PI = 3.1415926535

```

コンスタントは大文字でスタートします。
これでRubyはコンスタントと認識してくれます。


# 中文
## 变量
### 声明例子1

```ruby
temperature = 34
puts temperature

```

### Ruby变量名
Ruby更常用下划线而非骆驼拼写法。
比如page_transfer_manager，但pageTransferManager却不常用。

### Reserved Word
以下变量名为Ruby所使用，无法用来定义自己的变量。
>>
__FILE__	def	in	self
__LINE__	defined?	module	super
BEGIN	do	next	then
END	else	nil	true
alias	elsif	not	undef
and	end	or	unless
begin	ensure	redo	until
break	false	rescue	when
case	for	retry	while
class	if	return	yield
<<

### Example2

```ruby
age = 99
puts "My age: " + String(age)
puts "My age: " + age.to_s
puts "My age: #{age} "

```

注意要将integer转换为string.
在双引号""内，可以在#{和}之间放置任何表达式，
表达式的值会被转换为string显示。

## 常量

```ruby
PI = 3.1415926535

```

常量在Ruby里以大写字母开头。
通常习惯上常量的所有字符都是大写，
但只要开头是大写，Ruby便认为这是常量。

# English

## Variable
### Example1

```ruby
temperature = 34
puts temperature

```

### Ruby convention
To use underscores rather than "camel case" for multiple-word names.

page_transfer_manager is good, for example, but pageTransferManager is not.

### Reserved words

>}

__FILE__	def	in	self
__LINE__	defined?	module	super
BEGIN	do	next	then
END	else	nil	true
alias	elsif	not	undef
and	end	or	unless
begin	ensure	redo	until
break	false	rescue	when
case	for	retry	while
class	if	return	yield

{% endblockquote %}

### Example2

```ruby
age = 99
puts "My age: " + String(age)
puts "My age: " + age.to_s
puts "My age: #{age} "

```

Note that you need to convert the integer variable to string.
You can place any expression inside #{ and } in a double-quoted string
and have it interpolated into the text.

## Constants

```ruby
PI = 3.1415926535

```

Constants in Ruby start with an uppercase letter—that’s how Ruby
knows they are constants. In fact, the entire name of a constant is usually in uppercase. But it’s that first
letter that is crucial—it must be uppercase so that Ruby knows that you intend to create a constant.

---
layout: post
title: 'ruby: nil? empty? blank? どれも0をチェックしない'
date: 2011-10-18
wordpress_id: 2357
permalink: /blog/ruby-nil-empty-blank-none-check-0
comments: true
categories: ["Ruby"]
---
{% blockquote %}
よくつかうメソッドの nil? empty? blank? のまとめ。

nil? すべてのオブジェクトにある。nilのときにTrueを返す。
empty? 文字の長さが0のとき、配列が空のときにTrueを返す。

blank? railsの拡張。nil, "", " ", **, {} のいずれかでTrueを返す。
{% endblockquote %}

素晴らしいまとめですね！ootokageさんに感謝。

PHP使うときは*empty(0)</em>でtrueになりますが、上記のメソッドどれも0をチェックしないですね。。.<em>zero?*というのメソッドは一応あるようですが。

迷ったらここにいっぱいサンプルがあります。

{% blockquote %}
0.nil? #=> false
0.zero? #= true
0.empty? #=> NoMethodError
0.blank? #=> false
0 == false #=> false

"".nil? #=> false
"".zero? #=> NoMethodError
"".empty? #=> true
"".blank? #=> true
"" == false #=> false

{}.nil? #=> false
{}.zero? #=> NoMethodError
{}.empty? #=> true
{}.blank? #=> true
{} == false #=> false

**.nil? #=> false
**.zero? #=> NoMethodError
**.empty? #=> true
**.blank? #=> true
** == false #=> false

nil.nil? #=> true
nil.zero? #=> NoMethodError
nil.empty? #=> NoMethodError
nil.blank? #=> true
nil == false #=> false

false.nil? #=> false
false.zero? #=> NoMethodError
false.empty? #=> NoMethodError
false.blank? #=> true
false == false #=> true
<<

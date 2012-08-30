---
layout: post
title: 'gitの^(caret)記号は'
date: 2011-10-26
wordpress_id: 2411
permalink: /blog/what-does-caret-character-mean-in-git
comments: true
categories: ["Git", "git"]
---
## HEAD^
{% blockquote http://progit.org/book/ch6-1.html#ancestry_references %}
If you place a ^ at the end of a reference, Git resolves it to mean the parent of that commit.

HEAD^, which means “the parent of HEAD”:
{% endblockquote %}

通常ケースで言うと*HEAD^*は一個前のコミット、*HEAD^^*は2つ前のコミットってことですね。他の書き方は*HEAD~2*、*HEAD~5*があります。

## HEAD^1、HEAD^2
これは上記と若干違ってmergeのコミットに対してのみ有効です。

マージの場合はparentが2つあるので、HEAD^1は今のブランチでのparent、HEAD\^2は取得先のparentを差してます。

---
layout: post
title: 'gitの^記号は'
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

通常ケースで言うと*HEAD^</em>は一個前のコミット、<em>HEAD^^</em>は2つ前のコミットってことですね。他の書き方は<em>HEAD~2</em>、<em>HEAD~5*があります。

## HEAD^1、HEAD^2
これは上記と若干違って*merge</em>のコミットに対してのみ有効です。マージの場合はparentが2つあるので、<em>HEAD^1</em>は今のブランチでのparent、<em>HEAD^2*は取得先のparentを差してます。

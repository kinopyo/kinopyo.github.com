---
layout: post
title: 'zshでgitの^caretは使えないっぽい: zsh: no matches found: HEAD^'
date: 2011-10-26
wordpress_id: 2417
permalink: /blog/git-caret-does-not-work-in-zsh-no-matches-found
comments: true
categories: ["Git", "git", "zsh"]
---
[前回の記事：gitの^記号は*で*HEAD^</em>を書いたのですが、<em>zsh](http://www.kinopyo.com/blog/what-does-caret-character-mean-in-git)でやるとこんなエラーに。。

{% codeblock %}
zsh: no matches found: HEAD^
{% endcodeblock %}

何かzshで*^記号*は特別の意味があるらしいです。
参考：[http://stackoverflow.com/questions/6091827/git-show-head-doesnt-seem-to-be-working-is-this-normal](http://stackoverflow.com/questions/6091827/git-show-head-doesnt-seem-to-be-working-is-this-normal)

## 回避方法
2つあります。一つは同じ効果の*HEAD~1*を使う、もう一つはエスケープする方法です。
+  *HEAD~1*
+  *HEAD/^*

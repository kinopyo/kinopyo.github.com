---
layout: post
title: 'git reset --hardでミスった内容を取戻したいときはgit reflog'
date: 2011-10-26
wordpress_id: 2405
permalink: /blog/how-to-revert-git-reset-hard-miss-with-git-reflog
comments: true
categories: ["Git", "git", "git-reflog", "git-reset"]
---
例えば*git reset --hard HEAD^*で誤操作して内容を消してしまった、それを取戻したいときは
+   *git reflog*で取戻したいHEAD@{x}の番号を確認
+   *git reset --hard HEAD@{1}*で番号指定でもう一回git reset（ここでは例として1番にしてる）

reflogの定義は
{% blockquote  %}
a log of where your HEAD and branch references have been for the last few months.
{% endblockquote %}
いわば自分のローカルリポジトリのHEADが指していた情報を全部保存したログです。ブランチの切り替えやpull、コミットなどの情報が*ローカルで*保存されるんです。

* git log -g: </em>で<em>git log*のフォーマット（コミットログやコミット者の情報）で表示できます。

参考：
[http://d.hatena.ne.jp/idesaku/20091106/1257507849](http://d.hatena.ne.jp/idesaku/20091106/1257507849)
[http://progit.org/book/ch6-1.html#reflog_shortnames](http://progit.org/book/ch6-1.html#reflog_shortnames)

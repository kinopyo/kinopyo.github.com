---
layout: post
title: 'ターミナルコマンド：sudo'
date: 2010-11-29
wordpress_id: 1524
permalink: /blog/terminal-command-sudo
comments: true
categories: ["Linux", "環境構築"]
---
環境構築の記事でよく目にすると思いますが
このsudoコマンド。
気になってて調べてみたんです。

{% blockquote  %}
sudo is a Terminal command used to execute a command as another user, by default, the root user.
{% endblockquote %}

あるコマンドを別のユーザとして実行する、デフォルトではルートユーザ、だそうです。

例えばルートユーザとしてあるアプリを実行したい時は：

```
sudo open ....

```

---
layout: post
title: 'Linuxで新規ユーザ作成＆root権限付与のメモ書き'
date: 2011-9-1
wordpress_id: 2163
permalink: /blog/how-to-create-user-and-grant-root-privilege-in-linux
comments: true
categories: ["Linux"]
---
コメントでいろいろ書いてますが、root権限付与のところは多分個人の場合はそのままvisudoにユーザ名を追記して、会社の場合はグループを変更したほうが良さそうです。

{% gist 1073555  linux_create_user_modify_group.sh  %}

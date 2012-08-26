---
layout: post
title: 'Git コンフリクトになった場合の対処'
date: 2011-10-12
wordpress_id: 2342
permalink: /blog/git-what-to-do-when-merge-conflict
comments: true
categories: ["conflict", "Git", "git", "merge"]
---
git pullとかgit mergeでコンフリクトとなったファイルを編集して、git add、git commitすればいいです。コミットメッセージも必要です。
git mergetoolでビジュアルのDiffソフトで差分を見れたり修正したりできます。
￼
コミットログはこんな感じです。SVNとは違ってコミットログに残るのが何か慣れないです。
{% codeblock %}
$ git log --oneline
63bc3d1 fixed merge conflict
bbfdd9e edit in master
3dcfb2f edit in work
9eedc58 made a
{% endcodeblock %}

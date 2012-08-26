---
layout: post
title: 'TextMate Error: Exception raised during posting of notification'
date: 2011-6-4
wordpress_id: 1893
permalink: /blog/textmate-error-exception-raised-during-posting-of-notification
comments: true
categories: ["IDE", "Mac", "textmate"]
---
## 現象
Railscastsで紹介した[https://github.com/jezdez/textmate-missingdrawer](https://github.com/jezdez/textmate-missingdrawer)Project Drawerのプラグインをインストールした後に、ターミナルやTextMateのGUIでフォルダを開くときに画面が真っ白になる。ファイル一つ一つは開ける。

ターミナルで開いた時はこんなエラーを吐き出される：
{% codeblock %}
mate*19082:903] Exception raised during posting of notification.  Ignored.  exception: '[NOTE: this exception originated in the server.*
 -*NSCFArray objectAtIndex:]: index (1) beyond bounds (1)'  invoked observer method: '-[OakLaunchHelper didLaunchTextMate:*'  observer: 0x1128a0  notification name: 'NSWorkspaceDidLaunchApplicationNotification'
{% endcodeblock %}

## 原因
昔ProjectPlusというProject Drawerをインストールしたことがあり、どうやらその二つが衝突しているよう。

## 対策
~/Library/Application Support/TextMate/Plugins/ProjectPlus.tmpluginを削除

参考：[http://ticket.macromates.com/show?ticket_id=188F672C](http://ticket.macromates.com/show?ticket_id=188F672C)

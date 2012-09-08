---
layout: post
title: 'Evernote x Mac: Cant synchronize error, Content is not valid.'
date: 2011-4-18
wordpress_id: 1687
permalink: /blog/evernote-x-mac-cant-synchronize-error-content-is-not-valid
comments: true
categories: ["evernote", "troubleshooting", "tool"]
---
なぜかMac Evernoteクライアントの同期で表題のようなエラーとなりました。
So I encountered this problem when I synced my evernote in Mac OS.

{% blockquote  %}
Can't synchronize error, Content is not valid.
{% endblockquote %}

I googled and found this in the evernote support forum.
{% blockquote %}
One of the Ruby gems replaces the built-in 'tidy' command in OS X (/usr/bin/tidy) with a broken script in the same location. You need to restore the original /usr/bin/tidy command that comes with OS X.

On my 10.6.6 box, that command is 65072 bytes:

~ $ ls -al `which tidy`
 rwxr-xr-x 1 root wheel 65072 Aug 31 2010 /usr/bin/tidy

Once you've fixed that broken part of the OS, Evernote should work ok. You may also want to file a bug with the Ruby folks, who absolutely should not be replacing this file with their own.
{% endblockquote %}

It seems like that ruby gems in mac did a mess that replaced the /usr/bin/tidy command unintentionally.
So if your `tidy` file size does not match 65072 bytes, just copy on from other Mac OS, and chmod it.

# 日本語

なぜかMac Evernoteクライアントの同期で表題のようなエラーとなりました。

公式サイトのサポートでこんな回答を見つかったので共有します。
{% blockquote %}
One of the Ruby gems replaces the built-in 'tidy' command in OS X (/usr/bin/tidy) with a broken script in the same location. You need to restore the original /usr/bin/tidy command that comes with OS X.

On my 10.6.6 box, that command is 65072 bytes:

~ $ ls -al `which tidy`
 rwxr-xr-x 1 root wheel 65072 Aug 31 2010 /usr/bin/tidy

Once you've fixed that broken part of the OS, Evernote should work ok. You may also want to file a bug with the Ruby folks, who absolutely should not be replacing this file with their own.
{% endblockquote %}

MacのRuby gemsが勝手に`/usr/bin/tidy`コマンドをリプレースしてしまったそうです。

```
~ $ ls -al `which tidy`
+  rwxr-xr-x 1 root wheel 65072 Aug 31 2010 /usr/bin/tidy

```
上記の65072バイトサイズが正しいです。
もしサイズが異なるなら他のMacでそのファイルをコピーしてきて、
chmodで他のファイルと同じ権限にしなければいけませんよ。

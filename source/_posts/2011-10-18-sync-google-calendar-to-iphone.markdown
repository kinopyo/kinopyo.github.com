---
layout: post
title: 'GoogleカレンダーとiPhoneカレンダーの同期'
date: 2011-10-18
wordpress_id: 2356
permalink: /blog/sync-google-calendar-to-iphone
comments: true
categories: ["google calendar", "iPad", "ipad", "iPhone"]
---
この記事で紹介するのはGoogle Appsのアカウント（多くの場合は会社で使うGoogleアカウント：yourname@yourcompany.comのような）のカレンダーをiPhoneに同期する方法です。

## 手順
(英語の環境設定です)
+Settingsアプリの"Mail, Contacts, Calendars"を開く
+Add Account...でOther、Add CalDAV Account
+アカウント情報を入力
	-Server: google.com
	-Username: yourname@yourcompany.com (ここでフルのメアドを入力してください)
	-Password: 上記アカウントのパスワード
	-Description: 適当に

もし接続にSSLが必要であればダイアログが出るので、そのまま「OK」を押せばOKです。
成功すれば"Mail, Contacts, Calendars"にDescriptionで入力したアイテムが表示され、灰色で「Calendars」と表記されるはずです。

## 普通のGoogleアカウント
普通のGoogleアカウントならカレンダーをiPhone、iPadに同期するのは比較的に簡単だと思います。iOSの"Mail, Contacts, Calendar"設定でGoogleのアカウントを追加し、CalendarsをONに設定すればできるんですね。

## 参考
[http://www.google.com/support/mobile/bin/answer.py?answer=151674](http://www.google.com/support/mobile/bin/answer.py?answer=151674)

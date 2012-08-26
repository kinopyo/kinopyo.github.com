---
layout: post
title: 'Mac Tweetアプリインストール後右クリックメニューの「Tweet」を消す方法'
date: 2011-11-18
wordpress_id: 2514
permalink: /blog/how-to-disable-tweet-item-in-right-click-menu
comments: true
categories: ["Mac", "osx", "twitter"]
---
MacのTweet公式アプリをインストール後、テキストを選択状態で右クリックするとメニューに「Tweet」が出てきますね。個人的には使わないのでそれを消す方法をシェアします。

{% img http://www.kinopyo.com/blog/wp-content/uploads/2011/11/Tweet-in-right-click-menu.jpg Tweet in right click menu %}

これはOS Xの*Services</em>として登録されます。どのServicesをON/OFFにするかはSystem PreferencesのKeyboardで設定できます。今回の話だと<em>File and Folders</em>で<em>Tweet*のチェックボックスを外せばOKです。

{% img http://www.kinopyo.com/blog/wp-content/uploads/2011/11/uncheck-tweet-services.jpg uncheck tweet services %}

UPDATE:
*Open as Twitter Username*も消すべきでした。

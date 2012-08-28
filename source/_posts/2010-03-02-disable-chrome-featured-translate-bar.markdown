---
layout: post
title: 'Chromeの内蔵翻訳ツールバーを無効にする方法'
date: 2010-3-2
wordpress_id: 1014
permalink: /blog/disable-chrome-featured-translate-bar
comments: true
categories: [nil]
---
すべての言語でAutomatic Translationを無効にしたい人のために。

+  C:\Users\（ユーザ名）\AppData\Local\Google\Chrome\User Data\Defaultへアクセスします。
	-WinXPはC:\Documents and Settings\（ユーザ名）\Local Settings\Application Data\Google\Chrome\User Data\Default
+  「Preferences」ってファイルがあります。

+  「translate」で検索すると、最後あたりでこのような文字列があるはずです。
{% img http://www.kinopyo.com/wp-content/uploads/2010/03/chrome_preference.jpg chrome_preference %}

+  translate_language_blacklistを、以下コードに書き換える。

```plain
"translate_language_blacklist": * "en", "de", "zh-TW", "it", "af", "sq", "ar", "be", "bg", "ca", "zh-CN", "hr", "cs", "da", "nl", "et", "tl", "fi", "fr", "gl", "el", "he", "hi", "hu", "is", "ja", "ko", "lv", "lt", "mk", "ms", "mt", "no", "fa", "pl", "pt", "ro", "ru", "sr", "sk", "sl", "es", "sw", "sv", "th", "tr", "uk", "vi", "cy", "yi" *,

```

+  修正完了
{% img http://www.kinopyo.com/wp-content/uploads/2010/03/chrome_preference_modified.jpg chrome_preference_modified %}


---
layout: post
title: 'TextMateをLionのフルスクリーンに'
date: 2011-8-16
wordpress_id: 2100
permalink: /blog/turn-textmate-to-lion-full-screen
comments: true
categories: ["Mac", "textmate", "TextMate", "環境構築"]
---
```bash
git clone https://github.com/enormego/EGOTextMateFullScreen.git /tmp/EGOTextMateFullScreen

xcodebuild -project /tmp/EGOTextMateFullScreen/EGOTextMateFullScreen.xcodeproj -target EGOTextMateFullScreen

cp -R /tmp/EGOTextMateFullScreen/build/Release/EGOTextMateFullScreen.tmplugin ~/Library/Application\ Support/TextMate/PlugIns

# after installed
rm -rf /tmp/EGOTextMateFullScreen/
```

これが完成図！

![Textmate Fullscreen](http://www.kinopyo.com/wp-content/uploads/2011/08/textmate_fullscreen.jpg)
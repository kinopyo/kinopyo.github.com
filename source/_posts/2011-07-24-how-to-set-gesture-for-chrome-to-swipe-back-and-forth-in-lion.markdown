---
layout: post
title: '【更新】Mac Lion: Chromeのページ遷移back/forwardするジェスチャー設定'
date: 2011-7-24
wordpress_id: 2027
permalink: /blog/how-to-set-gesture-for-chrome-to-swipe-back-and-forth-in-lion
comments: true
categories: ["Chrome", "Lion", "Mac"]
---
# 2011/09/30更新
現時点の最新版(15.0.874.54 beta)のChromeに更新したらTrackpadでは2本指スワイプ、MagicMouseでは1本指スワイプでページのBack/Forward遷移できるようになりました！もうBetterTouchToolに頼らなくてもいいですよ〜
<hr/>

Lionにアップグレードして、新しいジェスチャーをONにしたらChromeでの2本/3本指での左右スワイプによるブラウザのback/forwardのページ遷移が効かなくなりました。少し調べたので、その結果をまとめます。

## 1. Three finger dragを使わない前提
このThree finger dragは自分は大好きですが、もしこれを使わない方でしたら解決は速いです。
システム設定のトラックパッドを開き、More Gestureタブの<strong>Swipe between pages</strong>のジェスチャーを3本指或いは2本/3本指に設定。
{% img http://www.kinopyo.com/wp-content/uploads/2011/07/swipe_between_pages.jpg swipe_between_pages %}

これでChromeで3本指左右スワイプが効きます。2本指はまだ認識できないっぽいですが、Safariではどっちでもうまく対応できてしかもアニメーションでページ遷移ができます。

こうすればThree finger dragは自動でオフになります。
{% img http://www.kinopyo.com/wp-content/uploads/2011/07/Three_finger_drag_off.jpg Three_finger_drag_off %}

## 2. Three finger dragも使いたいならBetterTouchToolを使う
BetterTouchToolでこのようにChrome専用のジェスチャーを設定します。
{% img http://www.kinopyo.com/wp-content/uploads/2011/07/BetterTouchTool.jpg BetterTouchTool %}

2本指のスワイプのアクションを⌘(Command) + {と⌘(Command) + }に設定します。これはChromeでのページ遷移のショットカットキーです。実際使ってみたら使い心地はあまりよくないですが。。

他のジェスチャー設定は[MacをLionにアップグレードして最初に設定したのはトラックパッド](http://www.kinopyo.com/blog/setup-trackpad-after-upgrade-to-lion)を御覧ください。
BetterTouchToolはトラックパッドを便利にするためのツールです。詳しい使い方はこの記事[http://nori510.com/archives/4208](http://nori510.com/archives/4208)を参考してください。

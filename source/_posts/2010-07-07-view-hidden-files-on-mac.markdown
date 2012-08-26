---
layout: post
title: 'Viewing hidden files on a Mac'
date: 2010-7-7
wordpress_id: 1249
permalink: /blog/view-hidden-files-on-mac
comments: true
categories: [nil]
---
Macではドット"."で始まるファイルやフォルダは隠しフォルダ、ファイルになるようです。
Finderで表示する方法を紹介します。
はるか昔のメモです。。


<ol>
	<li>ターミナルを開く(アプリケーション/ユーティリティ)</li>
	<li>下記コマンドを叩いてreturnキーを押して実行</li>

```plain
defaults write com.apple.finder AppleShowAllFiles -bool true

killall Finder

```
	<li>ログアウト、あるいはkillall Finderで効果が見れます</li>

</ol>


## 隠しファイルを非表示にするには
上記と全く同じ手順で、コマンドを書き換えます。

```plain
defaults write com.apple.finder AppleShowAllFiles -bool false

```


# 中文
## Mac下显示隐藏文件的方法。
一般由点"."开头的都是隐藏文件或文件夹，这些在Finder里面是看不到的，必须按以下方式才能使Finder显示隐藏文件。

<ol>
	<li>打开Terminal(Applications/Utilities)</li>
	<li>输入下面的命令，按return执行</li>

```plain
defaults write com.apple.finder AppleShowAllFiles -bool true

killall Finder

```
	<li>killall Finder就会使命令立即生效，此外强制结束Finder进程，或者登出都可以使命令生效</li>

</ol>


## 不显示隐藏文件的方法
和上面的步骤完全一样，只是敲的命令不一样。

```plain
defaults write com.apple.finder AppleShowAllFiles -bool false

```


# English

Viewing hidden files on a Mac is useful for accessing the hidden UNIX directories or for recovering Music from an iPod. Additionally, by prefixing the name of a folder with a '.', you can create a folder that is seemingly hidden from prying eyes.

## To view hidden folders:

  1. Open the Terminal (located in /Applications/Utilities/)
  2. At the command prompt type

```plain
defaults write com.apple.finder AppleShowAllFiles -bool true

```
  3. Press return to execute the command.
  4. For the changes to take effect, either log out then log back in again, or relaunch Finder (this can be done from the Force Quit Window or by typing 'killall Finder' in a Terminal window).

## To hide the hidden files again:

  1. Open the Terminal
  2. At the command prompt type

```plain
defaults write com.apple.finder AppleShowAllFiles -bool false

```
  3. then press return to execute the command.
  4. Log out then back in again, or relaunch Finder (explained above).

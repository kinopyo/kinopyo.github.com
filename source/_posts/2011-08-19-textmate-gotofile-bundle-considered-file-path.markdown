---
layout: post
title: 'TextMate ファイルパスが効くGoToFile Bundle'
date: 2011-8-19
wordpress_id: 2124
permalink: /blog/textmate-gotofile-bundle-considered-file-path
comments: true
categories: ["Mac", "textmate", "TextMate", "Tips"]
---
## 従来の⌘T(Command + T)Go to Fileの問題：パスが効かない
⌘TはTextMateで速やかにファイルを開ける機能ですが、例えばこんなファイルがあるとします。
	-blogs/index.html.erb
	-posts/index.html.erb
	-categories/index.html.erb
	-tags/index.html.erb
	-users/index.html.erb

で⌘Tで"blogs/index"を叩くと何も表示されない、つまりパスが効かないのが一番の問題です。それを解消するのが[gotofile.tmbundle](https://github.com/stevenchanin/gotofile.tmbundle)

## インストール
{% codeblock %}cd ~/Library/Application\ Support/TextMate/Bundles/
git clone git://github.com/stevenchanin/gotofile.tmbundle.git GoToFile.tmbundle{% endcodeblock %}
で、textmateを再起動

## 使い方
<strong>⇧⌘K ( Command + Shift + K )</strong>で新しいGo To Fileダイアログを開いて"ar/in"を叩くことでarticles/index.htmlが選択されます！
<a href="http://www.kinopyo.com/wp-content/uploads/2011/08/Go-To-File-Textmate-Bundle.png"><img class="alignnone size-medium wp-image-2126" title="Go To File Textmate Bundle" src="http://www.kinopyo.com/wp-content/uploads/2011/08/Go-To-File-Textmate-Bundle-300x273.png" alt="" width="300" height="273" /></a>

他にもspaceキーでQuickLookモードでファイルを見たり、⌥(option)キーでデフォルトのアプリでファイルを開いたり、⇧(shift)キーでフォーカスに選択したファイルのパスを入力することができます。

## 参考
[http://how-i-work.com/workbenches/2-keyboard-based-no-mouse-rails-development-with-textmate](http://how-i-work.com/workbenches/2-keyboard-based-no-mouse-rails-development-with-textmate)

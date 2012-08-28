---
layout: post
title: 'TextMate Auto-refresh your browsers when saving file in Textmate'
date: 2011-10-12
wordpress_id: 2325
permalink: /blog/textmate-auto-refresh-browers-when-saving-file
comments: true
categories: ["Chrome", "editor", "safari", "textmate", "TextMate", "Tips"]
---
## Overview

This is a tip to auto refresh your browser(s) when you hit Command + S(means saving file) in Textmate.

## Steps
Open Bundle Editor, look for HTML, there will be a snippet called 'Refresh Running Browser(s)'.

The code in the right side is very easy to understand. First it checks if one browser is opened, if yes, refresh it. By default it supports all the major browsers.

{% img http://www.kinopyo.com/wp-content/uploads/2011/10/Bundle-Editor-Refresh-Running-Browsers-450x325.jpg Bundle Editor Refresh Running Browsers %}

**Set the Activation Key Equivalent to Command + S, and delete those file type in Scope Selector.**
This way when you hit Command + S, text mate will save the file first and refresh all your opened browser.

If you want to just refresh a specific browser, like Safari, you can copy the snippet related to your browser.
Below is a sample for Safari.

{% img http://www.kinopyo.com/wp-content/uploads/2011/10/Textmate-auto-refresh-safari-450x334.png Textmate auto refresh safari %}

# 日本語

## 目的
Textmateでファイルを保存（Command + S）したら自動でブラウザをリフレッシュしてくれる。

## 手順
Bundle Editorを開いて、HTMLのセクションの中の「Refresh Running Browser(s)」をクリックします。

右側のコードはわかりやすいです。まずそのブラウザが起動しているかをチェックして、リフレッシュします。デフォルトではFirefox、ChromeやSafariなど全部対応しています。

{% img http://www.kinopyo.com/wp-content/uploads/2011/10/Bundle-Editor-Refresh-Running-Browsers-450x325.jpg Bundle Editor Refresh Running Browsers %}

**Activation Key EquivalentをCommand + Sに変更して下のScope Selectorを空にします**
これでCommand + Sでファイルを保存した場合起動中のブラウザは全部リフレッシュされるはずです。

もし特定のブラウザだけリフレッシュしたい場合は、コピペーで新規にSnippetを作成し、該当のブラウザのコードだけを貼ればいいです。以下はSafariの例です。

{% img http://www.kinopyo.com/wp-content/uploads/2011/10/Textmate-auto-refresh-safari-450x334.png Textmate auto refresh safari %}
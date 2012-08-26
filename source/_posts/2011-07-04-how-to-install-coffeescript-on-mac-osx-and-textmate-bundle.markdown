---
layout: post
title: 'coffee-scriptのインストール、TextMate Bundleで実行(Mac OS X)'
date: 2011-7-4
wordpress_id: 1984
permalink: /blog/how-to-install-coffeescript-on-mac-osx-and-textmate-bundle
comments: true
categories: ["CoffeeScript", "JavaScript", "macport", "nodejs", "環境構築"]
---
coffee-scriptをMacportsを使ってインストールし、TextMateのcoffee-script bundleでコンパイルするメモです。
注意すべきなのはたとえターミナルでcoffeeが実行できても、TextMateはPATHをインクルードしないので(インクルードしているのは/usr/binらしい)、/usr/binにcoffeeのシンボリックを作る必要があります。
またcoffee-scriptをコンパイルするにはnodejsとnpm(Node Package Manager)が前提条件となるため、それらのインストールも必要です。

{% gist 1062397 %}

これでtextmateでcommand + Bでコンパイル後のJavascriptが表示できるようになります！

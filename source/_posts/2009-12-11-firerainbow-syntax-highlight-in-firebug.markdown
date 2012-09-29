---
layout: post
title: 'FireRainbow - FirebugのJavaScriptをシンタクスハイライト'
date: 2009-12-11
wordpress_id: 482
permalink: /blog/firerainbow-syntax-highlight-in-firebug
comments: true
categories: Javascript
---
FirebugのJavaScript、HTML、CSSをシンタクスハイライトするアドオンです。

{% img http://kinopyo.com/wp-content/uploads/2009/12/firerainbow-mainshot-full1.png firewindow %}

## ダウンロード
[FireRainbow Download](https://addons.mozilla.org/en-US/firefox/addon/9603)

## 機能概要

> - Mixed syntax highlighting powered by CodeMirror
>   - Javascript
>   - HTML
>   - CSS
> - Advanced features:
>   - Color theme can be modified using Firebug's CSS panel
>   - Highlighting is applied incrementally (good performance)
>   - Color themes available on GitHub

## 追記
今まで使ったところブレークポイントが付けない不具合がありました。
不具合発生時、firebug内のソースがハイライトしてないので疑いがあると判断し、
いったんマウスホイルを一回回すとソースはハイライトされブレークポイントもつけるようになりました。
これで一応回避できます。

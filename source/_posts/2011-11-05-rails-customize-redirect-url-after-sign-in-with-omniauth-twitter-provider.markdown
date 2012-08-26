---
layout: post
title: 'Rails OmniauthでTwitter認証ログイン後のcallback urlをカスタマイズ'
date: 2011-11-5
wordpress_id: 2454
permalink: /blog/rails-customize-redirect-url-after-sign-in-with-omniauth-twitter-provider
comments: true
categories: ["omniauth", "rails", "redirect", "Ruby", "twitter"]
---
## 目的
OmniauthでTwitterに認証ログイン後、ログイン前と同じページにリダイレクトしたい

## 方法
*gist id=819806*

libディレクトリのautoloadは[Rails libディレクトリのファイルをautoload](http://www.kinopyo.com/blog/rails-autoload-lib-directory-file)を参考してください。

## 解説
*redirect_to*パラメータ或いはrefererをログイン直前のリクエストから取ってセッションに保存するRack middwareの手法です。そしてsessions_controllerではセッション内に保存されたurlにリダイレクトし、セッションクリアしています。

もちろんTwitter以外のproviderでの認証＆ログイン処理にも対応できます。

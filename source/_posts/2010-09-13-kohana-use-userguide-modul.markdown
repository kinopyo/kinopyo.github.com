---
layout: post
title: 'kohana userguideモジュールを利用する'
date: 2010-9-13
wordpress_id: 1411
permalink: /blog/kohana-use-userguide-modul
comments: true
categories: ["php", "PHP"]
---
kohanaというphpフレームワークを触り始めました。MVCパターンなのでいろんなところで結構Railsと似ていますが、コード量が明らかにRailsより多くてまだ慣れてません。さすがにRailsやってから他の言語やフレームワークを触るとキツイです。

kohanaにはデフォルトでmodulesにuserguideが付いてます。ローカルでもガイドのドキュメントやAPIを参照できるため結構便利です。

## userguideモジュールをアクティブする方法
bootstrap.phpの中に'userguide'を検索してコメントアウトします。

## アクセスURL
例えばbase_urlが'myapp'の場合は：
http://localhost/myapp/userguide/docs
になります。

内容としては公式サイトの[http://kohanaframework.org/guide/about.kohana](http://kohanaframework.org/guide/about.kohana)と同じになります。

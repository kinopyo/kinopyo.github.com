---
layout: post
title: 'Rails3.1 Production環境で画像が表示されない、HTTP Statusは200成功なのに'
date: 2011-9-24
wordpress_id: 2271
permalink: /blog/rails31-image-do-not-show-in-production-while-http-status-code-is-200
comments: true
categories: ["Asset Pipeline", "Capistrano", "rails3.1", "Ruby", "troubleshooting"]
---
## 現象
Railsを-e productionで立ち上がるとき、或いはcapistrano本番サーバにデプロイしてアクセスする時に、HTTPのStatusは200なのに画像などが表示されない。JavascriptとCSSは問題ない。
発生バージョンはRails 3.1。

## 解決策
app/tmp/cacheを削除し、rake assets:precompileをもう一回実行。
ブラウザキャッシュを消してリロード。

## 調査経緯
assets周りの設定やfingerprint(MD5のハッシュ値)の比較など全部チェックしましたが、全然ダメでした。
最後はgithubの<a href="https://gist.github.com/rails/rails/issues/2299" title="このスレ" target="_blank">このスレ</a>の方法で解決になりました。

問題となったrails applicationはRails 3.1.rc1から作っていたもので、そのままrc4, rc5, stableに更新してきました。githubで議論されたのはrc4からrc5になったときにこのような現象があったようです。恐らくtmp/cacheが変な動きをして手動で削除しない限り古いバージョンのものがずっと残されたかもしれません。

## おまけ
Asset Pipelineの周りの設定ファイルを一応貼っておきます。

{% gist 1239153 %}

Githubでのスレ：[https://gist.github.com/rails/rails/issues/2299](https://gist.github.com/rails/rails/issues/2299)

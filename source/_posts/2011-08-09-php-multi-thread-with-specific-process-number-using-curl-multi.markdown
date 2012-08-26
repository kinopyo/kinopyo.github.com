---
layout: post
title: 'PHP プロセス数を指定して実行するマルチスレッド処理(curl_multi)'
date: 2011-8-9
wordpress_id: 2075
permalink: /blog/php-multi-thread-with-specific-process-number-using-curl-multi
comments: true
categories: ["PHP", "php", "Snippet"]
---
curl_multi系を使って、プロセス数を指定して実行するマルチスレッド処理です。

urlは配列で受け取って、もし指定したプロセス数より多い場合は分割して実行するようになってます。

このサンプルコードではこのブログの幾つかのurlに対してtitleを取得しました。

{% gist 1073555 multi-process-exec.php %}

参考：[PHPでマルチスレッド(バックグラウンド処理)を実現する方法](http://techblog.ecstudio.jp/tech-tips/php-multi.html)

---
layout: post
title: 'Nokogiriでhttpsプロトコールのコンテンツを取得'
date: 2011-6-27
wordpress_id: 1959
permalink: /blog/get-https-contents-with-nokogiri
comments: true
categories: ["https", "nokogiri", "Ruby"]
---
Nokogiriでurlをparseするときは普通こんなコードになります。

```ruby
doc = Nokogiri::HTML(open('http://example.com/'))

```

しかし接続先のプロトコールがhttpsの場合はNo such file or directoryのエラーとなります。
一旦net/httpsで取ってからそれをnokogiriでparseするような工夫が必要です。

*gist id=1037492*

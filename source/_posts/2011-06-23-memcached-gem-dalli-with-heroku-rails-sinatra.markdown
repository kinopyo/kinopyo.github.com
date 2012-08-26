---
layout: post
title: 'HerokuとRails,Sinatraで使えるMemcached Gem Dalli'
date: 2011-6-23
wordpress_id: 1950
permalink: /blog/memcached-gem-dalli-with-heroku-rails-sinatra
comments: true
categories: ["heroku", "memcached", "Ruby", "sinatra"]
---
昨日の記事[http://www.kinopyo.com/blog/a-sintra-app-to-grab-funny-images-from-a-github-thread](http://www.kinopyo.com/blog/a-sintra-app-to-grab-funny-images-from-a-github-thread)にも簡単に述べましたが、DalliはHerokuでお勧められているMemcachedのGemです。正確にはpure ruby memcache-clientです。

インストールと使い方をGistで公開しています。

{% gist 1039656 %}

参考サイト：
[http://devcenter.heroku.com/articles/memcache](http://devcenter.heroku.com/articles/memcache)
[https://github.com/mperham/dalli](https://github.com/mperham/dalli)

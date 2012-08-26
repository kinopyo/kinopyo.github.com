---
layout: post
title: 'Railsでcustom log(file)の作り方'
date: 2011-10-12
wordpress_id: 2322
permalink: /blog/rails-custom-log-file
comments: true
categories: ["log", "rails", "Ruby"]
---
## Overview
rails serverで起動する時に盛りだくさんの情報がログに出力されるので、別ファイルで自分がデバッグしたい情報だけをそこに出力する方法です。この方法でtail -f log/custom.logで監視できます

## ソースコード
*gist id=1278448*


## 参考
[http://robaldred.co.uk/2009/01/custom-log-files-for-your-ruby-on-rails-applications/](http://robaldred.co.uk/2009/01/custom-log-files-for-your-ruby-on-rails-applications/)
[http://ianma.wordpress.com/2009/04/08/custom-logging-in-ruby-on-rails/](http://ianma.wordpress.com/2009/04/08/custom-logging-in-ruby-on-rails/)

---
layout: post
title: "Run rails server as production"
date: 2012-10-09 15:21
comments: true
categories: Rails
---

## Short note
- rake assets:precompile
- config.serve_static_assets = true # on production.rb
- rails s -e production

That's all.

## config.serve_static_assets

When you run `rake middleware` you'll see `use ActionDispatch::Static` in the development mode but not in production mode.

In normal case, you should not set that to `true` unless for trying production mode on local machine. As the comment on the source code suggested:

> Disable Rails's static asset server (Apache or nginx will already do this)


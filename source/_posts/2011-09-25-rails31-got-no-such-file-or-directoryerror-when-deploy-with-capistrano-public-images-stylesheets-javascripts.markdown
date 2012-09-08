---
layout: post
title: 'Rails3.1 Capistranoでデプロイする時にpublic/images, stylesheets, javascriptsのNo such file or directoryエラー'
date: 2011-9-25
wordpress_id: 2275
permalink: /blog/rails31-got-no-such-file-or-directoryerror-when-deploy-with-capistrano-public-images-stylesheets-javascripts
comments: true
categories: ["Capistrano", "rails3.1", "Ruby", "troubleshooting"]
---
自分のログは無くしたので@yuum3のログを引用させて頂きます。
{% blockquote %}
  #  executing "find /home/rails_apps/todo31/releases/20110912141706/public/images /home/rails_apps/todo31/releases/20110912141706/public/stylesheets /home/rails_apps/todo31/releases/20110912141706/public/javascripts -exec touch -t 201109121417.06 {} ';'; true"
    servers: *"176.32.95.168"*
    *176.32.95.168* executing command
###  *err :: 176.32.95.168* find:
###  *err :: 176.32.95.168* `/home/rails_apps/todo31/releases/20110912141706/public/images'
###  *err :: 176.32.95.168* : No such file or directory
###  *err :: 176.32.95.168*
###  *err :: 176.32.95.168* find:
###  *err :: 176.32.95.168* `/home/rails_apps/todo31/releases/20110912141706/public/stylesheets'
###  *err :: 176.32.95.168* : No such file or directory
###  *err :: 176.32.95.168*
###  *err :: 176.32.95.168* find:
###  *err :: 176.32.95.168* `/home/rails_apps/todo31/releases/20110912141706/public/javascripts'
###  *err :: 176.32.95.168* : No such file or directory
###  *err :: 176.32.95.168*
{% endblockquote %}

<a href="https://github.com/capistrano/capistrano/issues/79#issuecomment-1767135" title="Githubにも載ってました。" target="_blank">Githubにも載ってました</a>エラーは無視しても大丈夫そうですが、下記の一行をdeploy.rbに追記すればエラー出なくなります。

```ruby
# in config/deploy.rb
set :normalize_asset_timestamps, false

```

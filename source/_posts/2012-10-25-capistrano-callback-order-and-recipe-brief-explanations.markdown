---
layout: post
title: "Capistrano Callback Order and Recipe Brief Explanations"
date: 2012-10-25 00:50
comments: true
categories: Rails Capistrano
---

I'm not familiar with `capistrano` at all, I kind of use it in daily base  but what I'm capable of is just the one major command: `ca deploy`, heh that's all I got.

## Capistrano Callback Order ##

If you like me always get confused by the callback orders, image is really gonna help you out.

![](http://cdn.kinopyo.com/images/Capistrano%20Execution%20Path.jpeg)

## Capistrano Task explanation ##

[Capistrano recipes: deploy](http://capitate.rubyforge.org/recipes/deploy.html) is brief explanations of each task, same in the source code I think, highly recommend you go through them once.

Another good resource is [capistrano recipes source code](https://github.com/capistrano/capistrano/blob/master/lib/capistrano/recipes/deploy.rb)

```ruby
task :update do
  transaction do
    update_code
    create_symlink
  end
end
```

Like this `:update` task is easy to guess: run `update_code` and `create_symlink` in a transaction.
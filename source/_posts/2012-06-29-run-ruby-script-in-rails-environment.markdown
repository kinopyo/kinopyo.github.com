---
layout: post
title: "Run Ruby Script in Rails Environment"
date: 2012-06-29 18:04
comments: true
categories: [rails, script]
---

## Overview

If you wanna execute some ruby code in rails environment, say manipulate w/ model or something, you can always try `rake task` first. But there're circumstances you don't want to use it, maybe it's just a one-time script that you don't want to save it to git, or whatever.

I've found out there're two simple ways to accomplish it.

## require config/environment.rb

```ruby
# test.rb
require "config/environment"
p User.first

# in terminal
ruby test.rb
```

## use rails runner

[Rails Guides about rails runner](http://guides.rubyonrails.org/command_line.html#rails-runner)

> runner runs Ruby code in the context of Rails non-interactively. For instance:

```ruby
rails runner "p User.first"
rails runner some_ruby_script.rb
rails runner -e staging "Model.long_running_method"
rails runner -h
```

> You can also use the alias “r” to invoke the runner: `rails r`.

I failed to call `rails r` on Rails 3.0.10, maybe it's above 3.1+.
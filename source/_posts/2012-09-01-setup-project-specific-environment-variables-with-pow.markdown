---
layout: post
title: "Set Project Specific Environment Variables with Pow"
date: 2012-09-01 21:56
comments: true
categories: ["Rails", "Pow"]
---

In your rails app, when you need an envionment variable like `ENV['TWITTER_CONSUMER_KEY']` for local deveopment, where do you put them? Simply set them before you start your rails server as a one time thing, or just put them under ~/.profile or ~/.zshrc?

Well it works but I'm not happy with that. Because first it belongs to a specific project and expose them to global env make me feel a little bit uncomfortable, second, what if you happend to have more than one twitter integrated app, how do you name the variables to solve naming collision?

If you're using [Pow](http://pow.cx), there is a perfect solution for you.

## .powrc and .powenv ##

Pow provides these 2 files for you to config pow and setup any environment variables.

> Before an application boots, Pow attempts to execute two scripts — first .powrc, then .powenv — in the application's root. Any environment variables exported from these scripts are passed along to Rack.

Convention here is putting `.powrc` under git version control, and override or setup any project specific environment variables to `.powenv`.

## Let's do it ##

```diff .gitignore
+ .powenv
```

```ruby .powenv
export TWITTER_CONSUMER_KEY=foo
export TWITTER_CONSUMER_SECRET=bar
```

BTW, you must run this command to restart pow manually so these scripts will be loaded.

```
$ touch ~/.pow/restart.txt
```

[Pow Document: Customizing Environment Variables](http://pow.cx/manual.html#section_2.2)
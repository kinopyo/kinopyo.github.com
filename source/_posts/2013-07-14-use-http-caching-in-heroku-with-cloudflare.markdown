---
layout: post
title: "Use HTTP Caching in Heroku with Cloudflare"
date: 2013-07-14 08:51
comments: true
categories: Heroku, Cache
---

# TL;DR

- Heroku doesn’t provide HTTP caching by default
- Use CDN like [Cloudflare](http://www.cloudflare.com/) or [Amazon CloudFront](http://aws.amazon.com/cloudfront/)
  - Clouldflare has free plan, takes you less than 3 minutes to setup.

# HTTP Caching

Just a quick example of HTTP caching.

![HTTP caching example](http://cdn.kinopyo.com/images/http_caching_example.jpg)

You can really feel the difference after you enabled it. Since most of your static assets, like js, css and image files, are gonna use browser cache without hitting your rails application, the user experience is improved a lot.

In my hobboy project [quoty.me](http://quoty.me), user had to download the black colored background image(22k) every time they visit a page, so there was a time lag to notice the background changed from white to black, which bothered me a lot. And that was why I noticed the HTTP caching is not enabled in Heroku.

# Heroku's HTTP Caching

> Heroku doesn’t provide HTTP caching by default. In order to take advantage of HTTP caching, you’ll need to configure your application to set the appropriate HTTP cache control headers and use a content delivery network (CDN) or other external caching service.

I'm using cedar stack in Heroku, but I have to use "external"(oppose to add-ons or solutions provided by Heroku) stuff to make HTTP caching work.

I've also tried [Rack::Cache](http://rtomayko.github.io/rack-cache/) with Memcache but somehow it didn't work for me.

# Setup Cloudflare

This time I decided to give Cloudflare a try. It's free, easy to setup, and just work.

I'll cut off how to setup Cloudflare, as the tutorial in its website is realy excellent. Just go to [https://www.cloudflare.com/](https://www.cloudflare.com/) and follow the instructions, within 3-4 steps you're done.

The other thing you have to do is to update your nameserver to the one provided by Cloundflare, like "IAN.NS.CLOUDFLARE.COM". I'm using [GoDaddy](http://www.godaddy.com/) for my quoty.me domain, the link to setup nameserver looks like this.

![GoDaddy Nameserver setup link](http://cdn.kinopyo.com/images/godaddy_nameserver.jpg)

# Further Reading
- [HTTP Caching | Heroku Dev Center](https://devcenter.heroku.com/articles/http-caching)
[Increasing Application Performance with HTTP Cache Headers | Heroku Dev Center](https://devcenter.heroku.com/articles/increasing-application- -performance-with-http-cache-headers)
- [HTTP Caching in Ruby with Rails | Heroku Dev Center](https://devcenter.heroku.com/articles/http-caching-ruby-rails)
- [#321 HTTP Caching (pro) - RailsCasts](http://railscasts.com/episodes/321-http-caching)
- [RailsLab Scaling Rails: Episode #11 - Advanced HTTP Caching](http://www.bestechvideos.com/2009/03/21/railslab-scaling-rails-episode-11-- advanced-http-caching)

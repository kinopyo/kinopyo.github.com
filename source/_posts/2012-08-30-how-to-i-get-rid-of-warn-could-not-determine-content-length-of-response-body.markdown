---
layout: post
title: How to I get rid of "WARN Could not determine content-length of response body"
date: 2012-08-30 19:51
comments: true
categories: rails
---

If you get these warning messages in your rails log, just simply put `thin` to your Gemfile.

```
WARN  Could not determine content-length of response body. Set content-length of the response or set Response#chunked = true
```

```ruby Gemfile
gem 'thin'
```

I found this from this stackoverflow [question](http://stackoverflow.com/questions/7082364/what-does-warn-could-not-determine-content-length-of-response-body-mean-and-h)
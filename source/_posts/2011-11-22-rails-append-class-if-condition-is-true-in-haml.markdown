---
layout: post
title: 'Rails Append class if condition is true in Haml'
date: 2011-11-22
wordpress_id: 2528
permalink: /blog/rails-append-class-if-condition-is-true-in-haml
comments: true
categories: ["haml", "rails"]
---

{% tweet http://twitter.com/#!/fantasyday/status/138923631433625600 %}

```ruby
.post{ :class => ('gray' unless post.published?) }
```

HAMLである条件がtrueの時だけあるclassをタグに追加したい場合。
---
layout: post
title: "Upgrading to Rails 3.2 from 3.1"
date: 2012-08-23 12:55
comments: true
categories: rails
---

Yesterday I upgraded one of my old-pending-hobby projects to latest Rails version, which is 3.2.8 now. Since I have several other projects in old version, I'd like to keep a note for what I've done.


As you can see in my [commit](https://github.com/kinopyo/NumberStory/commit/a11ab75263f7f74f703b377891dd0c8665bf3da5), all you have to do is update the version in `Gemfile` and hit `bundle update` in your terminal.

```ruby Gemfile
gem 'rails', '3.2.0'

group :assets do
  gem 'sass-rails', "  ~> 3.2.3"
  gem 'coffee-rails', "~> 3.2.1"
  gem 'uglifier', '>= 1.0.3'
end
```

Then add new configuration to `development.rb` and `test.rb` environment file. That's all :)

```ruby config/environments/development.rb
  # Log the query plan for queries taking more than this (works
  # with SQLite, MySQL, and PostgreSQL)
  config.active_record.auto_explain_threshold_in_seconds = 0.5

  # Do not compress assets
  config.assets.compress = false
```
```diff config/environments/test.rb
-  # Allow pass debug_assets=true as a query parameter to load pages with unpackaged assets
-  config.assets.allow_debugging = true

+  # Raise exception on mass assignment protection for Active Record models
+  config.active_record.mass_assignment_sanitizer = :strict
```
---
layout: post
title: 'Error installing rails bundler requires RubyGems version >= 1.3.6'
date: 2011-3-7
wordpress_id: 1646
permalink: /blog/error-installing-rails-bundler-requires-rubygems-version-1-3-6
comments: true
categories: ["rails", "Ruby", "troubleshooting", "環境構築"]
---
sudo gem install railsでこんなエラーが出ちゃいました。

```
Error installing rails bundler requires RubyGems version >= 1.3.6

```

解決策は

```
sudo gem update --system

pdating RubyGems
Updating rubygems-update
Successfully installed rubygems-update-1.6.1
Updating RubyGems to 1.6.1
Installing RubyGems 1.6.1
RubyGems 1.6.1 installed

=== 1.6.1 / 2011-03-03

Bug Fixes:

#  Installation no longer fails when a dependency from a version that won't be
  installed is unsatisfied.
#  README.rdoc now shows how to file tickets and get help.  Pull Request #40 by
  Aaron Patterson.
#  Gem files are cached correctly again.  Patch #29051 by Mamoru Tasaka.
#  Tests now pass with non-022 umask.  Patch #29050 by Mamoru Tasaka.


------------------------------------------------------------------------------

RubyGems installed the following executables:
	/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/gem

```

を実行した後にsudo gem install railsでrailsをインストールすればOKです。

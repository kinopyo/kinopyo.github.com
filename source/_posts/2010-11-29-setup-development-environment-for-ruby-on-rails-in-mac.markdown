---
layout: post
title: '[更新]MacでRuby on Rails開発：環境構築から '
date: 2010-11-29
wordpress_id: 1527
permalink: /blog/setup-development-environment-for-ruby-on-rails-in-mac
comments: true
categories: ["Mac", "rails", "Ruby", "環境構築"]
---
MacにはデフォルトでRubyが入ってそうです。
ターミナルを開いてrails -vを叩いたらバージョン情報が出てきました。

```
ruby 1.8.7 (2009-06-08 patchlevel 173) *universal-darwin10.0*

```

そしてRubyだけじゃなくRailsも入ってましてびっくりしました。
すごいですねMacは。。。
て、railsのバージョンもrails -vで確認できますが、
デフォルトのバージョンは古いそうで下記のコマンドでアップグレードできます。

```
sudo gem update rails

```

するとこんなログ情報が出ます。

```
Updating installed gems
Updating rails
WARNING:  Installing to ~/.gem since /Library/Ruby/Gems/1.8 and
	  /usr/bin aren't both writable.
WARNING:  You don't have /Users/zolo/.gem/ruby/1.8/bin in your PATH,
	  gem executables will not run.
Successfully installed activesupport-2.3.8
Successfully installed activerecord-2.3.8
Successfully installed rack-1.1.0
Successfully installed actionpack-2.3.8
Successfully installed actionmailer-2.3.8
Successfully installed activeresource-2.3.8
Successfully installed rails-2.3.8
Gems updated: activesupport, activerecord, rack, actionpack, actionmailer, activeresource, rails
Installing ri documentation for activesupport-2.3.8...
Installing ri documentation for activerecord-2.3.8...
Installing ri documentation for rack-1.1.0...
Installing ri documentation for actionpack-2.3.8...
Installing ri documentation for actionmailer-2.3.8...
Installing ri documentation for activeresource-2.3.8...
Installing ri documentation for rails-2.3.8...
Installing RDoc documentation for activesupport-2.3.8...
Installing RDoc documentation for activerecord-2.3.8...
Installing RDoc documentation for rack-1.1.0...
Installing RDoc documentation for actionpack-2.3.8...
Installing RDoc documentation for actionmailer-2.3.8...
Installing RDoc documentation for activeresource-2.3.8...
Installing RDoc documentation for rails-2.3.8...

```

多少時間がかかります。
これでMacでのRuby開発の準備は完了です。

## 更新
gem update railsにsudoを付けないとこんなエラーが出るかも

```

WARNING:  Installing to ~/.gem since /Library/Ruby/Gems/1.8 and
	  /usr/bin aren't both writable.
WARNING:  You don't have /Users/paku-k/.gem/ruby/1.8/bin in your PATH,
	  gem executables will not run.
ERROR:  Error installing rails:
	bundler requires RubyGems version >= 1.3.6

```

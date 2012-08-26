---
layout: post
title: 'Linuxにsqlite3-ruby gemをインストール'
date: 2010-10-15
wordpress_id: 1480
permalink: /blog/install-sqlite3-ruby-gem-in-linux
comments: true
categories: ["Linux", "rails", "Ruby", "sqlite"]
---
## 経緯
何も考えずにGemfileにsqlite3を定義してbundleを流したらこんなエラーが出ました。
{% codeblock %}
$ gem install sqlite3-ruby
Building native extensions.  This could take a while...
ERROR:  Error installing sqlite3-ruby:
        ERROR: Failed to build gem native extension.

/home/user/.rvm/rubies/ruby-head/bin/ruby extconf.rb
checking for sqlite3.h... no
sqlite3.h is missing. Try 'port install sqlite3 +universal' or 'yum install sqlite3-devel'
###  extconf.rb failed ###
Could not create Makefile due to some reason, probably lack of
necessary libraries and/or headers.  Check the mkmf.log file for more
details.  You may need configuration options.

Provided configuration options:
        --with-opt-dir
        --without-opt-dir
        --with-opt-include
        --without-opt-include=${opt-dir}/include
        --with-opt-lib
        --without-opt-lib=${opt-dir}/lib
        --with-make-prog
        --without-make-prog
        --srcdir=.
        --curdir
        --ruby=/home/user/.rvm/rubies/ruby-head/bin/ruby
        --with-sqlite3-dir
        --without-sqlite3-dir
        --with-sqlite3-include
        --without-sqlite3-include=${sqlite3-dir}/include
        --with-sqlite3-lib
        --without-sqlite3-lib=${sqlite3-dir}/lib


Gem files will remain installed in /home/user/.rvm/gems/ruby-head/gems/sqlite3-ruby-1.3.0 for inspection.
Results logged to /home/user/.rvm/gems/ruby-head/gems/sqlite3-ruby-1.3.0/ext/sqlite3/gem_make.out
{% endcodeblock %}

キーのメッセージは「sqlite3.h is missing. Try 'port install sqlite3 +universal' or 'yum install sqlite3-devel'」なのでそのとおりコマンドを流しましたが、portはそのコマンドがないと、yumはsqlite3-develを見つからないと返事したんです。。。

なのでsqlite本家でソースをダウンロードしビルドしてインストールする必要があります。

## sqlite3のインストール
[http://www.sqlite.org/download.html](http://www.sqlite.org/download.html)からsqlite-amalgamation-x.x.x.tar.gz(この記事を書いてる時点では3.7.3)のTarballバージョンのファイルをダウンロードします。上から二番目のリンクです。

{% codeblock %}
$ wget http://www.sqlite.org/sqlite-amalgamation-3.7.3.tar.gz
$ tar vxzf sqlite-amalgamation-3.7.3.tar.gz
$ cd sqlite-amalgamation-3.7.3
$ ./configure --prefix=/usr/local
$ make
$ sudo make install
{% endcodeblock %}

## sqlite-ruby gemのインストール
後は普通にgem installでもいいしbundle installでもOKです。
{% codeblock %}
$ gem install sqlite3-ruby
{% endcodeblock %}

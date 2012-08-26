---
layout: post
title: 'Rspec Capybara_webkitを使ってjavascriptをテストする'
date: 2011-11-6
wordpress_id: 2457
permalink: /blog/test-javascript-spec-in-rspec-with-capybara-webkit
comments: true
categories: ["capybara", "rails", "rspec", "Ruby", "webkit"]
---
## Goal
ゴールと言うか目標はrspecのrequest(integration) testでjavascriptのテストをしたいです。が、いろいろハマってその問題と解決策を時間軸でメモしておきます。

*Capybara*についてはある程度知ってる前提です。

## javascriptのテストを書く
*:js => true*でrspecのintegration testでjavascriptを有効に設定できます。
例：
{% gist 1342538 example_spec_with_javascript_enalbed.rb %}

ただデフォルトではjavascriptをサポートしないので、このspecは失敗します。解決の鍵は*capybara driver*というものです。

## capybara_webkit driver
### なぜcapybara_webkit driver使う
{% blockquote https://github.com/jnicklas/capybara %}
Capybara ... currently comes with Rack::Test and Selenium support built in.

By default, Capybara uses the :rack_test driver, which is fast but does not support JavaScript. You can set up a different default driver for your features.

The capybara-webkit driver is for true headless testing. It uses QtWebKit to start a rendering engine process. It can execute JavaScript as well. It is significantly faster than drivers like Selenium since it does not load an entire browser.
{% endblockquote %}
のようにcapybaraは *Rack::Test</em>と<em>Selenium</em>のdriverがbuilt-inされて、デフォルトdriverは前者の:rack_testでjavascriptをサポートしないです。<em>Selenium</em>はサポートしますが、それよりも速いのが<em>capybara-webkit*なのでそれを採用しました。

## capybara_webkit driverをインストール
Gemfileにcapybara_webkitを追記、bundle installします。webkitはQTが必要なので、もしそれがないとbundle installで失敗(エラー)します。後はspec_helper.rbにdefault driverをwebkitに設定します。
{% gist 1342538  install_capybara_webkit.rb %}

これで最初のサンプルspecは通るはずです。

## データベースと絡んだテスト
上記のままだとデータベースと絡んだテストはまた失敗します。
例：
{% gist 1342538 js_test_combined_with_database.rb %}

自分で確認してみたら、テスト時に作成したデータはjavascriptのテストで使えないっぽいです。Railscastsの記事によりますと<strong>rspecのテストではデータベーストランザクションを使うが、それがselenium或いはwebkitでは使えない</strong>そうです。そのために*database_cleaner*というgemを使います。

## database_cleanerを使う
{% gist 1342538 use_database_cleaner_gem.rb %}

*config.use_transactional_fixtures*をfalseにした時点でもうテスト自体は通るはずですが、データはずっとそのまま残ってしまうんです。database_cleanerは名の通りデータベースをテスト前後で綺麗な状態に保つことができます。

これでもう環境面の設定は完了です！

## Resources
+  [capybara](https://github.com/jnicklas/capybara)
+  [install_homebrew](https://github.com/mxcl/homebrew/wiki/installation)
+  [install_QT](https://github.com/thoughtbot/capybara-webkit/wiki/Installing-QT)
+  [capybara_webkit_driver](https://github.com/thoughtbot/capybara-webkit)
+  [database_cleaner_gem](https://github.com/bmabey/database_cleaner)
+  [#257 Request Specs and Capybara](http://railscasts.com/episodes/257-request-specs-and-capybara)

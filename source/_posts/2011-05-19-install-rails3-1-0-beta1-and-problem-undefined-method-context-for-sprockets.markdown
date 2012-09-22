---
layout: post
title: 'Rails3.1.0 beta1のインストールと、undefined method context for #Sprockets::Environment:のトラブル'
date: 2011-5-19
wordpress_id: 1746
permalink: /blog/install-rails3-1-0-beta1-and-problem-undefined-method-context-for-sprockets
comments: true
categories: ["rails", "rails3.1", "Ruby"]
---
Rails3.1.0 beta1をインストールするときにあったトラブルです。

## インストール

```
// 3.1.0 betaに更新
sudo gem install rails --pre

// バージョン確認
rails -v

// ダミープロジェクト作成
rails new railsfoo

// 必要なGemをインストール
cd railsfoo
bundle install

// サーバ起動
rails s

```

## トラブル
ここまで順調でしたが、http://127.0.0.1:3000にアクセスしたときにundefined method `context' for #<Sprockets::Environment:>のトラブルに会いました。

{% img http://www.kinopyo.com/wp-content/uploads/2011/05/Screen-shot-2011-05-18-at-19.28.02.png Sprockets trouble %}

<br/>
どうやらこのSprocketsというのがポイントのようです。
ぐぐってみたらgithubでこのようなコメントがありました。

{% blockquote github https://github.com/rails/rails/issues/453 %}
Just to save someone else the 2 minutes waiting for a bundle update sprockets that will fail, beta.2 is required by rails 3.1.0beta1. You want gem 'sprockets', '2.0.0.beta.2' in your Gemfile.
{% endblockquote %}

のようでGemfileに下記を追記し再度bundle update。

```ruby Gemfile
gem 'sprockets', '2.0.0.beta.2'
```

解決〜

{% img http://www.kinopyo.com/wp-content/uploads/2011/05/Screen-shot-2011-05-18-at-19.37.40.png rails server running %}

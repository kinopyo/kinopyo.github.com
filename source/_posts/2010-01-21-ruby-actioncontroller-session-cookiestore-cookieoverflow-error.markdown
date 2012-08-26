---
layout: post
title: 'Ruby - ActionController::Session::CookieStore::CookieOverflowエラー'
date: 2010-1-21
wordpress_id: 882
permalink: /blog/ruby-actioncontroller-session-cookiestore-cookieoverflow-error
comments: true
categories: [nil]
---
セッションを使って、データを保存する時、
以下のエラーが表示されました。

{% codeblock %}
Status: 500 Internal Server Error
ActionController::Session::CookieStore::CookieOverflow
{% endcodeblock %}

### 原因：Railsのセッションに保存できるデータの長さは４KBしかないです。
保存するデータは4KBをオーバーした場合、CookieOverflowエラーが表示されてしまいます。

### 解決方法：
セッションデータをDBに保存します。

+  セッションデータを保存用テーブルを作成します。
以下のコマンドを実行します。

```plain

rake db:sessions:create
rake db:migrate
{% endcodeblock %}

+  config/environment.rbで以下の行をコメントアウトします。
<pre class="brush:plain">
  config.action_controller.session_store = :active_record_store

```

+  サーバーを再起動します。

これで、解決です。

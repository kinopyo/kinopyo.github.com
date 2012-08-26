---
layout: post
title: 'Rails validates_confirmation_ofの使い方'
date: 2010-1-23
wordpress_id: 895
permalink: /blog/rails-use-of-validates-confirmation-of
comments: true
categories: [nil]
---
システムを作る時に、パスワードを2回入力してもらって、確認処理をおこなうことが多いですね。
そんなめんどな仕事には、Railsはvalidates_confirmation_of メソッドを用意してくれました。
それでは、使い方を見てみましょうか。

まず、モデルで以下のチェックを行います。

```ruby
  validates_confirmation_of :password               #カラム名
  attr_accessor             :password_confirmation  #カラム名に_confirmation{% endcodeblock %}
そして、関連のビューで、以下の処理を書きます。
<pre class="brush:ruby">
&lt;%= password_field :user, :password %&gt;
&lt;P&gt;
&lt;%= password_field :user, :password_confirmation %&gt;（確認用）

```
これで、自動的に入力されたパスワードは同じかどういかを確認してくれます。

※attr_accessorは、再入力フィールドの値を保存するための仮想カラムです。

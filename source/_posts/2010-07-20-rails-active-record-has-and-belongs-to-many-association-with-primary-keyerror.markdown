---
layout: post
title: 'Rails ActiveRecord::HasAndBelongsToManyAssociationWithPrimaryKeyError'
date: 2010-7-20
wordpress_id: 1262
permalink: /blog/rails-active-record-has-and-belongs-to-many-association-with-primary-keyerror
comments: true
categories: [nil]
---
Railsでhas_and_belongs_to_manyを使うときにこんなエラーが出ました。
*ActiveRecord::HasAndBelongsToManyAssociationWithPrimaryKeyError*の中身は：
<br/>
{% codeblock %}
Primary key is not allowed in a has_and_belongs_to_many join table (articles_users).
{% endcodeblock %}
これはメッセージの通りリンクテーブル（ここではarticles_users）にPKが設定されたからです。

## 解決方法
*:id => false*をmigration文に追加すればOKです。

```ruby
create_table :articles_users, :id => false do |t|
  t.integer :article_id
  t.integer :user_id
end

```

# 中文
在使用Rails的has_and_belongs_to_many的时候，遇到了*ActiveRecord::HasAndBelongsToManyAssociationWithPrimaryKeyError*异常。内容如下：
<br/>
{% codeblock %}
Primary key is not allowed in a has_and_belongs_to_many join table (articles_users).
{% endcodeblock %}
也就是说articles_users的表里设置了PK所导致。

## 解决方法
将*:id => false*添加到migration的create_table语句后面

```ruby
create_table :articles_users, :id => false do |t|
  t.integer :article_id
  t.integer :user_id
end

```

# English

When using has_and_belongs_to_many, I run into this error,
*ActiveRecord::HasAndBelongsToManyAssociationWithPrimaryKeyError*
<br/>
{% codeblock %}
Primary key is not allowed in a has_and_belongs_to_many join table (articles_users).
{% endcodeblock %}
So check the linked-table , articles_users in my case, if there is a pk set by default.

## Solution
Put the *:id => false* to the migration create_table SQL.

```ruby
create_table :articles_users, :id => false do |t|
  t.integer :article_id
  t.integer :user_id
end

```

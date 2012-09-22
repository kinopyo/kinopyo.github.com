---
layout: post
title: 'Rails HasAndBelongsToMany Association With Primary Key Error'
date: 2010-7-20
wordpress_id: 1262
permalink: /blog/rails-active-record-has-and-belongs-to-many-association-with-primary-keyerror
comments: true
categories: Rails
---
When using has_and_belongs_to_many, I ran into this error,
*ActiveRecord::HasAndBelongsToManyAssociationWithPrimaryKeyError*

```
Primary key is not allowed in a has_and_belongs_to_many join table (articles_users).
```

So check the linked-table , articles_users in my case, if there is a pk set by default.

## Solution
Put the *:id => false* to the migration create_table SQL.

```ruby
create_table :articles_users, :id => false do |t|
  t.integer :article_id
  t.integer :user_id
end
```

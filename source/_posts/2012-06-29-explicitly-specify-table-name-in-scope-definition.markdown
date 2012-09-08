---
layout: post
title: "Explicitly specify table name in scope definition"
date: 2012-06-29 15:56
comments: true
categories: [Rails]
---
I was wondering why people explicitly specify table name in such a scope definition...

```ruby
class Answer < ActiveRecord::Base
  scope :recent, order('answers.created_at DESC')
end
```

Until I got this error today.

```sql
Mysql2::Error: Column 'created_at' in order clause is ambiguous: SELECT  COUNT(DISTINCT `answers`.`id`) AS count_id, question_id AS question_id FROM `answers` LEFT OUTER JOIN `questions` ON `questions`.`id` = `answers`.`question_id` WHERE (`answers`.user_id = 87) GROUP BY question_id ORDER BY created_at DESC LIMIT 10
```

I have a `recent` scope defined in both `Question` and `Answer` model. And when you chain those two models, rails don't know the `recent` is associated to which one.

```ruby
@answers = @user.answers.recent.group(:question_id).includes(:question).limit(10)
```
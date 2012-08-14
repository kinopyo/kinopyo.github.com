---
layout: post
title: "Finding an array of ids while keeping the order with Rails"
date: 2012-08-14 15:13
comments: true
categories: rails
---

## The order may different
Suppose you're retrieving records using array of `ids`.

```ruby
ids = [100, 1, 6]
User.where(:id => ids).map(&:id)
# => [1, 6, 100]
```

The order of the data may different from `ids` array, **what if you want to keep its order**?

## for MySQL

There is a function in mysql called [FIELD()](http://dev.mysql.com/doc/refman/5.0/en/string-functions.html#function%5Ffield)

>  FIELD(str,str1,str2,str3,...)
> Returns the index (position) of str in the str1, str2, str3, ... list. Returns 0 if str is not found.

So by combing this `FIELD()` function, here is the code.

```ruby
ids = [100, 1, 6]
User.where(:id => ids).order("field(id, #{ids.join(',')})").map(&:id)
# => [100, 1, 6]
```

This will generate SQL below:
```sql
SELECT `users`.* FROM `users` WHERE `users`.`id` IN (100, 1, 6) ORDER BY field(id, 100, 1, 6)
```

## for other databases

I didn't dig too much but most of google results suggest just sort it manually using ruby.
Here is just an example:

```ruby
ids = [100, 1, 6]
users = User.where(:id => ids)
users = ids.map {|id| users.detect {|user| user.id == id } }
users.map(&:id)
# => [100, 1, 6]
```
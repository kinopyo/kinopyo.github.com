---
layout: post
title: "SublimeText2 Rails Snippet for Model Find Code"
date: 2012-11-25 22:49
categories: sublimetext
---
If you find yourself typing these kind of similar codes very often, and want a snippet to save your time, this is it.

```ruby
@topic = Topic.find(params[:topic_id])
@car_item = CarItem.find(params[:car_item_id])
@user = User.find(params[:id])
```

It maps the variable name to its model name by converting the first character or the character after a underscore to uppercase, which is a convention in Rails framework.

## Demo Video
<iframe width="560" height="315" src="http://www.youtube.com/embed/jGbvBn801Ao" frameborder="0" allowfullscreen></iframe>

## The Snippet ##

I put it and named as `SublimeText/Packages/User/Snippets/model_find.sublime-snippet`.

```xml
<snippet>
  <content><![CDATA[
@${1} = ${1/^(.)|_(.)/\U\1\2/g}.find(params[:${2:${1}_}id])
]]></content>
  <tabTrigger>mf</tabTrigger>
  <scope>meta.rails.controller</scope>
</snippet>
```
So now I just have to hit `mf` -> `tab` to trigger it.

## SublimeText Document ##

Here I'm using the [Substitutions](http://docs.sublimetext.info/en/latest/extensibility/snippets.html#substitutions) feature of SublimeText 2 snippet.

The substitution syntax has the following syntaxes:

> - `${var_name/regex/format_string/}`
> - `${var_name/regex/format_string/options}`

e.g.

```
Original: ${1:Hey, Joe!}
Transformation: ${1/./=/g}

# Output:

      Original: Hey, Joe!
Transformation: =========
```
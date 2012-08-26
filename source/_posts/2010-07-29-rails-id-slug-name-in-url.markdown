---
layout: post
title: 'ID + Slug name in URL in Rails'
date: 2010-7-29
wordpress_id: 1287
permalink: /blog/rails-id-slug-name-in-url
comments: true
categories: [nil]
---
This is about how to customize the url to the form like "id + post.title", which can be simply overriding the* to_param* method in your model class.

Here is the example.

```ruby
  class Person
    def to_param
      "#{id}-#{name.parameterize}"
    end
  end

  @person = Person.find(1)
  # => #<Person id: 1, name: "Donald E. Knuth">

  <%= link_to(@person.name, person_path(@person)) %>
  # => <a href="/person/1-donald-e-knuth">Donald E. Knuth</a>

```
The *parameterize* is a method that replaces special characters in a string so that it may be used as part of a ‘pretty’ URL.
Rails is smart enough to extract this back into the plain id when you access your controller action.
You can access the url '/person/1-kinopyo' or '/person/1', both ok.


If you want to know more, here is a good article: [http://augustl.heroku.com/blog/styling-rails-urls](http://augustl.heroku.com/blog/styling-rails-urls).

# 日本語

slugはurlをより綺麗に表示するためのものです。例えばこの記事のpermanent urlは"rails-id-slug-name-in-url"にしています。英語世界になるんですが、これのようにurlを見ただけでそのurl先の内容が大体わかるようにするのがslugです。

この記事ではRailsで"id + post.title"のような形のURLを作る方法を紹介します。

## 方法
モデルクラス内に*to_param*メソッドをオーバーライドするだけです。
例として

```ruby
  class Person
    def to_param
      "#{id}-#{name.parameterize}"
    end
  end

  #controller
  @person = Person.find(1)
  # => #<Person id: 1, name: "Donald E. Knuth">

  #view
  <%= link_to(@person.name, person_path(@person)) %>
  # => <a href="/person/1-donald-e-knuth">Donald E. Knuth</a>

```
上記のようにmodelクラスを修正するだけで、他の影響はないです。URL: '/person/1-kinopyo'と'/person/1'はどっちでも使えます。
*parameterize*はRailsのビルトインのメソッドでurlに使う文字列に変換してくれるんです。<strong>しかし日本語などは完全にブランクに変換するので要注意です。</strong>

もしurlを"/person/kinopyo"のようにperson.nameにカスタムしたい場合はこれより少し複雑になります。興味のある方は下記リンク(英語)を参照してください。 [http://augustl.heroku.com/blog/styling-rails-urls](http://augustl.heroku.com/blog/styling-rails-urls).

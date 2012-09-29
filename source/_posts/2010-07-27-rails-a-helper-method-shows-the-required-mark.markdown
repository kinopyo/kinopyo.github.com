---
layout: post
title: 'Rails: a helper method shows the required mark'
date: 2010-7-27
wordpress_id: 1285
permalink: /blog/rails-a-helper-method-shows-the-required-mark
comments: true
categories: Rails
---
一つのHelperメソッドを作って、Modelに必須チェックが入ってるプロパティに対して必須マークの"# "を出力します。

まずapplicaton_helperにmark_requiredのメソッドを作ります。第一引数にはオブジェクト、第二引数はそのクラスのプロパティを渡します。

```ruby
# application_helper.rb
def mark_required(object, attribute)
  "# " if object.class.validators_on(attribute).map(&:class).include? ActiveModel::Validations::PresenceValidator
end

```

viewのerbには下記のように@userインスタンス変数と:nameを渡します。もしUserモデルに:nameに対して必須バリデーションが存在すれば必須マークが出力されます。

```ruby
  <div class="field">
    <%= f.label :name %><%=mark_required(@user, :name) %><br />
    <%= f.text_field :name %>
  </div>

```

参考リンク：[http://railscasts.com/episodes/211-validations-in-rails-3](http://railscasts.com/episodes/211-validations-in-rails-3)

## 20110704更新
もしhtmlタグも一緒に出力したいときは、タグがエスケープされてしまいます。

```ruby

module ApplicationHelper
  def mark_required(object, attribute)
    mark = "<span class='require_mark'># </span>"
    mark if object.class.validators_on(attribute).map(&:class).include? ActiveModel::Validations::PresenceValidator
  end
end

```

```ruby
  <div class="field">
    <%= f.label :name %><%=raw mark_required(@user, :name) %><br />
    <%= f.text_field :name %>
  </div>

```

この場合はrawを書けばエスケープされずにちゃんとHTMLタグが出力します。

# 中文
我们将创建一个Helper方法来输出"# "表示必须项目。
（原谅我这蹩脚的汉语，实在是不知道这些术语用中文该怎么叫）

首先在application_helper里创建一个叫mark_required的方法。他的第一个参数为对象，第二个参数接收的是对象的属性。

```ruby
# application_helper.rb
def mark_required(object, attribute)
  "# " if object.class.validators_on(attribute).map(&:class).include? ActiveModel::Validations::PresenceValidator
end

```

然后在View里我们只要把@user和:name传过去即可。如果你的User Model对:name进行了必须验证(presence validator)，"# "就会显示出来。

```ruby
  <div class="field">
    <%= f.label :name %><%= mark_required(@user, :name) %><br />
    <%= f.text_field :name %>
  </div>

```

链接：[http://railscasts.com/episodes/211-validations-in-rails-3](http://railscasts.com/episodes/211-validations-in-rails-3)

# English

Let's make a helper method that shows a required mark "# " when the attribute of the object has a presence validator.

First, create a mark_required method in the application_helper, pass the object as 1st parameter, the attribute as the second one.

```ruby
# application_helper.rb
def mark_required(object, attribute)
  "# " if object.class.validators_on(attribute).map(&:class).include? ActiveModel::Validations::PresenceValidator
end

```

Then, just call the custom method in the erb view file. In this sample we pass the @user instance variable and the :name attribute symbol. So if your User model has a presence validator on the :name attribute, the required-mark "# " will show up.

```ruby
  <div class="field">
    <%= f.label :name %><%= mark_required(@user, :name) %><br />
    <%= f.text_field :name %>
  </div>

```

I learned from this site：[http://railscasts.com/episodes/211-validations-in-rails-3](http://railscasts.com/episodes/211-validations-in-rails-3)

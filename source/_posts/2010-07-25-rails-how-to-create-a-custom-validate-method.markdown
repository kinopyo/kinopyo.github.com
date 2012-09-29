---
layout: post
title: 'Rails: How to create a custom validate method'
date: 2010-7-25
wordpress_id: 1280
permalink: /blog/rails-how-to-create-a-custom-validate-method
comments: true
categories: Rails
---
[http://railscasts.com/episodes/211-validations-in-rails-3](http://railscasts.com/episodes/211-validations-in-rails-3)で学んだ技です。
Rails 3.0 beta4を利用しています。

カスタムバリデーションメソッドを作成する方法を紹介します。
こんなコードがあるとします。Userモデルのemailに対して妥当性チェックは普通こう書きます。

```ruby
class User < ActiveRecord::Base
  validates :email,  :format => { :with => /\A(*^@\s]+)@((?:[-a-z0-9]+\.)+[a-z*{2,})\Z/i }
end

```

ここの:format => の部分を抽出してemail_validateというバリデーションメソッドを作ります。

## 方法
libフォルダにemail_format_validator.rbというファイルを新規作成します。

```ruby
# lib/email_format_validator.rb
class EmailFormatValidator < ActiveModel::EachValidator
  def validate_each(object, attribute, value)
    unless value =~ /\A(*^@\s]+)@((?:[-a-z0-9]+\.)+[a-z*{2,})\Z/i
      object.errors*attribute] << (options[:message* || "is invalid")
    end
  end
end

```

そしてUser.rbのソースを下記のように修正します。

```ruby
#User.rb
class User < ActiveRecord::Base
  validates :email, :email_format => true
end

```

:email_formatは自動的にEmailFormatValidatorにマッピングします。

# 中文
从这里学到的东西：[http://railscasts.com/episodes/211-validations-in-rails-3](http://railscasts.com/episodes/211-validations-in-rails-3)，算是作个笔记吧。
我用的是Rails 3.0 beta4。
假设你有一个User Model，要对期email属性尽兴验证。

```ruby
class User < ActiveRecord::Base
  validates :email,  :format => { :with => /\A(*^@\s]+)@((?:[-a-z0-9]+\.)+[a-z*{2,})\Z/i }
end

```

这里用:format =>的一窜代码显得很不美观，我们就把这段代码抽出来单独做成一个方法。

## 方法
在lib文件夹下创建email_format_validator.rb的文件。

```ruby
# lib/email_format_validator.rb
class EmailFormatValidator < ActiveModel::EachValidator
  def validate_each(object, attribute, value)
    unless value =~ /\A(*^@\s]+)@((?:[-a-z0-9]+\.)+[a-z*{2,})\Z/i
      object.errors*attribute] << (options[:message* || "is invalid")
    end
  end
end

```

然后修改User.rb，使用我们新建的方法:email_format

```ruby
#User.rb
class User < ActiveRecord::Base
  validates :email, :email_format => true
end

```

注意这里的:email_format会自动去寻找EmailFormatValidator这个class。

# English

I learned this from here: [http://railscasts.com/episodes/211-validations-in-rails-3](http://railscasts.com/episodes/211-validations-in-rails-3)
In this post, I'll introduce how to make a custom validate methods.Actually it's a kind of memo for me.
BTW, I'm using Rails 3.0 beta4.

Let's say you have a User model that contains a email property to validate. In common case it maybe written like this:

```ruby
class User < ActiveRecord::Base
  validates :email,  :format => { :with => /\A(*^@\s]+)@((?:[-a-z0-9]+\.)+[a-z*{2,})\Z/i }
end

```

So we will extract the :format => part to a custom validate method called email_validate.

## Solution
Create a file in the lib folder, named email_format_validator.rb

```ruby
# lib/email_format_validator.rb
class EmailFormatValidator < ActiveModel::EachValidator
  def validate_each(object, attribute, value)
    unless value =~ /\A(*^@\s]+)@((?:[-a-z0-9]+\.)+[a-z*{2,})\Z/i
      object.errors*attribute] << (options[:message* || "is invalid")
    end
  end
end

```

And change User model like this:

```ruby
#User.rb
class User < ActiveRecord::Base
  validates :email, :email_format => true
end

```

Note that the :email_format symbol is refer to EmailFormatValidator class automatically.

---
layout: post
title: 'Rails validate処理'
date: 2010-1-24
wordpress_id: 901
permalink: /blog/rails-validate
comments: true
categories: Rails
---
Railsのvalidateチェックはすばらしいです。
使いかた非常便利だし、機能が強いです。
それでは、一緒に見てみましょう。

### validate
validateを使って、カスタマイズのvadidationチェックを定義できます。
例：

```ruby
def validate
  errors.add(:content, "を入力してください") if content =~ /^(ここに感想を書いてください。|ここに感想を書いてください)$/
end
```

### validates_acceptance_of
チェックボックスがチェックされたかを確認。
チェックされていない場合、エラーが起こリます。

### validates_confirmation_of
再入力を確認します。
詳細の使い方は、「validates_confirmation_of の使い方」を参照してください。

### validates_exclusion_of
指定した値に含まれていないかをチェックします。
例：

```ruby
validates_exclusion_of :sex,:in => ['female','male']
```

### validates_inclusion_of
指定した値に含まれているかをチェックします。
validates_exclusion_ofの逆です。
例：

```ruby
validates_inclusion_of:sex, :in => ['female','male']
```

### validates_format_of
正規表現を使って、値をチェックします。
例：

```ruby
validates_format_of :code,:with => /^[0-9A-Za-z]/, :message =>"は半角英数字で入力してください。"
````

### validates_length_of
値の長さをチェックします。
 例：

```ruby
validates_length_of :name, :maximum => 30
```

### validates_numericality_of
値は数字かどうかをチェックします。数字ではない場合、エラーを表示します。
例：

```ruby
validates_numericality_of　:code
```

### validates_presence_of
必須値のチェック。値が入力されていない場合、エラーを表示します。
例：

```ruby
validates_presence_of :code

```

### validates_uniqueness_of
値の重複チェック。DBに既に同じ値が存在した場合、エラーを表示します。
例：

```ruby
validates_uniqueness_of :id
```

### validates_size_of
validates_length_ofと同じ。

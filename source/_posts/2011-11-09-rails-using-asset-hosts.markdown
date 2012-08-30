---
layout: post
title: 'Rails asset hostsについて'
date: 2011-11-9
wordpress_id: 2474
permalink: /blog/rails-using-asset-hosts
comments: true
categories: ["asset", "rails", "Ruby"]
---
[ActionView/Helpers/AssetTagHelper](http://api.rubyonrails.org/classes/ActionView/Helpers/AssetTagHelper.html)、asset(画像、CSSなど)ホストのチューニングについての勉強メモです。

## asset hostを指定 ##

image_tag("rails.png")のhelper methodで生成するリンクはデフォルトでは同じホストのpublicフォルダを指しています。それを変更したい場合は`config/environments/production.rb`の`ActionController::Base.asset_host`をいじります。

```ruby
ActionController::Base.asset_host = "assets.example.com"
```

```erb
image_tag("rails.png")
# => <img alt="Rails" src="http://assets.example.com/images/rails.png?1230601161" />
```

## asset hostを複数指定
ブラウザが一度に同一サーバには２つのコネクションしかできないそう（これは初めて知りました）で、asset同士のダウンロード完了するのを待たなければなりません。もし複数台のassetサーバがある場合は`assets%d.example.com`を使ってそれをコネクション数を増やせることができます。`%d`が指定されればRailsは0~3の４つの番号を付けて、並行して８つのコネクションができます。

```ruby
ActionController::Base.asset_host = "assets%d.example.com"
```

```erb
image_tag("rails.png")
# => <img alt="Rails" src="http://assets.example.com/images/rails.png?1230601161" />
stylesheet_link_tag("application")
# => <link href="http://assets2.example.com/stylesheets/application.css?1232285206" media="screen" rel="stylesheet" type="text/css" />
```

## カスタマイズ
もっと自分でカスタマイズしたい場合は`source`のprocパラメータを使えます。

```ruby
ActionController::Base.asset_host = Proc.new { |source|
  "http://assets#{Digest::MD5.hexdigest(source).to_i(16) % 2 + 1}.example.com"
}
image_tag("rails.png")
# => <img alt="Rails" src="http://assets1.example.com/images/rails.png?1230601161" />
stylesheet_link_tag("application")
# => <link href="http://assets2.example.com/stylesheets/application.css?1232285206" media="screen" rel="stylesheet" type="text/css" />
```

特定のパスで始まるassetを特定のホストに指定する例：
```ruby
ActionController::Base.asset_host = Proc.new { |source|
   if source.starts_with?('/images')
     "http://images.example.com"
   else
     "http://assets.example.com"
   end
 }
```

```erb
image_tag("rails.png")
# => <img alt="Rails" src="http://images.example.com/images/rails.png?1230601161" />
stylesheet_link_tag("application")
# => <link href="http://assets.example.com/stylesheets/application.css?1232285206" media="screen" rel="stylesheet" type="text/css" />
```
さらに`request`の第二パラメータもあります。これでHTTPSの動作も制御できます。

```ruby
ActionController::Base.asset_host = Proc.new { |source, request|
  if request.ssl?
    "#{request.protocol}#{request.host_with_port}"
  else
    "#{request.protocol}assets.example.com"
  end
}
```

## Resources
http://api.rubyonrails.org/classes/ActionView/Helpers/AssetTagHelper.html
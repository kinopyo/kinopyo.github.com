---
layout: post
title: 'Macのrubyで、no such file to load -- ubygems (LoadError)'
date: 2011-5-23
wordpress_id: 1779
permalink: /blog/mac-ruby-no-such-file-to-load-ubygems-loaderror
comments: true
categories: ["Mac", "Ruby", "sinatra", "環境構築"]
---
[Sinatra](http://www.sinatrarb.com/intro)を試したところこのようなエラーになりました。

```
ruby -rubygems myapp.rb
no such file to load -- ubygems (LoadError)

```

ググッてみたらやはりPATHが間違ったっぽいです。
Macportでrubygemsをインストールすることで解決できるそうです。
その後はgemを再度インストールする必要があるらしいです。
操作の流れ：

```
#パスの確認
which gem
/usr/bin/gem

sudo port install rb-rubygems
...
# Terminal再起動
# パスの確認
which gem
/opt/local/bin/gem

sudo gem install sinatra

```

一旦はこれで解決です。

参考になったサイト：
[http://d.hatena.ne.jp/holypp/20110319/1300556202](http://d.hatena.ne.jp/holypp/20110319/1300556202)
[http://d.hatena.ne.jp/Kuna/20090315/1237121262](http://d.hatena.ne.jp/Kuna/20090315/1237121262)

---
layout: post
title: 'Sinatraサーバ起動せずに修正したソースを反映する方法(ホットデプロイ)'
date: 2011-5-24
wordpress_id: 1784
permalink: /blog/sinatra-hot-deploy-without-restart-server
comments: true
categories: ["Ruby", "sinatra"]
---
Sinatra使って二日目ですが、サーバーを再起動しないと修正したコードが反映されないことに気づきました。これは不便なので、改善する方法を紹介します。

shotgunというgemを使えばOKです。インストールし、ruby -rubygemsではなくshotgunでサーバを起動します。

```
$ sudo gem install shotgun
$ shotgun myapp.rb
== Shotgun/WEBrick on http://127.0.0.1:9393/
...

```

これでサーバを再起動せずにホットデプロイができるようになります。

他にも[Sinatra::Reloader](https://github.com/rack/rack/blob/master/lib/rack/reloader.rb)や[Sinatra::Reloader](https://github.com/rkh/sinatra-reloader)が公式サイトで紹介されていますが、shotgunは一番簡単だそうです。

参考サイト：
[http://stackoverflow.com/questions/5684266/can-i-do-sinatra-program-without-restart-server](http://stackoverflow.com/questions/5684266/can-i-do-sinatra-program-without-restart-server)
[ What happened to reloading in Sinatra](http://www.sinatrarb.com/faq.html#reloading)

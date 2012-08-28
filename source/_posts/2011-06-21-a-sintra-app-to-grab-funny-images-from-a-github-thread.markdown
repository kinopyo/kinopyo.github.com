---
layout: post
title: 'githubの/usrが削除されたスレットが面白かった、Nokogiriで画像を拾うSinatra appを書いた'
date: 2011-6-21
wordpress_id: 1924
permalink: /blog/a-sintra-app-to-grab-funny-images-from-a-github-thread
comments: true
categories: ["Github", "heroku", "nokogiri", "Ruby", "sinatra", "Snippet"]
---
## スレット経緯
bumblebeeというgithubのプロジェクトにinstall.shというファイルがありますが、
実行するとrm -rf /usrのコマンドで/usrが全部削除されることで大騒ぎになったようです。
[githubのスレット](https://github.com/MrMEEE/bumblebee/commit/a047be85247755cdbe0acce6f1dafc8beb84f2ac)

{% img http://www.kinopyo.com/wp-content/uploads/2011/06/bumblebee-rm-rf-usr.png bumblebee rm -rf :usr %}

一個スペースが多かったですね。。

でコメントに上がっている画像がとても面白かったので、それをNokogiriを使って拾うrubyコードを書きました。プログラマのヒューモア満載の画像ですね。

Sinatra + Nokogiri + Herokuで作りました、キャッシュは[dalli](https://github.com/mperham/dalli)というgemを使いました。

## 成果
下記iframeで表示しています。urlは[http://kinopyo-omgmyusr.heroku.com](http://kinopyo-omgmyusr.heroku.com)
<iframe src="http://kinopyo-omgmyusr.heroku.com/" scrolling="yes" width="480" height="720" >
</iframe>

## ソースコード
githubに上げています。
[https://github.com/kinopyo/Funny-Images-in-bumblebee-rm--rf--usr-thread](https://github.com/kinopyo/Funny-Images-in-bumblebee-rm--rf--usr-thread)


参考になったリンク：
[http://devcenter.heroku.com/articles/memcache](http://devcenter.heroku.com/articles/memcache)

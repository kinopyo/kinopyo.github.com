---
layout: post
title: 'WordPressパーマリンクのSEO対策'
date: 2009-12-7
wordpress_id: 265
permalink: /blog/wordpress-permalink-settings-for-seo
comments: true
categories: Wordpress SEO
---
最適なSEOになるためのWordPressのパーマリンク設定方法について書きたいと思います。

## パーマリンク
簡単に言うとURLのことです。例えば下記のようなURLです。
http://example.com/?p=N
これはWordPressのデフォルトで、実によくない設定です。
基本のものは[パーマリンクの使い方](http://wpdocs.sourceforge.jp/%E3%83%91%E3%83%BC%E3%83%9E%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9)を参照してください。

## SEOに最適なパーマリンク
いろんなサイトを参考しました。結構の情報量で、どこまで通用するかはやはりご自分の判断でお願いします。
+  URLにスペースを入れないのはさいやく、アンダースコアはちょっとマシ、ハイフンは一番(in URLs, no spaces are worst, underscore are better, dashes or hyphens are best.)
+  %postname%で始まるのはパフォーマンス的によくないが、2.0バージョン以降はOKになった
	-(Starting Permalinks with %postname% is strongly not recommended for performance reasons.. ###  Note - this has been changed and is ok to do since ver. 2.0)
+  %category%、%tag%で始まるのはパフォーマンスの原因でやめてほしい
	-(Starting Permalinks with %category%,%tag% is strongly not recommended for performance reasons. )
+  日本語のパーマリンクにするのはよろしくない

## 結論
+  %postname%
+  あるいは%year%/%postname%
にしようかと私は思ってます。
<br/>
まず、%postname%が改善されたため、これを使うのが一番いいSEO対策になってます。
ただし日本語をパーマリンクにするのはよくしくないと思うので、
そこは手動で毎回毎回変えるしかないです。
手間かかると思う方はやはり年月日+post_idを選択したほうがいいかもです。
ただパーマリンクに無意味なpost_idをつけるのがちょっと抵抗があるので、
私は別に英語の意味に翻訳するのも大丈夫かと思います。
<br/>

## パーマリンクをリダイレクトするプラグイン
これはあるようです。
パーマリンクの形式を変更した場合このプラグインで
簡単リダイレクトができるそうです。
[Permalink Redirect WordPress Plugin](http://scott.yang.id.au/code/permalink-redirect)


## 参考サイト
[パーマリンクの使い方](http://wpdocs.sourceforge.jp/%E3%83%91%E3%83%BC%E3%83%9E%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9)
[How To: Setting Up Your WordPress Permalink Structure](http://wphacks.com/how-to-setting-up-your-wordpress-permalink-structure)
[WordPressで日本語のパーマリンクにするのはよろしくない](http://openplay.org/2009/04/18/140.html)
[WordPress のアドレスに日本語を含むURLが使えない](http://ja.forums.wordpress.org/topic/2048)
[パーマリンクの変更後、旧アドレスでもアクセスできるWordPressのプラグイン](http://coliss.com/articles/blog/wordpress/plugin/wordpress-plugin-permalink-edirect.html)

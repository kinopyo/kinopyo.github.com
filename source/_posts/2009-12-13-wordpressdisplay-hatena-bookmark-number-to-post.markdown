---
layout: post
title: 'WordPress記事に、はてなブックマーク数を表示'
date: 2009-12-13
wordpress_id: 427
permalink: /blog/wordpressdisplay-hatena-bookmark-number-to-post
comments: true
categories: Wordpress
---
WordPress記事にはてなブックマーク数を表示する方法です。
プラグインのわざわざインストールする必要はなく、
一行のコードで簡単に実現できるものです。

## コード
{% codeblock %}
&lt;a href="http://b.hatena.ne.jp/entry/&lt;?php echo get_permalink(); ?&gt;"&gt;&lt;img src="http://b.hatena.ne.jp/entry/image/&lt;?php echo get_permalink(); ?&gt;" alt="" /&gt;&lt;/a&gt;
{% endcodeblock %}
## 挿入箇所
Word Pressの管理画面内「表示 -> テーマエディタ」で下記ファイルを修正します。
+  ブログホームページのファイル（index.php）
+  アーカイブ、カテゴリ、タグなどのファイル（archive.php）
+  単一記事のファイル（single.php）

## サンプル
例えば記事のタイトルの横にブックマーク数を表示させたい場合は「title」キーワードを検索して、
&lt;h2&gt;&lt;?php the_title(); ?&gt;&lt;/h2&gt;の中に上記コードを貼りつければOKです。
こんな感じに修正します。
{% codeblock %}
&lt;h2&gt;&lt;?php the_title(); ?&gt;&lt;a href="http://b.hatena.ne.jp/entry/&lt;?php echo get_permalink(); ?&gt;"&gt;&lt;img src="http://b.hatena.ne.jp/entry/image/&lt;?php echo get_permalink(); ?&gt;" alt="" /&gt;&lt;/a&gt;&lt;/h2&gt;
{% endcodeblock %}

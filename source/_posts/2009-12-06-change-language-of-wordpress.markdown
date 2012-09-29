---
layout: post
title: 'WordPress言語の変更'
date: 2009-12-6
wordpress_id: 337
permalink: /blog/change-language-of-wordpress
comments: true
categories: Wordpress
---
<div class="section">
<p>最初はわざと英語版を入れましたが、日本語に簡単に切り替えるかと思って検索してみたんです。こんなに簡単に変更できるんだ。さすがWordPressだ！</p>
<h4>日本語リソースのインストール</h4>
<ol>
<li><a href="http://ja.wordpress.org/install-ja/" target="_blank">WordPress | 日本語 &#187; 日本語リソースのインストール</a>から ja.mo、continents-cities-ja.mo をダウンロード</li>
<li>サーバのWordPressフォルダのwp-content 以下に languages ディレクトリを作成</li>
<li>ダウンロードした2つの .mo ファイルを languages ディレクトリにアップロード</li>
<li>WordPress ルート直下の wp-config.php ファイルを開き、「WPLANG」の箇所を次のように設定</li>
</ol>
{% codeblock %}
define ('WPLANG', 'ja');
{% endcodeblock %}
<p>他にインストールしたい言語があれば該当リソースをWPにインストールして、</p>
<p>wp-config.phpを編集すればOKです。</p>
<p>参考サイト：</p>
<p><a href="http://www.wordpress-skin.com/wordpress/?p=7" target="_blank">WordPressの言語を切り替えてみよう（日本語・英語・中国語…）  -  wordpressのテンプレート wpskinのブログ</a></p>
</div>

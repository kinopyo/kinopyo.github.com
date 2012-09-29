---
layout: post
title: '同じデータベースに複数のWordPressをインストールする方法'
date: 2009-12-1
wordpress_id: 330
permalink: /blog/install-multy-wordpress-in-same-db
comments: true
categories: Wordpress
---
<div class="section">
<h4>手法</h4>
<p>もう一つのWordPressフォルダをサーバにアップロードし、</p>
<p>設定ファイルで作成するテーブル接頭辞を変えることで</p>
<p>DBの衝突を避けるという手法です。</p>
<h4>詳細</h4>
<ol>
<li>もう一つのWordPressフォルダが必要(ダウンロードでもいいし、現行のものをコピーしてもOK)</li>
<li>フォルダをリネームしサーバにアップロード</li>
<li>該当フォルダのwp-config.phpの下記行の内容を編集：例えばwp_をwp_sub_にするとか、既存のWordPressと衝突しなければOK</li>
<li>後は普通のインストールと同じように\wp-admin\installを実行</li>
</ol>
{% codeblock %}
$table_prefix = ‘wp_’;
{% endcodeblock %}
<br/>
<br/>
<h4>参考サイト</h4>
<p><a href="http://musicmaniacs.net/archives/2009/03/12000242.php" target="_blank">レンタルサーバーに複数のWordPressを設置する方法 - HUBLOG</a></p>
</div>

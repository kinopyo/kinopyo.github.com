---
layout: post
title: 'Kohana3にSmarty moduleをインストール'
date: 2010-9-25
wordpress_id: 1450
permalink: /blog/install-smarty-module-to-kohan
comments: true
categories: ["php", "PHP", "Smarty", "環境構築"]
---
## ダウンロード
[http://wiki.github.com/MrAnchovy/kohana-module-smarty/](http://wiki.github.com/MrAnchovy/kohana-module-smarty/)

## インストール
githubでも手順がとても分かりやすいので直接引用させていただきます。
{% blockquote http://wiki.github.com/MrAnchovy/kohana-module-smarty/ %}
1. Download the latest version from the links above
2. Unpack the downloaded file
3. Move the smarty directory into the Kohana modules directory
4. Enable the module in your application’s bootstrap.php
Kohana::modules(array(
	‘auth’ => MODPATH.‘auth’, // Basic authentication
	// ‘cache’ => MODPATH.‘cache’, // Caching with multiple backends
	// ‘codebench’ => MODPATH.‘codebench’, // Benchmarking tool
	‘database’ => MODPATH.‘database’, // Database access
	// ‘image’ => MODPATH.‘image’, // Image manipulation
	‘orm’ => MODPATH.‘orm’, // Object Relationship Mapping
	‘pagination’ => MODPATH.‘pagination’, // Paging of results
	‘userguide’ => MODPATH.‘userguide’, // User guide and API documentation
	<strong>'smarty' => MODPATH.'smarty', // smarty template module. </strong>
));
5. Visit the page www.yoursite.com/smarty to confirm all is OK
{% endblockquote %}

## その他リンク
このモジュールのファイル構造: [http://github.com/MrAnchovy/kohana-module-smarty/wiki/file-structure](http://github.com/MrAnchovy/kohana-module-smarty/wiki/file-structure)



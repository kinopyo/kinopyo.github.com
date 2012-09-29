---
layout: post
title: 'WordPress Flexible upload pluginのWarning: call_user_func_array() [function.call-user-func-array]'
date: 2009-12-11
wordpress_id: 495
permalink: /blog/wordpress-flexible-upload-plugin%e3%81%aewarning-call_user_func_array-function-call-user-func-array
comments: true
categories: Wordpress
---
## エラー詳細
Flexible uploadのプラグインを使うときに出たエラー内容です。
>|
Warning: call_user_func_array() *function.call-user-func-array*: First argument is expected to be a valid callback, 'feed_links_extra' was given in ### /### /wp-includes/plugin.php on line 339
|<

## 回避方法
wp-content/plugins/flexible-upload/flexible-upload-wp25.phpに以下のコードを追加

```php

function media_admin_css() {
	wp_admin_css('css/media');
}

```
## バージョン情報
+  WordPress : 2.8.6
+  Flexible upload: 1.1.3

## 参考サイト
[WordPress2.6のFlexible upload 1.13不具合解消](http://wb.corekuuma.com/archives/83)

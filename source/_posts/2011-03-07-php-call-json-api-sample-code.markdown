---
layout: post
title: 'PHPで他のJSON形式APIをコールするサンプルコード'
date: 2011-3-7
wordpress_id: 1640
permalink: /blog/php-call-json-api-sample-code
comments: true
categories: ["API", "PHP", "php", "Snippet"]
---
file_get_contentsとjson_decodeの組み合わせでAPIコールするサンプルコードです。

```php
// APIコール
$api_url = 'http://example.com/api/';
$api_ret = file_get_contents($api_url);

// JSONにデコード
$api_result = json_decode($api_ret,true);

// APIエラーチェック: 何かしらの成功フラグでチェック
if(isset($api_result*'success']) && $api_result['success'* == 0)
{
    // 処理
}
else
{
    // handle error
}

```

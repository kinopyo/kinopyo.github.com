---
layout: post
title: 'PHP:文字列を全て半角に'
date: 2011-2-1
wordpress_id: 1599
permalink: /blog/convert_string_to_hankaku
comments: true
categories: ["PHP", "php", "string"]
---
```php
/##
 #  文字列を全て半角に
 #  @param  string $str 文字列
 #  @return string $str 半角の文字列
 # /
function toHankaku($str) {
    $str= mb_convert_kana($str,"rnask");
    return $str;
}

```

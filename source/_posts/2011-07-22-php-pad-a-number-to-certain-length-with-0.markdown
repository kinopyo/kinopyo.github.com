---
layout: post
title: 'PHP:必要桁数まで0埋めする'
date: 2011-7-22
wordpress_id: 1597
permalink: /blog/php-pad-a-number-to-certain-length-with-0
comments: true
categories: ["PHP", "php"]
---
```php
// 47 -> 047
sprintf("%03d", 47);

// or

// parameter: string $input , int $pad_length,
str_pad(47, 3, '0', STR_PAD_LEFT);

```

str-padについては：[http://php.net/manual/en/function.str-pad.php](http://php.net/manual/en/function.str-pad.php)


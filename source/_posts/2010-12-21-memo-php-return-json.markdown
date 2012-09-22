---
layout: post
title: 'メモ：PHPでJSONPを返すサンプルコード'
date: 2010-12-21
wordpress_id: 1589
permalink: /blog/memo-php-return-json
comments: true
categories: ["JavaScript", "JSONP", "PHP", "php"]
---
## PHP側で

```php
echo $_GET['callback'] . '(' . json_encode($object) . ');';

```

## JS側で

```javascript
$(function(){
   $.getJSON('foo.php?callback=?',
    {},  // No additional parameters sent
    function (data) {
       // data is now JSON object instantiated from retrieved info
       alert(data*'key'*);
   });
});
```

参考：
[Mantis and Jessamine | Creating a JSONP Data Provider in PHP](http://www.carolinamantis.com/wordpress/?p=29)
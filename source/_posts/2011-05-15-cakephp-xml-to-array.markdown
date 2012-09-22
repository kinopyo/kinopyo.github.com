---
layout: post
title: 'Cakephp XML to Array'
date: 2011-5-15
wordpress_id: 1719
permalink: /blog/cakephp-xml-to-array
comments: true
categories: ["cakephp", "PHP", "php", "xml"]
---
CakephpでXMLを配列に変換するのはとても簡単です。
下記のファンクションを使えば一発でできます。

```php
uses('Xml');
$xml = new Xml("/path/to/xml");
$xml_array = Set::reverse($xml);
```

---
layout: post
title: 'SmartyをMac XAMPP環境にインストール'
date: 2010-9-25
wordpress_id: 1446
permalink: /blog/install-smarty-to-mac-xampp
comments: true
categories: ["Mac", "PHP", "Smarty", "環境構築"]
---
Smartyのインストールはphp.iniにインクルードパスを書く方法と書かない方法があります。ここではphpのインクルードパスに書く方法を紹介します。

### 1 Smartyをダウンロード
[http://www.smarty.net/download.php](http://www.smarty.net/download.php)からダウンロードします。今回は3.0rc3にしました。

### 2 ファイルの解凍
できたフォルダ名はSmarty-3.0rc3で、それをsmartyにリネームして、/Applications/XAMPP/xamppfiles/lib/phpに移動します。こうするのはここがXAMPPの場合のinclude_pathになるからです。

### 3 php.iniを変更して、smartyを読み込ませる
php.ini中のinclude_pathに".:/Applications/XAMPP/xamppfiles/lib/php/smarty/libs"の記述を追加します。
できたイメージはこうなります。
{% codeblock %}
include_path=".:/Applications/XAMPP/xamppfiles/lib/php:/Applications/XAMPP/xamppfiles/lib/php/pear.:/Applications/XAMPP/xamppfiles/lib/php/smarty/libs"
{% endcodeblock %}

### 4 smartyが必要なフォルダを作成します。
smartyは四つのフォルダが必要です：
+  templates
+  templates_c
+  cache
+  config

templates_cとcacheフォルダには適切な書き込み権限を付与しなければなりません。
場所は任意のはずです。ここではこんな形にしました。htdocsはXAMPPのウェブルートフォルダです。
+  /Applications/XAMPP/xamppfiles/htdocs/smarty/templates
+  /Applications/XAMPP/xamppfiles/htdocs/smarty/config
+  /Users/zolo/Develop/smarty/templates_c
+  /Users/zolo/Develop/smarty/cache

### 5 smartyテンプレートを作成
上記templatesフォルダにsmarty.tplというファイルを作成します。

```html
<html>
<body>
Hello, {$name}!
</body>
</html>

```

### 6 テンプレートに値をセットするphpファイルを作成
/Applications/XAMPP/xamppfiles/htdocs/にsmarty.phpというファイルを作成します。

```php
<?php

// load Smarty library
require('Smarty.class.php');

$smarty = new Smarty;

$smarty->template_dir = '/Applications/XAMPP/xamppfiles/htdocs/smarty/templates';
$smarty->config_dir = ' /Applications/XAMPP/xamppfiles/htdocs/smarty/config';
$smarty->cache_dir = '/Users/zolo/Develop/smarty/cache';
$smarty->compile_dir = '/Users/zolo/Develop/smarty/templates_c';

$smarty->assign('name','kinopyo!');

$smarty->display('smarty.tpl');
?>

```

### 7 動作確認
php.iniを編集したため、まずはapacheを再起動します。
そして[http://127.0.0.1/smarty.php](http://127.0.0.1/smarty.php)にアクセスしてエラーがなければOKです。

## 参考リンク:
[http://news.php.net/php.smarty.dev/2703](http://news.php.net/php.smarty.dev/2703)

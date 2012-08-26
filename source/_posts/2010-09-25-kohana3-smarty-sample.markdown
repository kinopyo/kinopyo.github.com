---
layout: post
title: 'Kohana3にSmartyを利用するサンプル'
date: 2010-9-25
wordpress_id: 1459
permalink: /blog/kohana3-smarty-sample
comments: true
categories: ["php", "PHP", "Smarty"]
---
## Smarty templateの作成
application/viewsにhello.tplというファイルを作成します。

```html
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>{$title}</title>
</head>
<body>
	hello, {$name}
</body>
</html>

```

## Controllerの作成
hello.phpというControllerを作成します。

```php
<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Hello extends Controller {

	public function action_index()
	{
		$view = View::factory("smarty:hello");
		$view->name = "kinopyo!";
		$view->title = "Smarty & Kohana Sample";
		$this->request->response = $view;
	}
}

```

View::factoryに"smarty:"というプリフィックスを書くことでSmartyテンプレートとして認識してくれます。

## 動作確認
[http://127.0.0.1/myapp/hello](http://127.0.0.1/myapp/hello)にアクセスし、"hello, kinopyo!"が表示されれば成功です。

## Controller_Templateの場合

```php
<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Hello extends Controller_Template {

	public $template = 'smarty:hello';

	public function action_index()
	{
		$this->template->name = 'kinopyo!';
		$this->template->title = "Hello Title";
	}

}

```

---
layout: post
title: 'jQuery pluginの開発規約について'
date: 2009-10-13
wordpress_id: 272
permalink: /blog/jquery-basic-principal-to-develop-plugins
comments: true
categories: jQuery
---
本文(英語)のアドレス：
[A Plugin Development Pattern » Learning jQuery - Tips, Techniques, Tutorials](http://www.learningjquery.com/2007/10/a-plugin-development-pattern)

## 結論から ##

まず、**要点**と**規約**に沿ったソースを先頭に置きます。

> 1. Claim only a single name in the jQuery namespace
> 2. Accept an options argument to control plugin behavior
> 3. Provide public access to default plugin settings
> 4. Provide public access to secondary functions (as applicable)
> 5. Keep private functions private
> 6. Support the Metadata Plugin

```javascript
// create closure
(function($) {
  // プラグインの宣言
  $.fn.hilight = function(options) {
    debug(this);
    // build main options before element iteration
    var opts = $.extend({}, $.fn.hilight.defaults, options);
    // iterate and reformat each matched element
    return this.each(function() {
      $this = $(this);
      // build element specific options
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
      // update element styles
      $this.css({
        backgroundColor: o.background,
        color: o.foreground
      });
      var markup = $this.html();
      // call our format function
      markup = $.fn.hilight.format(markup);
      $this.html(markup);
    });
  };
  // private function for debugging
  function debug($obj) {
    if (window.console &amp;&amp; window.console.log)
      window.console.log('hilight selection count: ' + $obj.size());
  };
  // define and expose our format function
  $.fn.hilight.format = function(txt) {
    return '<strong>' + txt + '</strong>';
  };
  // plugin defaults
  $.fn.hilight.defaults = {
    foreground: 'red',
    background: 'yellow'
  };
//
// end of closure
```

## 解読
### 1. Claim only a single name in the jQuery namespace

- 目的：jQueryの名前空間にファンクション(メソッド)を一つのみ追加。

プラグイン目的の純粋化と思われます。

- 実装例

```javascript
// プラグインの宣言
$.fn.hilight = function() {
  // Our plugin implementation code goes here.
};
```

- 使い方：

```javascript
$('#myDiv').hilight();
```

これはダメなパターンです。こうするなら二つのプラグインに分けるか、目的をもっと明確にしろうってことです。

- 実装例

```javascript
$.fn.oneFunction= function() {};
$.fn.anotherFunction= function() {};
```

### 2. Accept an options argument to control plugin behavior

- 目的：オプションをつけることでより柔軟なAPIをユーザに提供
- 実装例

```javascript
// プラグインの宣言
$.fn.hilight = function(options) {
  var defaults = {
 foreground: 'red',
 background: 'yellow'
  };
  // Extend our default options with those provided.
  var opts = $.extend(defaults, options);
  // Our plugin implementation code goes here.
};
```

- 使い方

```js
$('#myDiv').hilight({
  foreground: 'blue'
});
```

### 3. Provide public access to default plugin settings

- 目的：デフォルトの設定を変更できるようにする。
- 実装例

```js
// プラグインの宣言
$.fn.hilight = function(options) {
  // Extend our default options with those provided.
  // Note that the first arg to extend is an empty object -
  // this is to keep from overriding our "defaults" object.
  var opts = $.extend({}, $.fn.hilight.defaults, options);
  // Our plugin implementation code goes here.
};
// plugin defaults - added as a property on our plugin function
$.fn.hilight.defaults = {
  foreground: 'red',
  background: 'yellow'
};
```

- 使い方：全体のデフォルト設定を変更することもできるし、個別にオーバーライドすることも可能

```js
// override plugin default foreground color
$.fn.hilight.defaults.foreground = 'blue';
// ...
// invoke plugin using new defaults
$('.hilightDiv').hilight();
// ...
// override default by passing options to plugin method
$('#green').hilight({
  foreground: 'green'
});
```
### 4. Provide public access to secondary functions (as applicable)

- 目的：プラグイン開発者、または使い側がより簡単に拡張できる
- 方法：jQueryの名前空間に登録したファンクションにプロパティとして一個追加することで実現可能です。
- 実装例：

例えば文字列をフォーマットするファンクション"format"があるとします。
ここでは単純に強調表示するだけですが、誰でも簡単に変更できます。
```js
// プラグインの宣言
$.fn.hilight = function(options) {
  // iterate and reformat each matched element
  return this.each(function() {
 var $this = $(this);
 // ...
 var markup = $this.html();
 // call our format function
 markup = $.fn.hilight.format(markup);
 $this.html(markup);
  });
};
// define our format function
$.fn.hilight.format = function(txt) {'
  return '<strong>' + txt + '</strong>';
};

```
### 5. Keep private functions private

- 目的：単純にprivateなファンクションをprivate化にするだけ
- 方法：javascriptのクロージャで全体を囲む
- 実装例：

```js
// create closure
(function($) {
  // プラグインの宣言
  $.fn.hilight = function(options) {
 debug(this);
 // ...
  };
  // private function for debugging
  function debug($obj) {
 if (window.console && window.console.log)
   window.console.log('hilight selection count: ' + $obj.size());
  };
 //  ...
// end of closure
})(jQuery);

```
### 6. Support the Metadata Plugin
[Plugins/Metadata/metadata - jQuery Wiki](http://docs.jquery.com/Plugins/Metadata/metadata)

- 目的：

これはMetadataというプラグインがあるそうで、
なおかつたくさん人が使っていることを前提(或いは現状)としたため、
自分が作ったプラグインはMetadataにも対応するべきという結論になったわけです。

- TODO：

私もまだMetadataプラグインが何か全然わからないため、
ここはTODOとして残します。

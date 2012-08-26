---
layout: post
title: 'jQuery pluginの開発規約について'
date: 2009-10-13
wordpress_id: 272
permalink: /blog/jquery-basic-principal-to-develop-plugins
comments: true
categories: [nil]
---
<p>本文(英語)のアドレス：</p>
<p><a href="http://www.learningjquery.com/2007/10/a-plugin-development-pattern" target="_blank">http://www.learningjquery.com/2007/10/a-plugin-development-pattern</a></p>
<p><br/></p>
<h4>結論から</h4>
<p>まず、<span style="font-weight:bold;">要点</span>と<span style="font-weight:bold;">規約</span>に沿ったソースを先頭に置きます。</p>
<blockquote>
<p>   1. Claim only a single name in the jQuery namespace</p>
<p>   2. Accept an options argument to control plugin behavior</p>
<p>   3. Provide public access to default plugin settings</p>
<p>   4. Provide public access to secondary functions (as applicable)</p>
<p>   5. Keep private functions private</p>
<p>   6. Support the Metadata Plugin</p>
</blockquote>
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
{% endcodeblock %}
<h4>解読</h4>
<h5>1. Claim only a single name in the jQuery namespace</h5>
<ul>
<li>目的：jQueryの名前空間にファンクション(メソッド)を一つのみ追加。</li>
</ul>
<p>プラグイン目的の純粋化と思われます。</p>
<ul>
<li>実装例</li>
</ul>
{% codeblock %}

// プラグインの宣言
$.fn.hilight = function() {
  // Our plugin implementation code goes here.
};
{% endcodeblock %}
<ul>
<li>使い方：</li>
</ul>
<pre class="brush:javascript">
$('#myDiv').hilight();
{% endcodeblock %}
<p><br/></p>
<p>これはダメなパターンです。こうするなら二つのプラグインに分けるか、目的をもっと明確にしろうってことです。</p>
<ul>
<li>実装例</li>
</ul>
<pre class="brush:javascript">
$.fn.oneFunction= function() {};
$.fn.anotherFunction= function() {};
{% endcodeblock %}
<h5>2. Accept an options argument to control plugin behavior</h5>
<ul>
<li>目的：オプションをつけることでより柔軟なAPIをユーザに提供</li>
<li>実装例</li>
</ul>
<pre class="brush:javascript">
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
{% endcodeblock %}
<ul>
<li>使い方</li>
</ul>
<pre class="brush:javascript">
$('#myDiv').hilight({
  foreground: 'blue'
});
{% endcodeblock %}
<h5>3. Provide public access to default plugin settings</h5>
<ul>
<li>目的：デフォルトの設定を変更できるようにする。</li>
<li>実装例</li>
</ul>
<pre class="brush:javascript">
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
{% endcodeblock %}
<ul>
<li>使い方：全体のデフォルト設定を変更することもできるし、個別にオーバーライドすることも可能</li>
</ul>
<pre class="brush:javascript">
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
{% endcodeblock %}
<h5>4. Provide public access to secondary functions (as applicable)</h5>
<ul>
<li>目的：プラグイン開発者、または使い側がより簡単に拡張できる</li>
<li>方法：jQueryの名前空間に登録したファンクションにプロパティとして一個追加することで実現可能です。</li>
<li>実装例：</li>
</ul>
<p>例えば文字列をフォーマットするファンクション"format"があるとします。</p>
<p>ここでは単純に強調表示するだけですが、誰でも簡単に変更できます。</p>
<pre class="brush:javascript">
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

{% endcodeblock %}
<h5>5. Keep private functions private</h5>
<ul>
<li>目的：単純にprivateなファンクションをprivate化にするだけ</li>
<li>方法：javascriptのクロージャで全体を囲む</li>
<li>実装例：</li>
</ul>
<pre class="brush:javascript">
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
<h5>6. Support the Metadata Plugin</h5>
<p><a href="http://docs.jquery.com/Plugins/Metadata/metadata" target="_blank">http://docs.jquery.com/Plugins/Metadata/metadata</a></p>
<ul>
<li>目的：</li>
</ul>
<p>これはMetadataというプラグインがあるそうで、</p>
<p>なおかつたくさん人が使っていることを前提(或いは現状)としたため、</p>
<p>自分が作ったプラグインはMetadataにも対応するべきという結論になったわけです。</p>
<ul>
<li>TODO：</li>
</ul>
<p>私もまだMetadataプラグインが何か全然わからないため、</p>
<p>ここはTODOとして残します。</p>

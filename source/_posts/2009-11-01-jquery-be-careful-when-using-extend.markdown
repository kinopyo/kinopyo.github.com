---
layout: post
title: 'jQueryの$.extendに注意：$.extend({},target,option)と$.extend(target,option)の違い'
date: 2009-11-1
wordpress_id: 291
permalink: /blog/jquery-be-careful-when-using-extend
comments: true
categories: [nil]
---
<p>jQueryの$.extendはとても便利な機能です。</p>
<p>jQueryのプラグインを作成する場合は以下の二つを利用します。</p>
```javascript

$.extend(object) //jQueryそのものを拡張する
$.fn.extend(object) //jQueryエレメントに新しいメソッドを追加する。
//（典型的なjQueryプラグインの作成方法）
{% endcodeblock %}
<br/>
<p>今回検討するのは第三の使い方です。</p>
{% codeblock %}

$.extend(target,option,...);
{% endcodeblock %}
<p>これは第一のパラメータのオブジェクトをどんどん拡張する意味です。</p>
<p>実際のプログラミングではこんな使い方が両方あります。</p>
<pre class="brush:javascript">
$.extend(target, option);
$.extend({}, target, option);
{% endcodeblock %}
<br/>
<p>違いは何でしょうか？</p>
<br/>
<h4><span style="font-weight:bold;color:#0000FF;">$.extend(target, option);</span></h4>
<p>これはtargetそのものを拡張する意味です。</p>
<p>実行後targetオブジェクトは変更(拡張)されます。</p>
<br/>
<p>実例として、例えばプロジェクトにトップレベルの空のConstansクラスがあります。</p>
<p>その下で各モジュール要のconstantsが定義されていて、</p>
<p>それをトップのConstantsに拡張します。</p>
<pre class="brush:javascript">
$.extend(constants,subConstants1,subConstants2...);
{% endcodeblock %}
<p>落とし穴：</p>
<pre class="brush:javascript">
var defaults = {};
var option = {};
var opts = $.extend(defaults,option);

{% endcodeblock %}
<p>上記ではdefaultsが変更され、わざわざ変数optsに代入する意味もなくなります。</p>
<br/>
<h4><span style="font-weight:bold;color:#0000FF;">$.extend({}, target, option);</span></h4>
<p>これは空のオブジェクトを拡張する意味です。</p>
<p>実行後、targetもoptionもかわらりません。</p>
<p>最も多く使われている実例は、jQueryのプラグインの開発です。</p>
<p>あるデフォルトのoptionを定義し、</p>
<p>ユーザが自分のニーズにあったoptionがあればそれを適用する感じです。</p>
<p>ここで大事なのは定義したデフォルトのoptionはかわりたくないのです。</p>
<p>なので、最初に空のオブジェクトを拡張しそれを何かの変数に</p>
<p>リファレンスをアサインします。</p>
<br/>
<pre class="brush:javascript">
var defaults = {};
var option = {};
var opts = $.extend({},defaults,option);

```
<p>これで変数optsは求めているデフォルトoptionとユーザが定義したoptionをマージ、拡張したものとなります。</p>

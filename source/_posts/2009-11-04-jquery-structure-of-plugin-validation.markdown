---
layout: post
title: 'jQuery Validationプラグインの仕組み、概要'
date: 2009-11-4
wordpress_id: 294
permalink: /blog/jquery-structure-of-plugin-validation
comments: true
categories: jQuery
---
<p>マインドマップでまとめました。ごらんください。</p>
<p>基本的な使い方はほかのサイトでもいっぱい書いてるため、</p>
<p>省略します。</p>
<p>大まかな仕組みだけをメモとして書きたいと思います。</p>

![](http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091104/20091104014304.jpg)

<br/>
<p>最初に理解してほしいのはルールと検証メソッドです。</p>
<p>これはペアとして使います。</p>
<p>まずルールでは検証したい項目のname属性と適用するルール名を書きます。</p>
<br/>
<p>例えばこんな感じです。</p>

```javascript
rules: {
  comment: {
    required: true,
    minlength: 5
  }
}
```

<p>これはname属性がcommentの要素に対してrequiredとminlengthのルールを適用する意味です。</p>
<p>ルールの詳細はつまり検証メソッドに実装されています。</p>
<p>required,minlengthなどはプラグインのbuilt-inルールです。</p>
<p>ここでrequired(必須)は実際どう実装されたかをちらっと見てみましょう。</p>
<p>(私も実は初めてです。。。)</p>
<p>以下抜粋したコードです。</p>

```js
required: function (value, element, param) {
    // check if dependency is met
    if (!this.depend(param, element)) return "dependency-mismatch";
    switch (element.nodeName.toLowerCase()) {
    case 'select':
        var options = $("option:selected", element);
        return options.length > 0 && (element.type == "select-multiple" || ($.browser.msie && !(options[0].attributes['value'].specified) ? options[0].text : options[0].value).length > 0);
    case 'input':
        if (this.checkable(element)) return this.getLength(value, element) > 0;
    default:
        return $.trim(value).length > 0;
    }
```

<p>一番デフォルトな行為はこれですね。</p>

```js
return $.trim(value).length > 0;
```

<p>単純にその項目のvauleをtrim(スペースを取り除く)して長さを確認してます。</p>
<p>その前に要素がselectの場合や、inputの場合の判断がそれぞれ違います。</p>
<p>最初にdependがあるのですが、これは簡単に言うとこの要素が必須項目となるのはある前提がある意味です。</p>
<br/>
<p>これが一番基本の仕組みとなってます。</p>
<p>これ以外もメッセージの内容や位置、</p>
<p>どのタイミングで検証するか、</p>
<p>エラーがある場合のコールバックなどを各自でカスタマイズできるようになってます。</p>
<br/>
<p>参考となったサイト：</p>

- 公式サイト(英語)：<a href="http://docs.jquery.com/Plugins/Validation" target="_blank">Plugins/Validation - jQuery JavaScript Library</a></li>
- 簡単な使い方が書いてます(日本語):<a href="http://d.hatena.ne.jp/sugyan/20090312/1236815025" target="_blank">高機能ライブラリ「jQuery」とそのPlugin「Validation」 - すぎゃーんメモ</a></li>
- カスタマイズに役に立つ情報があります(日本語):<a href="http://micelle.org/trash/jquery-validation-plugin" target="_blank">jQuery Validation Pluginメモ</a></li>


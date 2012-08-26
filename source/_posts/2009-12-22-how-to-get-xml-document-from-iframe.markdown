---
layout: post
title: 'jQueryでiFrame内のXML Documentを指定する方法'
date: 2009-12-22
wordpress_id: 644
permalink: /blog/how-to-get-xml-document-from-iframe
comments: true
categories: [nil]
---
iframeでXMLを読み込んた場合、XMLのdocumentを正しく指定すれば
普通のDOM操作のようにXMLに対して操作できます。
FirefoxとIEの取り方が異なるため、その方法を紹介します。
<br/>
## サンプル
こんなXMLファイルの中の各name要素のテキストを取るとします。

```xml

<?xml version=”1.0″ encoding=”utf-8″ ?>
<games>
    <game>World of Warcraft</game>
    <game>Warcraft III</game>
    <game>StarCraft</game>
    <game>Final Fantasy</game>
</games>
{% endcodeblock %}

## IEの場合XMLDocument
{% codeblock %}

$("iframe").attr("src",xmlUrl).one("load", function(){
    var xmlDocument = this.contentWindow.document.XMLDocument;
    $(xmlDocument).find("game").each(function(){
        var game = $(this).text();
       // ほかの処理
    });
});

{% endcodeblock %}

## Firefoxの場合ActiveElement
<pre class="brush:javascript">
$("iframe").attr("src",xmlUrl).one("load", function(){
    var xmlDocument = this.contentWindow.document.ActiveElement;
    $(xmlDocument).find("game").each(function(){
        var game = $(this).text();
       // ほかの処理
    });
});

```

xmlUrlは実際XMLファイルのURLです。
## 参考サイト
下記の英語掲示板で見つけたんです。
[How to Get XML Document from iFrame](http://p2p.wrox.com/ajax/60159-how-get-xml-document-iframe.html#post204115)

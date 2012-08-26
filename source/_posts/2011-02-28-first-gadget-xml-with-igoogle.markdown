---
layout: post
title: '初めてのgadget.xml with iGoogle'
date: 2011-2-28
wordpress_id: 1622
permalink: /blog/first-gadget-xml-with-igoogle
comments: true
categories: ["gadget", "Google", "howto", "tutorial", "Web"]
---
Googleが提供するGoogle Gadgets EditorでHello Worldを出力するgadgetを作ります。Gadgetについての基礎知識は飛ばします。[http://code.google.com/apis/gadgets/docs/gs.html](http://code.google.com/apis/gadgets/docs/gs.html)を参照してください。

## ソースを用意

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Module>
  <ModulePrefs title="Hello World!" />
  <Content type="html">
    <![CDATA[
      Hello, world!
    ]]

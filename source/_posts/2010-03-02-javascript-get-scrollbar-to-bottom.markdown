---
layout: post
title: 'スクロールを最下部に移動するJavascript'
date: 2010-3-2
wordpress_id: 1022
permalink: /blog/javascript-get-scrollbar-to-bottom
comments: true
categories: [nil]
---
スクロールバーを最下部に移動するJavascriptです。

普通のJavascriptで書くと

```javascript
function go_bottom(targetId){

    var obj = document.getElementById(targetId);

    if(!obj) return;

    obj.scrollTop = obj.scrollHeight;
}

```

完全にjQueryで書くとこんな感じ

```javascript
function go_bottom(targetId){

   var $obj = $("#" + targetId);

    if($obj.length == 0) return;

    $obj.scrollTop($obj*0*.scrollHeight);
}

```

<br>
これ以外はhiddenのinput項目を最下部に置いといて、
それをfocusするような技もありけど、、

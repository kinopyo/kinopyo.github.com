---
layout: post
title: 'jQuery checkbox checked event'
date: 2011-11-22
wordpress_id: 2521
permalink: /blog/jquery-checkbox-checked-event
comments: true
categories: ["checkbox", "jQuery"]
---
jQueryでチェックボックスの状態を監視するイベントは**click event**を使う。

チェックされたかを判断するには`$("#some_checkbox").is(':checked')`がいい。

CoffeeScriptでのサンプルコード：
{% gist 1385217 %}

**change event**も監視はできるが、取れる値は遅延されるみたいです。

{% blockquote http://api.jquery.com/change/ %}
The change event is sent to an element when its value changes. This event is limited to input elements, textarea boxes and select elements. For select boxes, checkboxes, and radio buttons, the event is fired immediately when the user makes a selection with the mouse, but for the other element types the event is deferred until the element loses focus.
{% endblockquote %}

参考：[http://forum.jquery.com/topic/jquery-checkbox-checked-event](http://forum.jquery.com/topic/jquery-checkbox-checked-event)

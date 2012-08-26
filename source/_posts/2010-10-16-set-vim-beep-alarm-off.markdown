---
layout: post
title: 'Vimビープ音を消す'
date: 2010-10-16
wordpress_id: 1484
permalink: /blog/set-vim-beep-alarm-off
comments: true
categories: ["editor", "IDE", "vim"]
---
ビープ音を消す。

vi ~/.inputrc
{% codeblock %}
set bell-style none
{% endcodeblock %}

vi ~/.vimrc
{% codeblock %}
set noerrorbells
set vb t_vb=
{% endcodeblock %}

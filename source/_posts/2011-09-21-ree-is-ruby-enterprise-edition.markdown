---
layout: post
title: 'REEとはRuby Enterprise Edition'
date: 2011-9-21
wordpress_id: 2250
permalink: /blog/ree-is-ruby-enterprise-edition
comments: true
categories: ["ree", "Ruby", "rvm"]
---
Rubyのエンタープライズ版のこと。Phusion Passengerと相性がよく、メモリ消費がだいぶ下がる利点があるそうです。
rvmでの紹介を引用しますと：
{% blockquote  %}
Ruby Enterprise Edition, MRI Ruby with several custom
patches for performance, stability, and memory.
{% endblockquote %}

[ガイドのドキュメント](http://www.rubyenterpriseedition.com/documentation.html)
[公式サイト](http://www.rubyenterpriseedition.com/)

現在は1.8.7が最新のようでrvmでインストールする場合は：
{% codeblock %}
rvm list known
rvm install ree
{% endcodeblock %}
[Install REE with RVM](http://beginrescueend.com/interpreters/ree/)

---
layout: post
title: 'zshrc Tabで大文字を無視して自動補完できるように'
date: 2011-7-1
wordpress_id: 1970
permalink: /blog/zshrc-tab-to-autocomplete-case-insensitive
comments: true
categories: ["Linux", "shell", "zshrc"]
---
下記を.zshrcに記述すればtabで大文字を無視して補完ができるようになります。

{% codeblock %}
## Case-insensitive completion
zstyle ':completion:# ' matcher-list 'm:{a-z}={A-Z}'
zstyle ':completion:# ' menu select=1
{% endcodeblock %}

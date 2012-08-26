---
layout: post
title: '開発者ブログに便利なキーワードや言語シンタックスなどを強調するCSS'
date: 2011-10-18
wordpress_id: 2370
permalink: /blog/wonderful-syntax-keyword-highlight-css-for-developer-blo
comments: true
categories: ["CSS", "WordPress"]
---
開発者のブログではよく各言語に関する変数名やメソッド名などのようなキーワードを強調して表示する必要がありますね。「AV女優.com 開発者ブログ」を見るとき「これだっ！」と思ったCSSをから借りました、@sunomaruさんに感謝です！

## CSS
{% codeblock %}

em {
    font-weight: normal;
    font-style: normal;
    white-space: nowrap;
    border: 1px solid #ccc;
    padding: 0.1em 0.6em;
    background: #f9f9f9;

    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
}

{% endcodeblock %}

## DEMO
*emタグ*で囲めばいいですよ〜どうでしょう〜！

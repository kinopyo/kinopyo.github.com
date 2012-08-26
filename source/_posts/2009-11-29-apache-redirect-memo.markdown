---
layout: post
title: 'ApacheサーバRedirectメモ、別のサイトに転送'
date: 2009-11-29
wordpress_id: 328
permalink: /blog/apache-redirect-memo
comments: true
categories: [nil]
---
<div class="section">
<p>サイトの引越しなどであるURLから別のURLへ転送する場合の話です。例えば JavaScript を利用して転送したり、HTMLの機能で転送させたりするかもしれません。</p>
<br/>
<p>しかしトップページでリダイレクトしてみても、別のページに直リンクしていた場合は旧ページが表示されることになります。そのような時に、Apache では httpd.conf に下記の１行を追加することで、別のＵＲＬへ転送させる事が可能です。</p>
{% codeblock %}
Redirect / <a href="http://www.yahoo.co.jp/" target="_blank">http://www.yahoo.co.jp/</a>
{% endcodeblock %}
<p>この例では Yahoo Japan へリダイレクトされますが、例えば <a href="http://www.example.com/base/" target="_blank">http://www.example.com/base/</a> にアクセスした場合でも <a href="http://www.yahoo.co.jp/base/" target="_blank">http://www.yahoo.co.jp/base/</a> へのリダイレクトが行われます。</p>
</div>

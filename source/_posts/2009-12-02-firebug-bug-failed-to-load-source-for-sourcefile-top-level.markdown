---
layout: post
title: 'Firebugがバグる：「Failed to load source for sourceFile top-level...」'
date: 2009-12-2
wordpress_id: 333
permalink: /blog/firebug-bug-failed-to-load-source-for-sourcefile-top-level
comments: true
categories: Javascript
---
<div class="section">
<h4>現象</h4>
<p>FirebugでJavaScriptをデバッグしようとするとこんなエラーになりました。</p>
{% codeblock %}
Failed to load source for sourceFile top-level <a href="http://sample.com/jquery.js" target="_blank">http://sample.com/jquery.js</a> script.tags( X| 1094 1095 ...
{% endcodeblock %}
<h4>環境</h4>
<ul>
<li>Firefox : 3.5.5</li>
<li>firebug : 1.4.5</li>
</ul>
<h4>調査</h4>
<p>ぐぐって見ましたが、いい回答が見つかりませんでした。</p>
<p><a href="http://blog.livedoor.jp/mapserver2007/archives/50793386.html" target="_blank">同じバグにあった方のブログ</a>でのやり方で、</p>
<p>firebugを1.3.0に戻してもダメでした。</p>
<p>さらに1.3.3ではこの問題が解決されたと、firebugの公式サイトの回答がありました。</p>
<br/>
<h4>結局は..</h4>
<p>エラーとなるプロジェクトを丸ごとTomcatサーバに置いたら、firebugで普通に見れました。</p>
<p>なぜかははっきり分かりませんが、この同じプロジェクトをずっとローカルで開発してきて、</p>
<p>firebugも全然問題なく使ったから、やたらおかしいです。</p>
</div>

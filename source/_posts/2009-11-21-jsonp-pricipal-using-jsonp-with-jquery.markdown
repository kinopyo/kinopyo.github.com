---
layout: post
title: 'JSONPの動作原理、jQueryでJSONPを利用'
date: 2009-11-21
wordpress_id: 313
permalink: /blog/jsonp-pricipal-using-jsonp-with-jquery
comments: true
categories: [nil, "webservice"]
---
<div class="section">
<p>前回の記事の続きとしてJSONPを勉強しました。</p>
<p>XMLHttpRequestはセキュリティ上の制限により、</p>
<p>クロスドメインの通信ができないです。</p>
<p>でもウェブサービスのようなどうしてもクロスドメインで通信したい場合があります。</p>
<p>その時の手段してあげられるのがこのScriptタグです。</p>
<p>(他の手段としてiframeやflashとリバースプロキシがあるそうです)</p>
<h4>JSONPとは</h4>
<p>これを一番分かりやすく説明してくれたのははてなキーワードだと思います。</p>
<blockquote title="このキーワードはまだ作成されていません - はてなキーワード" cite="http://d.hatena.ne.jp/keyword/JSONP">
<p>JSON with paddingの略</p>
<br/>
<p>Javascriptの非同期通信でよく使われるXMLHttpRequestオブジェクトにはSame-Originポリシーが存在し、クロスドメインアクセスができない。</p>
<br/>
<p>一方，scriptタグを用いると，ドメインの異なるサーバに置いているスクリプトファイルを読み込むことができる。この仕組みを利用し、scriptタグのsrcに、データを取得できるAPIのURLを指定し，ドメインの異なるサーバからデータを取得する仕組みの総称として、JSOPという言葉が使われる。JSONP用のAPIでは、関数名＋取得データをjson形式で表記して引数とした形式(例.callbackFunc({id:1000,name:aaa}))のレスポンスが一般的で、APIから返されるコールバック関数と同じ名前の関数(callbackFunc(jsonData))をクライアント側で定義しておけば、データを読み込んだ際にそのコールバック関数が実行される。動的にscriptのDOMを生成することで、非同期でデータが取得できるようになる。</p>
<br/>
<p>ただし、Same-Originポリシーが存在しないため、機密情報をAPIに含める際には十分な注意が必要である。</p>
<cite><a href="http://d.hatena.ne.jp/keyword/JSONP" target="_blank">JSONPとは - はてなキーワード</a></cite></blockquote>
<br/>
<h4>動作原理</h4>
<p>やはりソースコードで読むほうが早いだと思います。</p>
<p>以下gihyo.netからのサンプルコードです。</p>
<h5>クライアント側</h5>
{% codeblock %}

&#60;html&#62;
&#60;body&#62;
&#60;script&#62;
<span class="synIdentifier">function</span> callback(x)<span class="synIdentifier">{</span> <span class="synComment">// コールバック関数を定義</span>
<span class="synStatement">alert</span>(x<span class="synIdentifier">[</span><span class="synConstant">&#34;name&#34;</span><span class="synIdentifier">]</span>);
<span class="synIdentifier">}</span>
&#60;/script&#62;
&#60;script src=<span class="synConstant">&#34;http://mail.example.com/json.dat&#34;</span>&#62;&#60;/script&#62;
&#60;/body&#62;
&#60;/html&#62;
{% endcodeblock %}
<h5>データ提供サーバ側が用意したJSON</h5>
<p>json.datの中身</p>
<pre class="syntax-highlight">
callback( <span class="synIdentifier">{</span> <span class="synConstant">&#34;name&#34;</span> : <span class="synConstant">&#34;Fukumori&#34;</span> <span class="synIdentifier">}</span> );

{% endcodeblock %}
<br/>
<h5>簡単まとめ</h5>
<p>要はクライアント側で先にデータを扱うコールバック関数を定義</p>
<p>その名はデータの提供側とのコールバック関数名と一致する必要がある</p>
<p>scriptタグでデータ提供サーバのデータをインポート</p>
<p>すると先に用意したコールバック関数が走ってデータを処理する</p>
<br/>
<p>もっと詳しい動作原理とセキュリティはgihyoの特集を参照してください。</p>
<p>とても分かりやすいです。おすすめ！</p>
<p><a href="http://gihyo.jp/dev/serial/01/web20sec/0003?page=1" target="_blank">ここが危ない！Web2.0のセキュリティ：第3回　JSONPでのクロスドメインアクセス｜gihyo.jp … 技術評論社</a></p>
<br/>
<h4>jQueryでJSONPを使う</h4>
<p>jQueryのAjaxメソッドには$.getJSONがあります。</p>
<p>このメソッドはjQuery1.2からJSONPも対応したようです。</p>
<blockquote title="http://docs.jquery.com/Ajax/jQuery.getJSON#urldatacallback" cite="http://docs.jquery.com/Ajax/jQuery.getJSON#urldatacallback">
<p>As of jQuery 1.2, you can load JSON data located on another domain if you specify a JSONP callback. </p>
<cite><a href="http://docs.jquery.com/Ajax/jQuery.getJSON#urldatacallback" target="_blank">http://docs.jquery.com/Ajax/jQuery.getJSON#urldatacallback</a></cite></blockquote>
<p>利用方法はurlの最後に"?"付きのコールバックパラメータを追加することです。</p>
<p>例えば"example.com?callback=?"こんな感じです。</p>
<p>callbackの値は指定しなくてもよいみたい、</p>
<p>jQueryが自動で変換してくれます。</p>
<p>ただしコールバックのパラメータ名はデータ提供側によって異なるかもしれません。</p>
<p>例えばヤフーPipesは"_callback=?"を要求してるそうです。</p>
</div>

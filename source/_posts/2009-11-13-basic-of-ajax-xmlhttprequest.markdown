---
layout: post
title: '今更のAjax基本：XMLHttpRequestについて'
date: 2009-11-13
wordpress_id: 302
permalink: /blog/basic-of-ajax-xmlhttprequest
comments: true
categories: [nil]
---
<div class="section">
<h4>前記</h4>
<p>恥ずかしいことに今仕事でjQueryでばりばりAjaxを使ってますが、</p>
<p>実際はただjQueryの便利なAPIを使っただけで</p>
<p>Ajaxそのものの仕組みも分かっていません。</p>
<br/>
<p>今更ですが、その辺の基礎知識を勉強しできるだけ誰にも分かるように</p>
<p>自分が理解したことをメモとして残したいです。</p>
<br/>
<h4>XMLHttpRequestとは</h4>
<blockquote title="XMLHttpRequest:title - Wikipedia" cite="http://ja.wikipedia.org/wiki/XMLHttpRequest">
<p>JavaScriptなどのウェブブラウザ搭載のスクリプト言語で、サーバとのHTTP通信を行うための組み込みオブジェクト（API）である。</p>
<p>すでに読み込んだページからさらにHTTPリクエストを発することができ、ページ遷移することなしにデータを送受信できるAjaxの基幹技術である。</p>
<cite><a href="http://ja.wikipedia.org/wiki/XMLHttpRequest" target="_blank">XMLHttpRequest - Wikipedia</a></cite></blockquote>
<p>なるほど、これがAjaxを支える基幹ですね。</p>
<p>JavaScriptのオブジェクトです。</p>
<p>名前にXMLがついていますが、XML以外のデータも扱うことができます。</p>
<h4>XMLHttpRequestの歴史</h4>
<blockquote title="XMLHttpRequest:title - Wikipedia" cite="http://ja.wikipedia.org/wiki/XMLHttpRequest">
<p>XMLHttpRequestは、マイクロソフトがOutlook Web Access 2000のダイナミックHTMLによるウェブインターフェースに活用するため、1999年公開のInternet Explorer 5においてActiveXオブジェクトとして実装したのが始まりである[1]。その後、2001年にMozillaプロジェクトがこれと互換性のある組み込みオブジェクトをMozilla 0.9.7およびNetscape 7で実装し、アップルも2004年にSafari 1.2でMozillaと同様の組み込みオブジェクトを実装し始めた[2]。</p>
<p>このように徐々にInternet Explorer以外のブラウザにも実装されていったXMLHttpRequestは、2005年にAjaxによって一躍有名になった。</p>
<cite><a href="http://ja.wikipedia.org/wiki/XMLHttpRequest" target="_blank">XMLHttpRequest - Wikipedia</a></cite></blockquote>
<p>ようは各ブラウザが先にXMLHttpRequestオブジェクトを実装した、</p>
<p>そして偉い人がAjaxを提唱してから一気に有名になった訳ですよね。</p>
<br/>
<h4>XMLHttpRequestの仕組み</h4>
<p>AllAboutの記事に載ってた仕組みを自分で書きました。</p>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091114023141" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091114/20091114023141.jpg" alt="f:id:kinopyo:20091114023141j:image" title="f:id:kinopyo:20091114023141j:image" class="hatena-fotolife"></a></p>
<p>XMLHttpRequestのメソッドやプロパティは多分これからも使うことはありませんが、</p>
<p>一応図で見て大体把握しておきましょう。</p>
<p>openメソッドはイニシャライズみたいな感じで、GETかPOSTか、URLなどのパラメータを受け取ります。</p>
<p>そしてsendメソッドによるサーバに送信する前に、onreadystatechangeイベントのコールバックでステータスを判断しresponseTextやresponseXML プロパティのデータを返す流れですね。</p>
<blockquote>
<p>拡張機能から XMLHttpRequest を使いたい場合は、非同期でロードするようにすべきです。</p>
<p>非同期の使用法では、データを受け取ったときにコールバックを受け取ります。</p>
<p>そのため、リクエストが発生している間はブラウザは通常どおりに動き続けます。 </p>
</blockquote>
<h4>XMLHttpRequestの宣言</h4>
<blockquote title="http://ponpon-village.net/ajax/xmlhttp.htm" cite="http://ponpon-village.net/ajax/xmlhttp.htm">
<p>ブラウザにより異なる。</p>
<p>IE では、ActiveXObject("Microsoft.XMLHTTP") を使用。</p>
<p>IE のバージョンによっては、ActiveXObject("Msxml2.XMLHTTP.5.0") , ActiveXObject("Msxml2.XMLHTTP.4.0") ,</p>
<p>ActiveXObject("Msxml2.XMLHTTP.3.0") , ActiveXObject("Msxml2.XMLHTTP") なども使用出来る。</p>
<p>Mozilla 系ブラウザでは、XMLHttpRequest() を使用。</p>
<cite><a href="http://ponpon-village.net/ajax/xmlhttp.htm" target="_blank">http://ponpon-village.net/ajax/xmlhttp.htm</a></cite></blockquote>
<h4>非同期通信のサンプルコード</h4>
```javascript

  var req;
  if( window.XMLHttpRequest){
    req = new XMLHttpRequest();
  }else if(window.ActiveXObject){
    try {
      req = new ActiveXObject("MSXML2.XMLHTTP");
    } catch (e) {
      req = new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  if (req) {
    req.open('GET', 'http://www.example.com/contents.txt');
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        document.write(req.responseText);
      }
    }
    req.send(null);
  }

```
<p>req.statusはHTTPレスポンスコードで200はOK、404はよく見るNot Foundです。</p>
<br/>
<h4>注意点</h4>
<ul>
<li>file:/// および ftp:// は HTTP ステータスを返しません。そのため、status についてはゼロが、statusText については空文字列を返されます。</li>
<li>XMLHttpRequestは、セキュリティを考慮して、リクエストを送信できるのは同一ドメイン内に制限されています。</li>
</ul>
<br/>
<p>とりあえず自分が気になった点を書きました。</p>
<p>肝心なところはonreadystatechangeでのコールバックだと思います。</p>
<h4>次回</h4>
<p>XMLHttpRequestは同一ドメイン内に制限されていますね。</p>
<p>別のドメインとのやり取りはどう行うのかを次のテーマにします。</p>
<p>なんかJSONPとかクロスドメインなどのキーワードがよく見えますが、</p>
<p>その辺をはっきりしようと思います。</p>
<h4>参考サイト：</h4>
<p><a href="http://ja.wikipedia.org/wiki/XMLHttpRequest" target="_blank">XMLHttpRequest - Wikipedia</a></p>
<p><a href="https://developer.mozilla.org/Ja/XMLHttpRequest" target="_blank">XMLHttpRequest - MDC</a></p>
<p><a href="http://allabout.co.jp/internet/javascript/closeup/CU20050515A" target="_blank">Ajaxはじめの一歩　XMLHttpRequest - ［JavaScript］All About</a></p>
</div>

---
layout: post
title: 'jQueryでajax：非同期通信時、実行順番を保障する方法'
date: 2009-10-31
wordpress_id: 289
permalink: /blog/jquery-ajax-get-order-guranteed-async-transfer
comments: true
categories: [nil]
---
<div class="section">
<h4>前記：</h4>
<p>この記事では多数のAJAX通信が発生した際、</p>
<p>「非同期」の処理順番を保障する方法を検討します。</p>
<p>すべては私個人の経験なので、もしこれよりもっどいい方法があれば</p>
<p>ぜひ教えてください。</p>
<p>実際この問題にぶつかった際の考えの流れで書いています。</p>
<p>使えない案や、懸念がある案も全部述べたので、文章が長くなってしまいました。</p>
<p>開発する当時はまだインターネットにつながらないので、</p>
<p>何の情報も取得できず、考えたんです。</p>
<p>後でネットで調べたら<a href="http://plugins.jquery.com/project/ajaxqueue" target="_blank">Ajax Queue</a>のプラグインが</p>
<p>同じことをしてくれます。</p>
<p>このプラグインを使った後に所感を書く予定です。</p>
<a name="seemore"></a>
<br/>
<br/>
<h4>本題</h4>
<br/>
<p>AJAXはご存知だと思います。非同期通信でページをリフレッシュせずに動的に通信ができる、</p>
<p>リッチなウェブアプリケーションを構築する上で不欠けんな存在であります。</p>
<br/>
<p>一方、この「非同期」というのは特徴であり、たまには厄介なことになります。</p>
<p>例えばajaxの処理と普通の処理の実行順序を気にするとき、</p>
<p>コードの書いた順番とおり実行する保障はありません。</p>
<br/>
<h5>jQueryでコードを書くと、こんな感じです。</h5>
<br/>
```javascript

$.ajax(option);
alert('ajax done');
{% endcodeblock %}
<p>ここでajax通信が終わってからalertが出るように見えますがそうとは言い切れないです。</p>
<p>ajax通信が終わってない段階でalertが出るかもです。</p>
<p>ならばどうしたらいいんですか？</p>
<br/>
<p>一番簡単なのはjQueryが用意したコールバック関数です。</p>
{% codeblock %}

$.load(url,[data],[callback])
$.get(url,[data],[callback],[returnType])
$.getJSON(url,[data],[callback])
...
{% endcodeblock %}
<p>などがあります。</p>
<p>[data]がなければ、コールバックの関数を二番目のパラメータで書いてもOKです。</p>
<p>jQueryは内部的に判断してくれます。dataなのか、コールバックかを。</p>
<br/>
<p>そして$.ajaxにはoptionでsuccessやcompleteにコールバックを設定できます。</p>
<p>これらを用いて上記のコードを以下のように改善できます。</p>
<br/>
<p>$.ajax(option)の場合</p>
<pre class="brush:javascript">
.load(url,[data],[callback])
$.get(url,[data],[callback],[returnType])
$.getJSON(url,[data],[callback])
...
{% endcodeblock %}
<br/>
<h5>ここで問題2に入ります。</h5>
<p>もし必要なajax通信が一つ以上で、すべてのajax通信が完了した後に何かの処理が実行したい場合は</p>
<p>どうすればいいでしょうか。</p>
<br/>
<p>コードで書くと、こんな感じです。</p>
<pre class="brush:javascript">
$.ajax(option1);
$.ajax(option2);
$.ajax(option3);
function(){
	alert('all ajax done');
}
{% endcodeblock %}
<br/>
<ul>
<li>案1:ajaxのグローバル関数</li>
</ul>
<br/>
<p>jQueryではajaxのグローバル関数と呼ばれるいくつかの関数を提供してくれました。</p>
<p>それらは以下のようなものです。</p>
<br/>
<pre class="brush:javascript">
.ajaxComplete(handler)
.ajaxSuccess(handler)
...
{% endcodeblock %}
<br/>
<p>これらはDOM上のどの要素にも設定でき、AJAX通信が行われる際に呼び出されます。</p>
<br/>
<p>例えば以下のようなコードがあります。</p>
<pre class="brush:javascript">
$(document).ajaxComplete(function(){
	alert('ajax complete');
});
{% endcodeblock %}
<br/>
<p>これはdocument要素において、何かのajax通信が完了したらパラメータのコールバックを実行する意味です。</p>
<p>selectorにはもっと範囲を縮むことができます。</p>
<p>例えば</p>
<pre class="brush:javascript">
<div id='content'>...</div>
{% endcodeblock %}
<p>のHTMLがあるとします。</p>
<pre class="brush:javascript">
$('#content').ajaxComplete(function(){
	alert('content ajax complete');
});
{% endcodeblock %}
<p>これならidがcontentのdivにajax通信が完了する際のコールバックを示しています。</p>
<br/>
<p>しかしこれだけではまだ問題2を解決できません。</p>
<pre class="brush:javascript">
$.ajax(option1);
$.ajax(option2);
$.ajax(option3);
$(document).ajaxComplete(function(){
	alert('ajax complete');
});
{% endcodeblock %}
<br/>
<p>こう書くと、任意の通信が完了したらこのajaxCompleteが呼ばれ、</p>
<p>ほかの二つの処理がどうなってるかはまったくわからないです。</p>
<br/>
<p>ここで$.ajax(option)のoptionに注目しましょう。</p>
<p>optionにはglobalというフラグがあり、デフォルトはtrueになってます。</p>
<p>その役割はグローバル関数の監視対象にするかしないかです。</p>
<p>このフラグをfalseに設定すれば、該当のajax通信がどうなってもグローバル関数はトリガーしません。</p>
<p>なので、通信処理1と2のglobalフラグをfalseに設定し、最後の処理3をtrueに設定すれば、</p>
<p>処理3が実行完了した際、グローバルのajaxCompleteが実行されます。</p>
<br/>
<p>改善したコードは以下になります。一部省略しました。</p>
<pre class="brush:javascript">
var option1 = {
	global : false
	// ほかのurlなどの設定
}

var option2 = {
	global : false
	// ほかのurlなどの設定
}

var option3 = {
	global : true
	// ほかのurlなどの設定
}

$.ajax(option1);
$.ajax(option2);
$.ajax(option3);
$(document).ajaxComplete(function(){
	alert('ajax complete');
});
{% endcodeblock %}
<p>しかし、ここで懸念事項があります。</p>
<p>ajax処理の間の順番はどうなるか断言できません。</p>
<p>つまりこういった順番で実行されたかもです。</p>
<br/>
<p>処理1実行</p>
<p>処理1完了</p>
<p>処理2実行</p>
<p>処理3実行</p>
<p>処理3完了</p>
<p>グローバルの関すを呼び出す</p>
<p>処理2完了</p>
<br/>
<p>軽く動作確認ではちゃんと思ったとおり1,2,3で動いていますが、</p>
<p>やはりその辺が気になって、やめました。</p>
<br/>
<ul>
<li>案2：ajaxをラッパーした関すを作る</li>
</ul>
<br/>
<p>$.ajax(option)のoptionにはcompleteというのがあります。</p>
<p>successと使い方は同じで、successは通信が成功した際実行するコールバックで、</p>
<p>completeは完了した際のコールバックです。</p>
<br/>
<p>なので今回思い出したのアイディアはこのcompleteに次のajax処理を指定して、</p>
<p>さらにその次のajaxのcomplete optionにも後のajax処理を指定したらどうでしょうか。</p>
<p>尻尾をどんどん噛んでいく蛇のイメージです。</p>
<br/>
<p>(抜粋)</p>
<pre class="brush:javascript">
var option1 = {
	complete : $.ajax(option2)
}

var option2 = {
	complete : $.ajax(option3)
}

var option3 = {
	complete :function(){
				alert('ajax all complete');
	}
}

$.ajax(option1);
{% endcodeblock %}
<p>動作確認でOKでした。</p>
<p>completeオプションで前のajax通信が必ず完了した後に次のajax通信を始まることを</p>
<p>保障しています。</p>
<p>これでajaxのチェインができました。</p>
<br/>
<p>これをちょっと綺麗にラッパーした関数を作りました。</p>
<p>ご覧ください。</p>
<pre class="brush:javascript">
function doOrderGuaranteedAjax(ajaxOptionArray, allCompleteHandler){
    var defaults = {
	type : "GET",
	dataType : "text",
	complete : function() {
	// 最初の要素を削除
	ajaxOptionArray.shift();
	// すべての通信が完了した場合
	if (ajaxOptionArray.length == 0 ) {
		// コールバックが設定された場合
		if (allCompleteHandler) {
			allCompleteHandler();
		}
	} else {
		// 通信配列にまだ通信が残っている場合
		option = ajaxOptionArray[0];
		// ajaxのオプションを次の通信に切り替え
		opts = $.extend({}, defaults, option);
		// 通信を開始
		$.ajax(opts);
	};
	}
};

    // 初期指定
    var option = ajaxOptionArray[0];
    var opts = $.extend({}, defaults, option);
    // 一回のみ実行
    $.ajax(opts);

};

{% endcodeblock %}
<br/>
<p>まず$.ajax(option)のoptionを順番でpushした配列が第一パラメータで渡されます。</p>
<p>2～23行まではデフォルトのoptionを構築し、一回目の処理は29行から走ります。</p>
<p>そしてデフォルトのoptionではcompleteで実行完了した処理を配列から削除(7行)します。</p>
<p>配列にまだ待ち状態の処理があるならオプションを次の通信に切り替えます(14～20行)。</p>
<p>もし配列にある処理が全部実行完了したら、コールバックを呼びます(9～13行)。</p>
<br/>
<p>使い方はまずオプションを一つの配列にpushし、その配列を一番目のパラメータで、</p>
<p>コールバックを二番目のコールバックで渡します。</p>
<pre class="brush:javascript">
var optionArray = [];
optionArray.push(option1);
optionArray.push(option2);
optionArray.push(option3);
doOrderGuaranteedAjax(optionArray, function(){
	alert('all complete');
});

```
<p>arrayのpushとshiftを利用し、スタック構造を真似してます。</p>
<p>push() は array の最後に配列要素を加えます。</p>
<p>shift() は array の最初の要素を削除します。</p>
<br/>
<p>これでファーストイン、ファーストアウトFIFOが実現し、</p>
<p>処理の順番が保ちます。</p>
</div>

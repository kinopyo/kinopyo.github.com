---
layout: post
title: 'IEのActiveXコントロールに関する警告を非表示にするには'
date: 2009-11-18
wordpress_id: 310
permalink: /blog/turn-off-warnings-of-activex-in-ie
comments: true
categories: IE
---
<div class="section">
<p>開発においてローカルでいろいろテストすることが多いでしょう。</p>
<p>その時ブラウザを開くと「セキュリティ保護のため、このコンピューターにアクセスする可能性のあるスクリプトやActiveXコントロールを実行しないよう、IEで制限されています。オプションを表示するには、ここをクリックしてください」という警告がそのたびに出て、気分が悪くなっちゃいます。IEの[セキュリティ]タブをいじってもファイルはローカルなので、効きません。</p>
<br/>
<h4>解決方法</h4>
<ul>
<li>[マイコンピュータ内のファイルでのアクティブコンテンツの実行を許可する*]をチェックしIEを再起動(<span style="font-weight:bold;">*がついてるので再起動は絶対必要とされている</span>)</li>
</ul>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091117012539" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091117/20091117012539.jpg" alt="f:id:kinopyo:20091117012539j:image:right" title="f:id:kinopyo:20091117012539j:image:right" class="hatena-fotolife hatena-image-right"></a></p>
<ul>
<li><a href="http://d.hatena.ne.jp/kinopyo/20091116/1258379152" target="_blank">IEセキュリティにマイコンピュータゾーンを追加する方法 - kinopyoの日記 </a>で紹介する方法でセキュリティにマイコンピュータのゾーンを追加</li>
<li>IEの[ツール] → [インターネット オプション] → [セキュリティ] タブをクリックし、[レベルのカスタマイズ] をクリックします。</li>
<li>「ActiveXコントロールとプラグインの実行」をチェック</li>
</ul>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091117012540" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091117/20091117012540.jpg" alt="f:id:kinopyo:20091117012540j:image" title="f:id:kinopyo:20091117012540j:image" class="hatena-fotolife"></a></p>
<ul>
<li>「スクリプトを実行しても安全とマークされているActiveXコントロールのスクリプトの許可」をチェック</li>
</ul>
<p><a href="http://f.hatena.ne.jp/kinopyo/20091117012541" class="hatena-fotolife" target="_blank"><img src="http://f.hatena.ne.jp/images/fotolife/k/kinopyo/20091117/20091117012541.jpg" alt="f:id:kinopyo:20091117012541j:image" title="f:id:kinopyo:20091117012541j:image" class="hatena-fotolife"></a></p>
<h4>バージョン情報</h4>
<ul>
<li>OS: Windows XP</li>
<li>IE: IE8</li>
</ul>
<br/>
<p>参考サイト：<a href="http://stackoverflow.com/questions/394298/how-to-disable-activex-control-may-be-unsafe-popup" target="_blank">How to disable &#34;ActiveX Control May Be Unsafe&#34; popup - Stack Overflow</a></p>
</div>

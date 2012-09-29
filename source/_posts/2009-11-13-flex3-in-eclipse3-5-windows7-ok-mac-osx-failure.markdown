---
layout: post
title: 'Flex3 in Eclipse3.5( Windows7 OK, Mac OSX 失敗)'
date: 2009-11-13
wordpress_id: 303
permalink: /blog/flex3-in-eclipse3-5-windows7-ok-mac-osx-failure
comments: true
categories: Flex
---
<div class="section">
<p>Flex3 builderにはスタンドアロンとEclipseのプラインの形があります。</p>
<p>しかしFlex Builder 3.0.2 Professional Plug-Inは Eclipse3.2.2、3.3、3.4しか対応していません。</p>
<p>Eclipse3.5に載せる場合はFlexのインストール完了後</p>
<p>以下のように設定してください。</p>
<br/>
<ul>
<li>Eclipseルートディレクトリ\linksフォルダにあるcom.adobe.flexbuilder.feature.core.linkファイルを開く</li>
<li>path=&#60;Flex Builder 3 Plug-inのディレクトリ&#62;　に編集
<ul>
<li>デフォルトではpath=以降のディレクトリが書いてあるはずなので、"path="だけを追加すればOK</li>
</ul>
</li>
<li>Eclipseを再起動し、パースペクティブにはFlex開発を選択</li>
</ul>
<br/>
<p>Windows7でOKでした。MacOS Xで同じやり方ではダメでした。</p>
<p>ネットでもいろいろ検索しましたが、</p>
<p>やはりMacではうまく動作してくれないみたいで、</p>
<p>しょうがなくスタンドアロンをインストールしました。</p>
<br/>
<p>参考サイト：<a href="http://tpfields.xrea.jp/tips/develop-air-with-flex-builder-3-plugin-and-eclipse-35-galileo.html" target="_blank">  Flex Builder 3 Plug-in: &#8220;Eclipse 3.5 Galileo&#8221;でFlex開発 | t.p.fields - web+tech info</a></p>
</div>

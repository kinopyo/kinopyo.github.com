---
layout: post
title: 'IEセキュリティにマイコンピュータゾーンを追加する方法'
date: 2009-11-16
wordpress_id: 306
permalink: /blog/add-mycomputer-zone-to-ie-security
comments: true
categories: IE
---
## 概要 ##

<p>ローカルのファイルを参照する際のセキュリティを変更したとします。</p>
<p>IEの[インターネット オプション] ダイアログ ボックスの [セキュリティ] タブでは</p>
<p>ローカルのマイコンピュータのセキュリティゾーンがデフォルトでは非表示になっています。</p>
<p>それを表示させるにはレジストリを編集する必要があります。</p>

## 動作環境 ##

<p>以下の環境で動作確認済みです。</p>
<p>その他の環境についてはマイクロソフトのサポートヘルプを参照してください。</p>
<ul>
<li>OS: Win XP</li>
<li>IE: IE8</li>
</ul>

## 方法 ##

<blockquote title="http://support.microsoft.com/kb/315933" cite="http://support.microsoft.com/kb/315933">
<p>警告 : レジストリ エディタの使い方を誤ると、深刻な問題が発生することがあります。</p>
<br/>
<p>[インターネット オプション] ダイアログ ボックスの [セキュリティ] タブにマイ コンピュータのセキュリティ ゾーンを表示するかどうかは、次のレジストリ キー内にある Flags 値によって設定できます。</p>
<p>HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet Settings\Zones\0</p>
<p>Flags 値は DWORD 値です。Flags 値のデータ値を 47 (16 進) に設定すると、マイ コンピュータのセキュリティゾーンが表示されるようになります。Flags 値のデータ値を 21 (16 進) に設定すると、マイ コンピュータのセキュリティゾーンが非表示になります。 </p>
<cite><a href="http://support.microsoft.com/kb/315933" target="_blank">http://support.microsoft.com/kb/315933</a></cite></blockquote>

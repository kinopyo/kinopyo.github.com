---
layout: post
title: 'Flex3: trace()ログ出力の設定、Windowsの隠しフォルダに注意'
date: 2009-11-12
wordpress_id: 301
permalink: /blog/flex3-settings-trace-log-be-careful-of-windows-hidden-folder
comments: true
categories: Flex
---
<p>Flexのtrace()はログ出力の機能です。</p>
<p>Javaに慣れましたので、trace()もてっきりコンソールにも</p>
<p>出力すると思っちゃいましたが、</p>
<p>実はそうではありません。</p>
<p>trace()を使うにはまず設定が必要です。</p>

## バージョン情報 ##

- Flex3 Builder: Version 3.0 (build 3.0.2.214193)
- Flash Player: 9,0,124,0

## デバッガ版のFlash Player ##

<p>Flex3 Builderをダウンロードしそこに含んだ</p>
<p>for IE, FirefoxなどのFlash Playerを全部インストールしてください。</p>
<p>そのほうが万全で楽です。</p>
<p>既にFlash Playerがインストールされたとしても、</p>
<p>それがデバッガ版じゃないとダメですよ。</p>

## 設定ファイルの作成 ##

- `mm.cfg`という設定ファイルを下記場所に作成
<table>
<tr><th>オペレーティングシステム</th><th>ファイルの作成場所</th></tr>
<tr><td>Macintosh OS X</td><td>/Library/Application Support/Macromedia </td></tr>
<tr><td>Windows Vista/ <span style="color:#0000FF;">Windows7</span><span class="footnote"><a href="/kinopyo/#f1" name="fn1" title="AdobeのサイトにはWindows7は載ってません、ここは私個人で検証済み">*1</a></span></td><td>C:\Users\username </td></tr>
<tr><td>Windows 2000/XP</td><td>C:\Documents and Settings\username </td></tr>
<tr><td>Windows 95/98/ME</td><td>%HOMEDRIVE%\%HOMEPATH% </td></tr>
<tr><td>Linux</td><td>/home/username </td></tr>
</table>

## 設定ファイルの編集 ##

<p>作成したmm.cfgファイルを下記のように編集すれば、エラーのレポートとトレースログが有効になります。</p>
{% codeblock %}
ErrorReportingEnable=1
TraceOutputFileEnable=1
{% endcodeblock %}
<p>TraceOutputFileNameというログファイルの名前と出力先を指定するプロパティもありますが、</p>
<blockquote title="Adobe Flex3 ヘルプ" cite="http://livedocs.adobe.com/flex/3_jp/html/help.html?content=logging_04.html#78337">
<p>Flash Player 9 Update 以降では、TraceOutputFileName プロパティは無視され、</p>
<p>オペレーティングシステムごとに異なるハードコードされた場所に flashlog.txt ファイルが格納されます。</p>
<cite><a href="http://livedocs.adobe.com/flex/3_jp/html/help.html?content=logging_04.html#78337" target="_blank">Adobe Flex3 ヘルプ</a></cite></blockquote>
<p>との懸念もあり、各自の環境を確認した上でお使いください。</p>
<p>私のFLex3 Builder, Flash 9では無効でした。</p>

## ログファイルの場所 ##

<p>オペレーティングシステムごとに異なるハードコードされた場所に flashlog.txt ファイルが格納されます。</p>
<table>
<tr><th>オペレーティングシステム</th><th>ログファイルの場所</th></tr>
<tr><td>Macintosh OS X</td><td>/Users/username/Library/Preferences/Macromedia/Flash Player/Logs/  </td></tr>
<tr><td>Windows Vista/ <span style="color:#0000FF;">Windows7</span><span class="footnote"><a href="/kinopyo/#f2" name="fn2" title="AdobeのサイトにはWindows7は載ってません、ここも私個人で検証済み">*2</a></span></td><td>C:\Users\username\AppData\Roaming\Macromedia\Flash Player\Logs </td></tr>
<tr><td>Windows 95/98/ME/2000/XP</td><td>C:\Documents and Settings\username\Application Data\Macromedia\Flash Player\Logs </td></tr>
<tr><td>Linux</td><td>/home/username/.macromedia/Flash_Player/Logs/ </td></tr>
</table>
<p>Windowsの方は特に隠しフォルダに注意してください。</p>
<p><span style="color:#0000FF;">Windows7のAppDataフォルダ、またその他WindowsのApplication Dataフォルダはデフォルトで隠しフォルダになっている</span>ため、</p>
<p>先にフォルダ構成で隠しフォルダを表示させてから、ログファイルを確認してください。</p>

## テストコード ##


```html
<</span>?xml version=&#34;1.0&#34; encoding=&#34;utf-8&#34;?&#62;
<mx:Application xmlns:mx=&#34;http://www.adobe.com/2006/mxml&#34;
layout=&#34;absolute&#34; creationComplete=&#34;init()&#34;&#62;
<mx:Script&#62;
<![CDATA[
<private function init():void{
trace(&#34;Hello World&#34;);
}
]]&#62;
</mx:Script&#62;
</mx:Application&#62;
```

<p>これでログファイルには「Hello World」と出力されるはずです。</p>

## 特記事項 ##

<p>こういう記事はGoogleで検索すればいっぱい出てくるはずで、</p>
<p>自分でもう一回書こうと全然思わなかったのですが、</p>
<p>OSやFlash Playerのバージョンで設定内容が異なり、</p>
<p>私が最初見つかった幾つかのサイトでの書き方では</p>
<p>どう設定してもまったくログが出力されなかったのです。</p>
<p>アンインストールしたり、設定ファイルのエンコードまで</p>
<p>神経質になってしまいました。</p>
<p>その記事を書いた方々に別に文句はありませんが、やはり</p>
<p><span style="font-size:large;font-weight:bold;">技術記事はバージョン情報の提示を心がけましょう。</span></p>
<p>私もこれからは注意します。</p>
<p>参考サイト：<a href="http://livedocs.adobe.com/flex/3_jp/html/help.html?content=logging_04.html#78337" target="_blank">Adobe Flex 3 ヘルプ</a></p>
</div>
<div class="footnote">
<p class="footnote"><a href="/kinopyo/#fn1" name="f1">*1</a>：AdobeのサイトにはWindows7は載ってません、ここは私個人で検証済み</p>
<p class="footnote"><a href="/kinopyo/#fn2" name="f2">*2</a>：AdobeのサイトにはWindows7は載ってません、ここも私個人で検証済み</p>

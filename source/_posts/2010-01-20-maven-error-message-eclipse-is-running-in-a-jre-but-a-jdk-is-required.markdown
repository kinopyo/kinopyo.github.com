---
layout: post
title: 'EclipseにMavenプラグインインストール後のエラー: "Eclipse is running in a JRE, but a JDK is required"'
date: 2010-1-20
wordpress_id: 834
permalink: /blog/maven-error-message-eclipse-is-running-in-a-jre-but-a-jdk-is-required
comments: true
categories: [nil]
---
EclipseにMavenのプラグインをインストールした後にEclipseを起動したら以下のエラーメッセージが出ました。

<a title="Maven Integration for Eclipse JDK Warning" rel="lightbox*pics834*" href="http://kinopyo.com/wp-content/uploads/2010/01/MavenIntegrationforEclipseJDKWarning.jpg"><img class="attachment wp-att-835 " src="http://kinopyo.com/wp-content/uploads/2010/01/MavenIntegrationforEclipseJDKWarning.jpg" alt="Maven Integration for Eclipse JDK Warning" width="441" height="181" /></a>
{% codeblock %}The Maven Integration required that Eclipse be running in a JDK,
because a number of Maven core plugins are using jars from the JDK.

Please make sure the -vm option in eclipse.ini is pointing to a JDK and
verify that Installed JREs are also using JDK installs.{% endcodeblock %}
使ってた環境は確かにJREのみがあってJDKはなかったんです。
回避策としては
+  JDKをインストール
+  eclipse.iniに-vmオプションでインストールしたJDKと関連付ける

### JDKのインストール
JDKのダウンロードはこちら:[Sun Java](http://java.sun.com)
インストール後JAVA_HOMEとPATH環境変数もあわせて編集
エクスプローラ→マイコンピュータ→右クリック→プロパティ→詳細設定タブ→環境変数ボタン

### eclipse.iniの編集
jdkのパスはインストール先に合わせて下記内容を追記
vmの後に<strong>改行が必要</strong>

```plain
 -vm
C:\Java\jdk1.6.0_18\bin\javaw.exe

```
これで再起動したらエラーメッセージは出なくなりました。

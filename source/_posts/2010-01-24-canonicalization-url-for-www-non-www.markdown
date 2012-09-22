---
layout: post
title: '自分のサイトURLを"wwwあり"か"wwwなし"に正規化する方法'
date: 2010-1-24
wordpress_id: 894
permalink: /blog/canonicalization-url-for-www-non-www
comments: true
categories: SEO
---
"wwwあり"か"wwwなし"はSEO的には優劣はありませんし、
どっちを使うかはたいてい各人の好き嫌いで決まっています。
例えばこのサイトの場合www.kinopyo.comとkinopyo.comで全部アクセスできますが、
私は"wwwあり"で正規化ています。
この正規化というのは非常に重要で、検索エンジンに対しての知らせです。
Googleのヘルプによると下記の解説になります。

{% blockquote %}

使用するドメインとは、サイトのページをインデックスに登録する際に使用するドメインです。使用するドメインを http://www.example.com と指定すると、http://example.com の形式のリンクが検出された場合、Google ではそのリンクを http://www.example.com として処理します。また、検索結果に表示する URL は設定に基づいて決まります。

{% endblockquote %}

なので"wwwあり"と"wwwなし"が同じサイトであれば
正規化する必要があります。

## 正規化する方法
.htaccessが使える環境では.htaccessを下記のように設定
.htaccessファイルはサイトのルートディレクトリに置いてください。
例えばこのブログのURLはwww.kinopyo.com/blogになっていますが、
.htaccessファイルはwww.kinopyo.comのディレクトリに置いてあればOKです。
設定に基づいてリダイレクトします。

### wwwありに統一

```plain
RewriteEngine on
RewriteCond %{HTTP_HOST} ^example\.com [NC]
RewriteRule ^(.*)$ http://www.example.com/$1 [R=301,L]
```

### wwwなしに統一 ###

```
RewriteEngine on
RewriteCond %{HTTP_HOST} ^www.example\.com *NC*
RewriteRule ^(.# )$ http://example.com/$1 *R=301,L*
```

※”example.com”は自分のドメイン名に置き換えてください。

## Googleウェブマスターツールでの設定
Googleウェブマスターツールは自分のサイトとGoogle検索の関係いついて
いろいろ設定できる支援ツールです。
ここでは自分が"www有り無し"をGoogleに伝えるための設定をします。
そうしないとGoogleは"www有り無し"をそれぞれ別のページへの異なる参照として処理されます。

### Googleウェブマスターツール使うにはまずサイトを登録
サイトを正規化するためにはwwwありとwwwなしの両方を登録する必要があります。

{% img http://www.kinopyo.com/wp-content/uploads/2010/01/google_webmaster_tool.jpg Googleウェブマスターツール %}

Googleが提供するMetaデータをサイトのページに貼り付けることでサイトが確認されます。
(具体的な認証方法はGoogleのヘルプを見てください)

### 使用するドメイン
登録完了後はサイトを選択し、「サイト設定→設定→使用するドメイン」で
利用するドメイン、つまりwww有りなしを指定してください。

{% img http://www.kinopyo.com/wp-content/uploads/2010/01/google_webmaster_tool_setting.jpg Googleウェブマスターツール %}

## Wordpressお使いの方は注意を
Wordpressの「設定→一般」でサイトURLが正しく設定されるか確認してください。
もし.htaccessでは"wwwあり"で指定しWordpressでは"wwwなし"と指定した場合は
無限ループとなるため、サイトがエラーとなり表示できなくなります。
Wordpressの仕様は調べていないが、どうやらWordpressの設定によりリダイレクトするように見えます。

## 参考サイト
[wwwあり／wwwなし、どちらを使用するか?](http://www.suzukikenichi.com/blog/which-do-you-prefer-www-or-non-www/)

---
layout: post
title: 'Mixiモバイルアプリ：フォームPost時のOAuth Signature検証失敗について'
date: 2011-8-10
wordpress_id: 2089
permalink: /blog/mixi-mobile-oauth-signature-failure-when-posting-form
comments: true
categories: ["form", "Mixi", "mixi", "oauth", "post", "signature"]
---
## 現象
MixiモバイルアプリのフォームからPOSTするとOAuth Signatureが不一致で検証が通らない。

## デバッグ
フォームをPOSTするときはフォーム内のデータがOAuthのBase StringのNormalize Request Parametersに含まれます。
これはOAuthに仕様に準じてます（[http://oauth.net/core/1.0a/#anchor13](http://oauth.net/core/1.0a/#anchor13)）が、
なぜかMixiだと通れないです。

```html
<form action="?guid=ON&url=http%3A%2F%2Fexample.com%2Ffoo%2F" method="post">
  <input name="field1" type="text" value="value1" />
  <input type="submit" value="送信" />
</form>

```

こんなフォームがあるとして、中のfield1がNormalize Request Parametersに存在するとダメだってことが検証でわかりました。

## 回避方法
フォームPOSTする箇所を特定して、その場合はOAuth Signatureを検証しないようにしました。


## 参考リンク
同じ現象にあった方がいました: 

- [Mixi OAuth POST時のシグネチャ検証 - phantasmistの日記](http://d.hatena.ne.jp/phantasmist/20110224)
- [OAuth Signatureの検証方法について << mixi Developer Center (ミクシィ デベロッパーセンター)](http://developer.mixi.co.jp/appli/spec/mob/validate-oauth-signature/)
- [ページ遷移とAPIアクセス << mixi Developer Center (ミクシィ デベロッパーセンター)](http://developer.mixi.co.jp/appli/spec/mob/pages_api/)
- [OAuth Core 1.0](http://oauth.net/core/1.0/#rfc.section.A.5.1)
- [OAuth Core 1.0a](http://oauth.net/core/1.0a/#anchor13)

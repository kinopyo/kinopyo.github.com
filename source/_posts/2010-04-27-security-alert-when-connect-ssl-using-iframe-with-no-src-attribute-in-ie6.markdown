---
layout: post
title: 'IE6でSSL(https)に接続する時、src属性なしのiframeを使うとセキュリティの警告が出る'
date: 2010-4-27
wordpress_id: 1092
permalink: /blog/security-alert-when-connect-ssl-using-iframe-with-no-src-attribute-in-ie6
comments: true
categories: [nil]
---
## 現象
IE6を使ってSSL(https)経由で接続する時に以下の警告が出るなら
iframeのsrc属性をまずチェックしてください。

{% img http://www.kinopyo.com/wp-content/uploads/2010/04/security-info.png security-info %}

{% codeblock %}
このページにはセキュリティで保護されている項目と保護されていない項目が含まれています。
{% endcodeblock %}

## ダメな書き方

```html
<iframe />
<iframe src="" />

```

## 解決策
src属性にちゃんと値を設定するか、javascriptでfalseを指定する

```html
<iframe src="/dummy.html" />
<iframe srec="javascript:false" />

```

存在しないファイルを指定するとサーバ側のログにエラーが出るかもしれないので、
設定する場合は実際存在するファイルを設定してください。

---
layout: post
title: 'Facebookからのメール：you may be allowing authentication data to be passed to 3rd parties'
date: 2011-5-20
wordpress_id: 1767
permalink: /blog/mail-from-facebook-you-may-be-allowing-authentication-data-to-be-passed-to-3rd-parties
comments: true
categories: ["Facebook", "oauth", "PHP"]
---
Our automated systems have detected that you may be inadvertently allowing authentication data to be passed to 3rd parties.

ここ最近Facebookから”認証情報をサードパーティに渡している可能性がある、48時間内に修正しろ”みたいなメールが届いた人が多いと思います。
メール本文です：

<blockquote>
Dear Developer of xxxxxx {your app name} xxxxx,

Our automated systems have detected that you may be inadvertently allowing authentication data to be passed to 3rd parties. Allowing user ids and access tokens to be passed to 3rd parties, even inadvertently, could allow these 3rd parties to access the data the user made available to your site. This violates our policies and undermines user trust in your site and Facebook Platform.

In every case that we have examined, this information is passed via the HTTP Referer Header by the user’s browser. This can happen when using our legacy authentication system and including &lt;iframe&gt;, &lt;img&gt; or &lt;script&gt; content from 3rd parties in the page that receives authentication data from Facebook. Our legacy mechanism passes authentication information in the URL query string which, if handled incorrectly, can be passed to 3rd parties by the browser. Our current OAuth 2.0 authentication system, released over a year ago, passes this information in the URL fragment, which is not passed to 3rd parties by the browser.

Please ensure that you are not allowing this data to be passed immediately. Accessing your site as a test user while running a HTTP proxy/monitor like Charles or Fiddler is the best way to determine if you are allowing this information to be passed. If you discover the issue, you can do one of two things:

1. Migrate your site to use our OAuth 2.0 authentication system. We are requiring all apps and sites to update to this mechanism by Sept. 1, 2011. Migrating now will address this issue and ensure that you are one of the first to meet the deadline. For more details, please see our Authentication Guide.

2. Create and use an interstitial page to remove the authentication data before redirecting to your page with 3rd party content. This approach is used by many of our largest developers today (although they are all migrating to OAuth 2.0 shortly). This is a simple and straightforwardchange that should have minimal impact on your site. For more details on this approach, see our Legacy Connect Auth doc.

Because of the importance of ensuring user trust and privacy, we are asking you to complete one of the above steps in the next 48 hours. If you fail to do so, your site may be subject to one of the enforcement actions outlined in our policies.

If you have any questions or believe you have received this message in error, please contact us.

Facebook Developer Relations
</blockquote>

多分認証システムが古い（OAuth 2.0を使ってない）かつ、該当のページに&lt;iframe&gt;などのタグがあるのを条件としてFacebook側が検知してたと思います、別にサードパーティにどうこうした訳ではなく。

## ソースの確認
まずユーザ認証のところのソースを確認しましょう。
古い認証システムを使う場合これに似てるはずです。
ソースはFacebookの[http://developers.facebook.com/docs/authentication/connect_auth/](http://developers.facebook.com/docs/authentication/connect_auth/)より。

```php
 $api_key = "YOUR_API_KEY";
 $interstitial_page = "YOUR_SECURE_URL"; //URL with no 3rd party apps

 $url='http://www.facebook.com/login.php?api_key=' . $app_id
   . '&session_version=3&next=' . urlencode($interstitial_page)
   . '&v=1.0&return_session=1&fbconnect=1'
   . '&cancel_url=' . urlencode($interstitial_page);

 echo "Welcome to the Old Auth flow";
 echo "<p>";

 echo("<a href='" . $url . "'>"
   . "<img src='http://static.ak.facebook.com/images/"
   . "devsite/facebook_login.gif'></a>");

```

この場合nextパラメータで指定したページに行く時、URLパラメータでuidとかaccess_tokenが渡されますので、危ないと。

<a href="http://developers.facebook.com/attachment/request_img.png"><img alt="" src="http://developers.facebook.com/attachment/request_img.png" title="古い認証システムでは情報をパラメータ文字列で返す" class="alignnone" width="480" height="100" /></a>


OAuth 2.0を使ったログインURLはこうです。

```plain
https://www.facebook.com/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=YOUR_URL&scope=email,read_stream

```

## 改修

メールで書かれた通り一つはOAuth2.0に移行する、一つは「中間ページ」挟んでユーザ情報をセッションに保持して隠蔽する。

OAuthについては[https://developers.facebook.com/docs/authentication/](https://developers.facebook.com/docs/authentication/)で詳しく説明しています。

後者の場合は[http://developers.facebook.com/docs/authentication/connect_auth/](http://developers.facebook.com/docs/authentication/connect_auth/)の最後でサンプルコードがあるので参考できます。

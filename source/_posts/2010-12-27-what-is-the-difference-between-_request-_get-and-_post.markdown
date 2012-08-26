---
layout: post
title: 'PHP: $_REQUESTと$_GET、$_POSTはどこが違うか'
date: 2010-12-27
wordpress_id: 1592
permalink: /blog/what-is-the-difference-between-_request-_get-and-_post
comments: true
categories: ["PHP", "php"]
---
{% blockquote  %}
$_GET、 $_POST そして $_COOKIE の内容をまとめた連想配列です。
{% endblockquote %}

もう少し説明を加えると、
{% blockquote  %}
In the beginning of execution, $_REQUEST is a clone of $_GET. $_POST is then merged into the array, overwriting keys if they exist in both $_GET and $_POST. Finally, $_COOKIE is merged into the array, again overwriting old values.
{% endblockquote %}
まずは$_GETのクローンでそこに$_POSTをマージする感じで、同じキーのものがあれば上書きされます。同じくその後$_COOKIEもマージします。
なので本当にPOSTで受取るものは$_REQUESTに書き換えてはいけないと思いますね。

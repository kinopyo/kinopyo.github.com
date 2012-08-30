---
layout: post
title: 'Ruby instance_eval()の解説、Rails ActiveRecordとActiveSupportでの応用例'
date: 2011-9-12
wordpress_id: 2206
permalink: /blog/ruby-instance_eval-and-how-used-in-rails-active-record-and-active-support
comments: true
categories: ["metaprogramming", "Ruby"]
---
下記ソースコードに英語コメントで書いてますが、日本語で解釈してみます。

{% gist 3528653 instance_eval.rb %}

## 定義
まずinstance_evalはObjectのインスタンスメソッドです。なので全てのオブジェクトがこのinstance_evalを呼び出すことができます。instance_evalはブロックを受け取ります。

## 機能
+  呼び出すオブジェクト(receiver)のスコープ内でブロックを評価(実行)する、つまりreceiverのプライベートメソッドやインスタンス変数にアクセスできること
+  現在スコープの変数などBindingにアクセスできる

サンプルコードではPersonというclassに@nameのインスタンス変数、credit_cardというプライベートメソッドを定義しました。

someoneはPersonのインスタンスで、someoneからinstance_evalをコールすると、そのブロック内ではselfがsomeoneとなり、@nameやcredit_cardにアクセスできます。

さらにinstance_evalの外で定義した変数outter_valにもアクセスできます。

## Real-life example
さて、原理は分かったとして、実際はどのように使われているのか、Railsのソースコードでgrepしてこんなコードが見つかりました。

### in ActiveRecord
まずマイグレーションでまあよく使うchange_columnメソッドのソースコードです。

{% gist 3528653 instance_eval_in_rails_active_record.rb %}

`definition[column_name]`がinstance_evalを呼び出したのですが、definition[column_name]はActiveRecord::ConnectionAdapters::ColumnDefinitionクラスのオブジェクトで、ColumnDefinitionの実態はStructを継承し、カラムの名前、種類、limit、precision、デフォルト値などの情報が格納されているオブジェクトです。

{% gist 3528653 column_definition.rb %}

definition[column_name].instance_evalを使うことで、そのオブジェクト(テーブルカラム)の種類、limit、default値とnull可否を変更することが分かりましたね。
optionsはinstance_evalブロックの外の変数ですが、普通にアクセスできます。

### in ActiveSupport ###

{% gist 3528653 instance_eval_in_rails_active_support.rb %}

上記ActiveRecordのコードが分かればここは分かりやすいと思います。
実際の意味はさておき、instance_evalを利用して@marshal_with_utc_coercionというインスタンス変数が定義されていれば、それを削除する使い方ですね。

### まとめ
instance_evalを使ってオブジェクトの構造(インスタンス変数の値の変更、インスタンス変数の追加削除など)を実行時に変更するのが使い道、というのが個人的な感想です。

最後に注記：この記事はRails3.1.0のソースコードを使ってます。

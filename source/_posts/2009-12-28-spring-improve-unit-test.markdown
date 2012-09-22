---
layout: post
title: 'Springによる単体テストの促進'
date: 2009-12-28
wordpress_id: 695
permalink: /blog/spring-improve-unit-test
comments: true
categories: Java
---
[なぜDIコンテナを使うのか](http://www.atmarkit.co.jp/fjava/rensai3/springdi04/springdi04_3.html)の勉強メモです。
{% blockquote %}

SpringをはじめとするDIフレームワークでは、他クラスへの依存はインターフェイスを介したものになります。インターフェイスを介するため、呼び出す側はそのインターフェイスを実装しているクラスの完成を待つ必要がなくなります。DIコンテナを利用すればDIコンテナが設定ファイルの記述に従ってインターフェイスの実装クラスをセットします。そのため、設定ファイルの内容を切り替えることで単体テスト用のモックオブジェクト（ダミーオブジェクト）に切り替えることができます。

{% endblockquote %}

## サンプル
JuchuImplクラスはZaikoHikiateImplクラスに依存しています。
そのためJuchuImpl単体のテストを行おうとしても、
ZaikoHikiateImplクラスのhikiate()メソッドにバグがある場合テストができませんでした。

### 単体テストを行いにくいクラス

```java
public class JuchuImpl implements Juchu {
    public void juchu(Integer syohinCode, Integer suryo) {
        ZaikoHikiate hikiate = new ZaikoHikiateImpl();
        hikiate.hikiate(syohinCode, suryo);
        // 受注を処理
    }
}
```

### DIにより依存を低めたクラス
```java
public class JuchuImpl implements Juchu {

    private ZaikoHikiate hikiate;

    public void setHikiate(ZaikoHikiate hikiate) {
        this.hikiate = hikiate;
    }
    public void juchu(Integer syohinCode, Integer suryo) {
        hikiate.hikiate(syohinCode, suryo);
        // 受注を処理
    }
}
```

JuchuクラスはZaikoHikiateImplクラスが完成していなくても
ZaikoHikiateインターフェイスを実装したモックオブジェクトを
DIコンテナにセットしてJuchuImplの単体テストを実行できます。

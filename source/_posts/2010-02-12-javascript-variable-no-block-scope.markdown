---
layout: post
title: 'Javascript変数にブロックスコープはない'
date: 2010-2-12
wordpress_id: 974
permalink: /blog/javascript-variable-no-block-scope
comments: true
categories: Javascript
---
JavaをやってからJavascriptを触ったので、
Javascript変数にブロックレベルのスコープがないことにビックリしました。
if文ブロックか、forループブロックか関係なく、
function内に定義された変数は全て同じスコープ：functionのスコープになります。
<br/>

例えば

```javascript
function test(o) {
    var i = 0;                      // i is defined throughout function
    if (typeof o == "object") {
        var j = 0;                  // j is defined everywhere, not just block
        for(var k=0; k < 10; k++) { // k is defined everywhere, not just loop
            document.write(k);
        }
        document.write(k);          // k is still defined: prints 10
    }
    document.write(j);              // j is defined, but may not be initialized
}

```

<br/>
変数kとjはそれぞれif文のブロック、forループのブロック内に定義されたが、
実はfunctionのスコープとなりfunction内ならどこでも参照できます。

<br/>
これをしっかり理解しないと以下のようなミスが起こしやすいです。

```javascript
var scope = "global";
function test( ) {
    alert(scope);         // Displays "undefined", not "global"
    var scope = "local";  // Variable initialized here, but defined everywhere
    alert(scope);         // Displays "local"
}

test( );
```

<br/>
一番目のalertは"global"だと思ったらこの記事を読む価値はあるでしょう。
一番目のalertは"undefined"を表示します。
なぜならさっき言ったように変数のスコープはfunction内に跨るのです。
varで宣言する位置、順番と関係ありません。

<br/>
ここではfunction内で同じ名前でscopeという変数が宣言され、
"global"の値を持つグローバル変数は上書きされました。
そして一番目のalert時のscopeは初期化されていないため、undefinedとなってしまいます。

<br/>
上記のコードを書き換えると以下と同じです。

```javascript
function test( ) {
    var scope;       // Local variable is declared at the start of the function
    alert(scope);    // It exists here, but still has "undefined" value
    scope = "local"; // Now we initialize it and give it a value
    alert(scope);    // And here it has a value
}

```

誤解を招かないように変数の宣言はfunctionの先頭に置くのが大事ですね。

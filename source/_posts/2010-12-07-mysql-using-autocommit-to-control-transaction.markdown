---
layout: post
title: 'MySQL autocommitでトランザクションを制御する'
date: 2010-12-7
wordpress_id: 1579
permalink: /blog/mysql-using-autocommit-to-control-transaction
comments: true
categories: ["MySQL", "sqlite", "transaction"]
---
autocommitの値を持ちましてMySQLでのトランザクションを制御できます。

```sql
--暗黙(自動)コミットを無効に
SET AUTOCOMMIT = 0;
--トランザクション開始
BEGIN;

--SQL文をながす
UPDATE...
INSERT...

--コミット
COMMIT;
--あるいはロールバック
ROLLBACK;

--暗黙(自動)コミットを有効に
SET AUTOCOMMIT = 1;

--暗黙(自動)コミットのステータスを確認
SELECT @@AUTOCOMMIT;
```

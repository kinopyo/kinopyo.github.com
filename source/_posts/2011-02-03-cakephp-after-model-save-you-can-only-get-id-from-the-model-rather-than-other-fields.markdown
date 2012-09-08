---
layout: post
title: 'CakePHP: $model->save()後、$model->id以外のフィールド情報は持ってない'
date: 2011-2-3
wordpress_id: 1602
permalink: /blog/cakephp-after-model-save-you-can-only-get-id-from-the-model-rather-than-other-fields
comments: true
categories: ["cakephp", "model", "orm", "PHP", "php"]
---
```php
$this->Ingredient->save($newData);
$newIngredientId = $this->Ingredient->id;    // OK
// id以外のフィールドはダメ
$this->Ingredient->name;    // NG
$this->Ingredient->category;    // NG

```

登録/更新には関係なく。
公式マニュアルでは：
{% blockquote %}
一度保存が完了してしまうと、オブジェクトの ID をモデルオブジェクトの $id プロパティで取得することができます。特に新しいオブジェクトを生成した場合に便利です。
{% endblockquote %}
と書いてありますが、id以外のフィールド情報は持ってないようです。
欲しければ$this->dataから取れます。


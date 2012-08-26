---
layout: post
title: 'SpringでH2 Databaseを使う(HSQL、Derby)'
date: 2010-11-29
wordpress_id: 1537
permalink: /blog/using-spring-with-h2-database
comments: true
categories: ["Database", "h2db", "Java", "Spring"]
---
Springのコンテキストファイルにjdbc:embedded-databaseタグで
type="H2"でbeanを登録します。

jdbc:scriptタグで初期化時に実行したいSQLファイルを指定できます。
Sprintって、本当に便利ですね。

```xml
<jdbc:embedded-database id="dataSource" type="H2">
	<jdbc:script location="classpath:schema.sql"/>
	<jdbc:script location="classpath:test-data.sql"/>
</jdbc:embedded-database>

```

ちなみにjdbcのnamespaceの登録も忘れずに。

```xml
xmlns:jdbc="http://www.springframework.org/schema/jdbc"
xsi:schemaLocation="http://www.springframework.org/schema/jdbc
		http://www.springframework.org/schema/jdbc/spring-jdbc-3.0.xsd">

```

H2以外でもHSQL、Derbyがサポートされています。

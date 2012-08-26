---
layout: post
title: 'Spring DataSource beanのメモ'
date: 2010-12-6
wordpress_id: 1575
permalink: /blog/how-to-define-spring-datasource-bean
comments: true
categories: ["howto", "Java", "Snippet", "Spring", "tutorial"]
---
DataSource Beanを定義する際applicationContext.xmlの書き方と、Javaで呼び出すコードのメモです。ずいぶん昔のメモです。。

こんなjdbc.propertiesファイルがクラスパスにあるとします。

```
jdbc.driverClassName=org.h2.Driver
jdbc.url=jdbc:h2:~/test
jdbc.username=sa
jdbc.password=

```

そしてSpringのapplicationContext.xmlにはこう書きます。

```xml
<context:property-placeholder location="jdbc.properties"/>

<bean id="dataSource"
	class="org.springframework.jdbc.datasource.DriverManagerDataSource">
	<property name="driverClassName" value="${jdbc.driverClassName}" />
	<property name="url" value="${jdbc.url}" />
	<property name="username" value="${jdbc.username}" />
	<property name="password" value="${jdbc.password}" />
</bean>


<bean id="accountDao" class="test.dao.AccountDao">
	<property name="dataSource" ref="dataSource" />
</bean>

```

Javaでの呼び出し：

```java
ApplicationContext context = new ClassPathXmlApplicationContext(
		"applicationContext.xml");

AccountDao accountDao = (AccountDao) context.getBean("accountDao");

// other code...

```
















---
layout: post
title: 'Hibernate：複数項目のPKに対応するアノテーションの記述方法'
date: 2010-12-3
wordpress_id: 1572
permalink: /blog/how-to-setup-annotation-for-multiple-column-pk-in-hibernate
comments: true
categories: ["annotation", "hibernate", "howto", "Java", "tutorial"]
---
一つ以上の項目がPKとなったケースでHibernateはどう設定すればいいのかを説明します。
ずいぶん昔のメモになります。

こんなテーブルがあるとします。

```sql
create table Account (
	code varchar(255) not null,
	number integer not null,
	description varchar(255),
	primary key (code, number)
);

```

PKは'code'と'number'です。

## 方法は三つあります
まずPKを表すクラスを作ります。PKクラスは以下の条件を満足しなければなりません。
+publicクラス
+デフォルトのコンストラクタ
+シリアライズを実装
+hashCode()とequals()を実装

そしてエンティティクラスは以下の三つの方法のうちどれかで実装します。
+  PKクラスを@Embeddableアノテーションで記述し、エンティティクラスのプロパティとして書いて@Idとマーク
+  PKクラスをエンティティクラスにプロパティとして書いて@EmbeddableIdとマーク
+  PKを表す全ての項目をエンティティクラスのプロパティとして登録し@Idとマーク

それぞれのソースコードをリストします。

## 一番目@Embeddable
ここはAccountとそのPKを表すクラスAccountPkを作成しました。
メリットはPKクラスを再利用できるところです。
もっとも自然的なアプローチだそうです。

```java

package sample.annotations;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Account {
	private String description;
	private AccountPk id;

	public Account(String description) {
		this.description = description;
	}

	protected Account() {
	}

	@Id
	public AccountPk getId() {
		return this.id;
	}

	public String getDescription() {
		return this.description;
	}

	public void setId(AccountPk id) {
		this.id = id;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Embeddable
	public static class AccountPk implements Serializable{
		private String code;
		private Integer number;

		public AccountPk() {
		}

		public String getCode() {
			return this.code;
		}

		public Integer getNumber() {
			return this.number;
		}

		public void setNumber(Integer number) {
			this.number = number;
		}

		public void setCode(String code) {
			this.code = code;
		}

		public int hashCode() {
			int hashCode = 0;
			if (code != null)
				hashCode ^= code.hashCode();
			if (number != null)
				hashCode ^= number.hashCode();
			return hashCode;
		}

		public boolean equals(Object obj) {
			if (!(obj instanceof AccountPk))
				return false;
			AccountPk target = (AccountPk) obj;
			return ((this.code == null) ? (target.code == null) : this.code
					.equals(target.code))
					&& ((this.number == null) ? (target.number == null)
							: this.number.equals(target.number));
		}
	}
}

```

検証するクラスを作成しました。

```java
package sample.annotations;

import java.util.Iterator;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;

import sample.annotations.Account.AccountPk;

public class TestAccount {
	public static void main(String** args) {
		SessionFactory sessionFactory = new AnnotationConfiguration()
				.configure().buildSessionFactory();
		Session session = sessionFactory.openSession();
		session.beginTransaction();

		Account account = new Account("This is the first type.");

		// construct pk value
		AccountPk accountPk = new AccountPk();
		accountPk.setCode("kinopyo001");
		accountPk.setNumber(12345);
		// set pk
		account.setId(accountPk);

		// save
		session.save(account);
		session.getTransaction().commit();
		System.out.println("Commit");

		// load
		List list = session.createQuery("from Account").list();
		Iterator i = list.iterator();
		while (i.hasNext()) {
			Account a = (Account) i.next();
			System.out.println("code: " + a.getId().getCode() + ", number: "
					+ a.getId().getNumber() + "  Description: "
					+ a.getDescription());
		}
		session.close();

	}
}

```

設定が正しければこんなログが出るはずです。

```
Commit
code: kinopyo001, number: 12345  Description: This is the first type.

```


## 二番目@EmbeddableId(抜粋)

```java
@EmbeddedId
public AccountPk getId() {
	return this.id;
}

```

## 三番目@IdClass(抜粋)

```java
@Entity
@IdClass(Account.AccountPk.class)
public class Account {

	private String description;
	private String code;
	private Integer number;

	public Account(String description) {
		this.description = description;
	}

	protected Account() {
	}

	@Id
	public String getCode() {
		return this.code;
	}

	@Id
	public Integer getNumber() {
		return this.number;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public static class AccountPk {
	// ...
}

```

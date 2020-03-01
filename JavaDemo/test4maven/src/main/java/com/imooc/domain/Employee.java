package com.imooc.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * for spring-data-jpa 先开发实体类，再自动生成数据表
 * 
 * @author gaomin
 *
 */
@Entity
public class Employee {
//在spring-data-jpa里使用封装的数据类型

	private Integer id;
	private Integer age;
	private String name;

	@GeneratedValue
	@Id
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	@Column(length = 20)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}

package com.imooc.repository;

import org.springframework.data.repository.Repository;

import com.imooc.domain.Employee;

public interface EmployeeRepository extends Repository<Employee, Integer> {
// 只放findByName这一个方法，没有任何的实现类，这个名字不能乱改哦，是有规则的
	public Employee findByName(String name);
}

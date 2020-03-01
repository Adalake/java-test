package com.imooc;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.imooc.domain.Employee;
import com.imooc.repository.EmployeeRepository;

public class EmployeeRepositoryTest {
	private ApplicationContext ctx = null;
	private EmployeeRepository employeeRepository = null;

	@Before
	public void startup() {
		ctx = new ClassPathXmlApplicationContext("beans.xml");
		employeeRepository = ctx.getBean(EmployeeRepository.class);
		System.out.println("EmployeeRepositoryTest startup");
	}

	@After
	public void tearDown() {
		ctx = null;
		System.out.println("EmployeeRepositoryTest teardown");
	}

	@Test
	public void testFindByName() {
		Employee employee = employeeRepository.findByName("汪汪");
		System.out.println("id" + employee.getId() + "name" + employee.getName() + "age" + employee.getAge());
	}
}

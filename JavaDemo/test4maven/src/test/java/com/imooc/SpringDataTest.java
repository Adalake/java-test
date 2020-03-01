package com.imooc;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringDataTest {
	private ApplicationContext ctx = null;

	@Before
	public void startup() {
		ctx = new ClassPathXmlApplicationContext("beans.xml");
		System.out.println("jpa startup");
	}

	@After
	public void tearDown() {
		ctx = null;
		System.out.println("jpa teardown");
	}

	@Test
	public void testEntityManagerFactory() {

	}

}

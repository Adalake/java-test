package com.imooc;

import javax.activation.DataSource;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

public class DataSourceTest {

	private ApplicationContext ctx = null;

	@Before
	public void startup() {
		ctx = new ClassPathXmlApplicationContext("JdbcTempalteBeans.xml");
		System.out.println("startup");
	}

	@After
	public void tearDown() {
		ctx = null;
		System.out.println("teardown");
	}

	@Test
	public void testDataSource() {
		DataSource dataSource = (DataSource) ctx.getBean("dataSource");
		Assert.assertNotNull(dataSource);
		System.out.println("dataSource ing");
//		没成功
	}

	@Test
	public void TestJdbcTemplate() {
		JdbcTemplate jdbcTemplate = (JdbcTemplate) ctx.getBean("jdbcTemplate");
		Assert.assertNotNull(jdbcTemplate);
		System.out.println("jdbcTemplate ing");
	}
}

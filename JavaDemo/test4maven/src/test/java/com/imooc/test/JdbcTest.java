package com.imooc.test;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.Assert;
import org.junit.Test;

import com.imooc.util.JDBCUtil;

public class JdbcTest {
	@Test
	public void testGetconnection() throws Exception {
		final String url = "jdbc:mysql://localhost:3306/test_java";
		final String user = "root";
		final String password = "lake2580";

		Connection connection = DriverManager.getConnection(url, user, password);
		Assert.assertNotNull(connection);
	}

	@Test
	public void testGo() throws Exception {
		Connection connection = JDBCUtil.getConnection();
		Assert.assertNotNull(connection);
	}
}

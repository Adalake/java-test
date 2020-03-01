package com.imooc.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 * 
 * @author gaomin 测试 放一些乱七八糟的测试
 *
 */
public class TestGo {
	/**
	 * 配置性的建议写到配置文件中
	 */
	public static final String url = "jdbc:mysql://localhost:3306/test_java";
	public static final String user = "root";
	public static final String password = "lake2580";

	public static void main(String[] args) throws Exception {
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection connection = DriverManager.getConnection(url, user, password);
		Statement statement = connection.createStatement();
		ResultSet rs = statement.executeQuery("SELECT * FROM student");
		while (rs.next()) {
			System.out.println(rs.getString("name") + " 年龄：" + rs.getInt("age"));
		}
	}
}

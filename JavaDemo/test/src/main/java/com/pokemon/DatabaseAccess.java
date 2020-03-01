package com.pokemon;

import javax.servlet.http.HttpServlet;

public class DatabaseAccess extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost:3306/test_java?useUnicode=true&characterEncoding=utf8";
	static final String USER = "root";
	static final String Pass = "lake2580";

	public DatabaseAccess() {

	}

}

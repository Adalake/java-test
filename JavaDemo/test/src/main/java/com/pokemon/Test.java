package com.pokemon;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Test extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String message;

	public Test() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
		message = "hello test, 接下来请输入http://localhost:8080/test/TestGo?name=Bob&gender=male";
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html;charset=UTF-8");
		PrintWriter in = resp.getWriter();
		in.println("<h1>" + message + "</h1>");
		String name = new String(req.getParameter("name").getBytes("ISO-8859-1"), "UTF-8");
		String gender = new String(req.getParameter("gender").getBytes("ISO-8859-1"), "UTF-8");
		in.println(name + gender);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doGet(req, resp);
	}
	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		super.destroy();
	}
}

package com.pokemon;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class LogFilter implements Filter {

	public LogFilter() {
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		String site = filterConfig.getInitParameter("Site");
		System.out.println("作用: " + site);
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {
		System.out.println("访问了一次");

		// 获取表单信息
		String name = req.getParameter("name");
		if ("lake".equals(name)) {
			// 把请求传回过滤链
			chain.doFilter(req, resp);
		} else {
			resp.setContentType("text/html;charset=GBK");
			// 在页面输出响应信息
			PrintWriter out = resp.getWriter();
			out.print("<b>name不正确，请求被拦截，不能访问web资源.试试输入lake</b>");
			System.out.println("name不正确，请求被拦截，不能访问web资源.试试输入lake");
		}
	}

	@Override
	public void destroy() {
	}
}

package com.imooc;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.imooc.dao.StudentDAO;
import com.imooc.domain.Student;

public class StudentJdbcTemplateTest {
	private ApplicationContext ctx = null;
	private StudentDAO studentDAO = null;

	@Before
	public void startup() {
		ctx = new ClassPathXmlApplicationContext("JdbcTempalteBeans.xml");
		// 从applicationContext容器里把studentDAO拿到
		studentDAO = (StudentDAO) ctx.getBean("studentDAO");
		System.out.println("jdbcTemplate startup");
	}

	@After
	public void tearDown() {
		ctx = null;
		System.out.println("jdbcTemplate teardown");
	}

	@Test
	public void testQuery() {
		// 此时不再需要new一个studentDAO了: StudentDAO studentDAO = new StudentDAOImpl();
		List<Student> students = studentDAO.query();
		for (Student student : students) {
			System.out.println("id" + student.getId() + "name" + student.getName() + "age" + student.getAge());
		}
	}

	@Test
	public void testSave() {
		Student student = new Student();
		student.setAge(40);
		student.setName("jdbcTemplate save test");

		studentDAO.save(student);
	}
}
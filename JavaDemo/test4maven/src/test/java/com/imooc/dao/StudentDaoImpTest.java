package com.imooc.dao;

import java.util.List;

import org.junit.Test;

import com.imooc.domain.Student;

public class StudentDaoImpTest {

	@Test
	public void testQuery() {
		StudentDAO studentDAO = new StudentDAOImpl();// 多态
		List<Student> students = studentDAO.query();
		for (Student student : students) {
			System.out.println("id" + student.getId() + "name" + student.getName() + "age" + student.getAge());
		}
	}

	@Test
	public void testSave() {
		StudentDAO studentDAO = new StudentDAOImpl();
		Student student = new Student();
		student.setAge(30);
		student.setName("origin jdbc save test");
		studentDAO.save(student);
	}
}

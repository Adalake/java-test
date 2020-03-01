package com.imooc.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;

import com.imooc.domain.Student;

/**
 * 第二种方法：通过spring jdbc的方式访问
 * 
 * @author gaomin
 *
 */
public class StudentDAOSpringJdbcImpl implements StudentDAO {
//	把jdbcTemplate注入进来
	private JdbcTemplate jdbcTemplate;

// 要有一个setter方法，以下是按generate生成的
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public List<Student> query() {
		final List<Student> students = new ArrayList<Student>();
		String sql = "select * from student";
		jdbcTemplate.query(sql, new RowCallbackHandler() {
			@Override
			public void processRow(ResultSet rs) throws SQLException {
				int id = rs.getInt("id");
				String name = rs.getString("name");
				int age = rs.getInt("age");
				Student student = new Student();
				student.setAge(age);
				student.setId(id);
				student.setName(name);
				students.add(student);
			}

		});
		return students;
	}

	@Override
	public void save(Student student) {
		String sql = "insert into student (name,age) values (?,?)";
		jdbcTemplate.update(sql, new Object[] { student.getName(), student.getAge() });
	}
}

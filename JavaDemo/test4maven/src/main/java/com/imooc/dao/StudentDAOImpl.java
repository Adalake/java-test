package com.imooc.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.imooc.domain.Student;
import com.imooc.util.JDBCUtil;

/**
 * 每写一个操作数据库的方法，重复性的工作就很多，都用sql语句进行操作 通过原始方法操作
 * 
 * @author gaomin
 *
 */
public class StudentDAOImpl implements StudentDAO {

	@Override
	public List<Student> query() {
		List<Student> students = new ArrayList<Student>();
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		String sql = "select * from student";
		try {
			connection = JDBCUtil.getConnection();
			preparedStatement = connection.prepareStatement(sql);
			resultSet = preparedStatement.executeQuery();
			Student student = null;
			while (resultSet.next()) {
				int id = resultSet.getInt("id");
				String name = resultSet.getString("name");
				int age = resultSet.getInt("age");
				student = new Student();
				student.setAge(age);
				student.setId(id);
				student.setName(name);
				students.add(student);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JDBCUtil.release(resultSet, preparedStatement, connection);
		}
		return students;
	}

	@Override
	public void save(Student student) {
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		String sql = "insert into student (name,age) values(?,?)";
		try {
			connection = JDBCUtil.getConnection();
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, student.getName());
			preparedStatement.setInt(2, student.getAge());

			preparedStatement.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JDBCUtil.release(resultSet, preparedStatement, connection);
		}
	}
}

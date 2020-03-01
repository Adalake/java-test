package com.imooc.dao;

import java.util.List;

import com.imooc.domain.Student;

/**
 * DAO模型，访问数据库相关的模型都放在这层
 * 
 * @author gaomin 接口里面只定义方法
 *
 */
public interface StudentDAO {
	/**
	 * 查询
	 * 
	 * @return 返回所有学生
	 */
	public List<Student> query();

	/**
	 * 添加一个学生
	 * 
	 * @param student
	 */
	public void save(Student student);
}

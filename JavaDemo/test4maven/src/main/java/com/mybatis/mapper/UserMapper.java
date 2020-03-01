package com.mybatis.mapper;

import com.mybatis.domain.User;

public interface UserMapper {
	public User findById(String id);

}

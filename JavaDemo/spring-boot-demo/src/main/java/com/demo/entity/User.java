package com.demo.entity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class User {

	@ResponseBody
	@RequestMapping("/hello")
	public String hello() {
		return "wwhello world";
	}
}

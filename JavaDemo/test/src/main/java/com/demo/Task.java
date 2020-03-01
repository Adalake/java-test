package com.demo;

public class Task {
	private String name;
	private Phper owner;
	public Task(String name) {
		this.name = name;
		this.owner = new Phper("zhang3");
	}
	public void start() {
		System.out.println(this.name + " is starting. (未依赖注入)");
		this.owner.writeCode();
	}
}

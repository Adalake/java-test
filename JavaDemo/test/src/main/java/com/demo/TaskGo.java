package com.demo;

public class TaskGo {
	private String name;
	private Phper owner;
	public TaskGo(String name) {
		this.name = name;
	}
	public void setOwner(Phper ower) {
		this.owner = ower;
	}
	public void start() {
		System.out.println(this.name + " is starting. (依赖注入)");
		this.owner.writeCode();
	}
}
// TaskGo类依赖Phper类
package com.pokemon;

import com.demo.Phper;
import com.demo.Task;
import com.demo.TaskGo;

public class Main {
	public static void main(String[] args) {		
		Task task = new Task("task #1");
		task.start();
		
		TaskGo tast2 = new TaskGo("task #2");
		Phper owner = new Phper("lee4");
		tast2.setOwner(owner);
		tast2.start();
	}
}


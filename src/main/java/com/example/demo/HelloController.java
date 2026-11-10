package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/hello")
	public String hello() {
		//below to be replaced by loggers statements
		System.out.println("test sout log -- -before return- version ");
		System.out.println("---------Nov-10:1800 testing agro CD");

		return "Hello, World!";
	}
}


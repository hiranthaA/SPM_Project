package com.spm.spmbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spm.spmbackend.model.User;
import com.spm.spmbackend.service.UserService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService usservice;
	
	@RequestMapping(value="/addUser", method=RequestMethod.POST)
	public User addUser(@RequestBody User u) {
		return usservice.addUser(u);
	}
	
	
}

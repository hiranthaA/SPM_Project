package com.spm.spmbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spm.spmbackend.model.User;
import com.spm.spmbackend.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	@RequestMapping(value="/getall", method=RequestMethod.GET)
	public List<User> getUsers() {
		return userservice.getall();
	}
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public User addUser(@RequestBody User s) {
		return userservice.addUser(s);
	}
	
	@RequestMapping(value="/user/username/{name}/password/{pwd}", method=RequestMethod.GET)
	public User getUserByEmailAndPassword(@PathVariable("name") String username, @PathVariable("pwd") String password) {
		return userservice.getUserByNameAndPassword(username, password);
	}
}

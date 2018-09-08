package com.spm.spmbackend.service;

import java.util.List;

import com.spm.spmbackend.model.Supervisor;
import com.spm.spmbackend.model.User;

public interface UserService {
	
	public List<User> getall();
	public User addUser(User s);
	public User getUserByNameAndPassword(String username, String password);
}

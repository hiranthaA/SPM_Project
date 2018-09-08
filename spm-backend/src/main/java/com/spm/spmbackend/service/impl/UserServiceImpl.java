package com.spm.spmbackend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spm.spmbackend.model.User;
import com.spm.spmbackend.repository.UserRepository;
import com.spm.spmbackend.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List<User> getall() {
		return userRepo.findAll();
	}

	@Override
	public User addUser(User s) {
		return userRepo.insert(s);
	}

	@Override
	public User getUserByNameAndPassword(String username, String password) {
		return userRepo.findOneByUsernameAndPassword(username, password);
	}
	
}

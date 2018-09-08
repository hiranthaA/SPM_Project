package com.spm.spmbackend.repository;

import com.spm.spmbackend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String>{

	
	User findOneByUsernameAndPassword(String username, String password);
}
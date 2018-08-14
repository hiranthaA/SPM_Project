package com.example.back_end.repository;

import org.springframework.stereotype.Repository;

import com.example.back_end.model.CompanyReg;

import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface CompanyRegRepo extends MongoRepository<CompanyReg, String>{

}

package com.spm.spmbackend.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.spm.spmbackend.model.Form_i_1;
import com.spm.spmbackend.repository.Form_i_1Repo;
import com.spm.spmbackend.service.FormService;

@Service
public class FormServiceImpl implements FormService {

	@Autowired
	private Form_i_1Repo formi1Repo;
	
	@Override
	public List<Form_i_1> getFormi1() {
		return formi1Repo.findAll();
	}

	@Override
	public Form_i_1 addFormi1(Form_i_1 c) {
		System.out.println("this is impl"+c.getStudentId());
		return formi1Repo.insert(c);
		
	}

	@Override
	public Form_i_1 getFormi1ByStudentID(String studentID) {
		return formi1Repo.findOneBystudentId(studentID);
	}

	@Override
	public Form_i_1 getFormi1BystatusAndsupervisorEmail(String status, String supervisorEmail) {
		return formi1Repo.findOneByStatusAndSupervisorEmail(status, supervisorEmail);
	}
	
}

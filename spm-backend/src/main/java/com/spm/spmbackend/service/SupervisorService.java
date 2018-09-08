package com.spm.spmbackend.service;

import java.util.List;

import com.spm.spmbackend.model.Supervisor;

public interface SupervisorService {
	List<Supervisor> getall();
	Supervisor addSupervisor(Supervisor s);
}

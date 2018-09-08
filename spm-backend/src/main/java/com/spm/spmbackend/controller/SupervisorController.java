package com.spm.spmbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spm.spmbackend.model.Supervisor;
import com.spm.spmbackend.service.SupervisorService;

@RestController
@RequestMapping("/supervisor")
public class SupervisorController {
	
	@Autowired
	private SupervisorService superservice;
	
	@RequestMapping(value="/getall", method=RequestMethod.GET)
	public List<Supervisor> getSupervisors() {
		return superservice.getall();
	}
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public Supervisor addSupervisor(@RequestBody Supervisor s) {
		return superservice.addSupervisor(s);
	}
}

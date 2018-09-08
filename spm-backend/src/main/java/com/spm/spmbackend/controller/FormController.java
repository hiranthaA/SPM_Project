package com.spm.spmbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spm.spmbackend.model.Form_i_1;
import com.spm.spmbackend.service.FormService;;

@RestController
@CrossOrigin
@RequestMapping("/forms")
public class FormController {
	
	@Autowired
	private FormService formservise;
	
	@RequestMapping(value="/formi1", method = RequestMethod.GET)
	public List<Form_i_1> getFormI1(){
			return  formservise.getFormi1();
	}
	
	@RequestMapping(value="/formi1", method=RequestMethod.POST)
	public Form_i_1 addFormI1(@RequestBody Form_i_1 c) {
		System.out.println(c.getStudentId());
		return formservise.addFormi1(c);
		//return c;
		
		
	}
	
	@RequestMapping(value="/formi1/{id}", method=RequestMethod.GET)
	public Form_i_1 getFormI1ByStudentID(@PathVariable("id") String id) {
		System.out.println(id);
		return  formservise.getFormi1ByStudentID(id);
		//return c;
		
		
	}
	
	@RequestMapping(value="/formi1/supervisorID/{supID}/status/{status}", method=RequestMethod.GET)
	public Form_i_1 getFormI1ByStudentID(@PathVariable("status") String status,@PathVariable("supID") String supID) {
		System.out.println(status+": "+ supID);
		return  formservise.getFormi1BystatusAndsupervisorEmail(status,supID);
		//return c;
		
		
	}
	
	
	
	
}

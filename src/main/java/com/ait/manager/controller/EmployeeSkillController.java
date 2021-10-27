package com.ait.manager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ait.manager.model.Employee;
import com.ait.manager.model.EmployeeSkill;
import com.ait.manager.model.Office;
import com.ait.manager.model.Skill;
import com.ait.manager.service.employee.EmployeeServiceImpl;
import com.ait.manager.service.employee_skill.EmployeeSkillServiceImpl;
import com.ait.manager.service.skill.SkillServiceImpl;

@RestController
public class EmployeeSkillController {

	@Autowired 
	private EmployeeSkillServiceImpl employeeSkillServiceImpl;
	
	@Autowired 
	private EmployeeServiceImpl employeeServiceImpl;
	
	@Autowired
	private SkillServiceImpl skillServiceImpl;
	
	@PostMapping("/employee-skill/create")
	public ResponseEntity<EmployeeSkill> createEntity(@RequestBody EmployeeSkill employeeSkill){
		/*
		 * Employee employee =
		 * employeeServiceImpl.findById(employeeSkill.getEmployee().getEmployee_id()).
		 * get(); employeeSkill.setEmployee(employee);
		 * 
		 * Skill skill =
		 * skillServiceImpl.findById(employeeSkill.getSkill().getSkill_id()).get();
		 * employeeSkill.setSkill(skill);
		 */
		return new ResponseEntity<>(employeeSkillServiceImpl.save(employeeSkill),HttpStatus.CREATED);
	}
}

package com.ait.manager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ait.manager.model.Employee;
import com.ait.manager.model.Office;
import com.ait.manager.model.dto.EmployeeDTO;
import com.ait.manager.service.employee.EmployeeServiceImpl;
import com.ait.manager.service.employee_skill.EmployeeSkillServiceImpl;
import com.ait.manager.service.office.OfficeServiceImpl;
import com.ait.manager.service.skill.SkillServiceImpl;


@RestController

public class EmployeeController {
	
	@Autowired
	private EmployeeServiceImpl employeeServiceImpl;

	@Autowired
	private SkillServiceImpl skillServiceImpl;

	@Autowired
	private OfficeServiceImpl officeServiceImpl;

	@Autowired
	private EmployeeSkillServiceImpl employeeSkillServiceImpl;

	@GetMapping("/employees")
	public ModelAndView homePage() {
		return new ModelAndView("dashboard/employee/list");
	}

//	init create page
	@GetMapping("/create-employee")
	public ModelAndView pageCreate() {
		return new ModelAndView("dashboard/employee/create");
	}

	@PostMapping("create-employee/insert-employee")
	public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
		Office office = officeServiceImpl.findById(employee.getOffice().getOffice_id()).get();
		employee.setOffice(office);
		return new ResponseEntity<>(employeeServiceImpl.save(employee),HttpStatus.CREATED);
	}
	
	@GetMapping("/employees/list-employee")
	public ResponseEntity<Iterable<EmployeeDTO>> listEmployee(){
		return new ResponseEntity<>(employeeServiceImpl.listEmployee(), HttpStatus.OK);
	}
}

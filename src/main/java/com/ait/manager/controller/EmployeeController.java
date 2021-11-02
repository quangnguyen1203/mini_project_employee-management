package com.ait.manager.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

	
	@GetMapping("/hidden-employees")
	public ModelAndView homePageHidden() {
		return new ModelAndView("dashboard/employee/hiddenList");
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
	
	@GetMapping("/employees/hidden-list-employee")
	public ResponseEntity<Iterable<EmployeeDTO>> listHiddenEmployee(){
		return new ResponseEntity<>(employeeServiceImpl.listEmployeeHidden(), HttpStatus.OK);
	}
	
	@DeleteMapping("/employees/delete/{id}")
    public ResponseEntity<Employee> deleteEmpployee(@PathVariable Long id) {
        Optional<Employee> employeeOptional = employeeServiceImpl.findById(id);
        if (!employeeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        employeeServiceImpl.remove(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

	@DeleteMapping("/employees/{id}")
    public ResponseEntity<Employee> deleteEmpEntity(@PathVariable Long id) {
        Optional<Employee> employeeOptional = employeeServiceImpl.findById(id);
        if (!employeeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        employeeServiceImpl.deleteEmployeeById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
	
	@DeleteMapping("/employees/hidden-employee/{id}")
    public ResponseEntity<Employee> deleteHiddenEmployee(@PathVariable Long id) {
        Optional<Employee> employeeOptional = employeeServiceImpl.findById(id);
        if (!employeeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        employeeServiceImpl.restoreEmployee(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/employees/edit/{id}")
    public ResponseEntity<Employee> editEmployee(@RequestBody Employee employee,@PathVariable Long id){
        employee.setEmployee_id(id); ;
        employee.getOffice().setOffice_name(officeServiceImpl.findById(employee.getOffice().getOffice_id()).get().getOffice_name());
        return new ResponseEntity<>(employeeServiceImpl.save(employee),HttpStatus.OK);
    }

	@GetMapping("/employees/skill-employee/{id}") 
	public ResponseEntity<EmployeeDTO> employeeResponse(@PathVariable Long id){
		return new ResponseEntity<>(employeeServiceImpl.employeeFindById(id).get(),HttpStatus.OK); 
	}

	 
    @GetMapping("/employees/edit-employee/{id}")
    public ResponseEntity<Employee> employeeResponseEntity(@PathVariable Long id){
        return new ResponseEntity<>(employeeServiceImpl.findById(id).get(),HttpStatus.OK);
    }

}

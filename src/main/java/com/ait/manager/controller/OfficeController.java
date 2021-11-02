package com.ait.manager.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.servlet.ModelAndView;

import com.ait.manager.model.Employee;
import com.ait.manager.model.Office;
import com.ait.manager.model.Skill;
import com.ait.manager.model.dto.TotalEmployeeDTO;
import com.ait.manager.service.employee.EmployeeServiceImpl;
import com.ait.manager.service.office.OfficeServiceImpl;

@RestController
public class OfficeController {
	@Autowired
	private OfficeServiceImpl officeServiceImpl;
	
	@Autowired
	private EmployeeServiceImpl employeeServiceImpl;
	
	@GetMapping("/offices")
	public ModelAndView homePage(){
		return new ModelAndView("dashboard/office/list");
	}
	
	@GetMapping("/officeHidden")
	public ModelAndView homePageHidden(){
		return new ModelAndView("dashboard/office/hiddenList");
	}
	
	@PostMapping("/offices")
    public ResponseEntity<Office> createOffice(@RequestBody Office office) {
        return new ResponseEntity<>(officeServiceImpl.save(office), HttpStatus.CREATED);
    }
	
	@GetMapping("/offices/allOffice")
    public ResponseEntity<Iterable<Office>> allOffices(){
        return new ResponseEntity<>(officeServiceImpl.findAllByisDeleteFalse(), HttpStatus.OK);
    }
	
	@GetMapping("/offices/allHiddenOffice")
    public ResponseEntity<Iterable<Office>> allHiddenOffices(){
        return new ResponseEntity<>(officeServiceImpl.findAllByisDeleteTrue(), HttpStatus.OK);
    }
	
	@DeleteMapping("/offices/{id}")
    public ResponseEntity<Office> deleteOffice(@PathVariable Long id) {
        Optional<Office> officeOptional = officeServiceImpl.findById(id);
        if (!officeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        officeServiceImpl.deleteOfficeById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
	
	@DeleteMapping("/offices/hidden-office/{id}")
    public ResponseEntity<Office> deleteHiddenOffice(@PathVariable Long id) {
        Optional<Office> officeOptional = officeServiceImpl.findById(id);
        if (!officeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        officeServiceImpl.restoreOffice(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping("/offices/edit/{id}")
    public ResponseEntity<Office> editOffice(@RequestBody Office office,@PathVariable Long id){
        office.setOffice_id(id);
        return new ResponseEntity<>(officeServiceImpl.save(office),HttpStatus.OK);
    }
    
    @GetMapping("/offices/edit-office/{id}")
    public ResponseEntity<Office> officeResponseEntity(@PathVariable Long id){
        Office office = officeServiceImpl.findById(id).get();
        return new ResponseEntity<>(office,HttpStatus.OK);
	} 
    
    @GetMapping("/offices/total-employee/{id}")
    public ResponseEntity<Integer> getTotalEmployee(@PathVariable Long id){
        return new ResponseEntity<>(employeeServiceImpl.totalEmployeeById(id),HttpStatus.OK);
    }
    
    @GetMapping("/search-office/{office_name}")
    public ResponseEntity<Iterable<Office>> searchOfficeByName(@PathVariable String office_name){
        return new ResponseEntity<>(officeServiceImpl.searchOfficeByName(office_name),HttpStatus.OK);
    }
}

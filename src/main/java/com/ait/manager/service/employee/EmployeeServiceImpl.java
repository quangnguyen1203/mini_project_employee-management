package com.ait.manager.service.employee;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.ait.manager.model.Employee;
import com.ait.manager.model.dto.EmployeeDTO;
import com.ait.manager.model.dto.TotalEmployeeDTO;
import com.ait.manager.repository.EmployeeRepository;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	@Autowired
    private EmployeeRepository employeeRepository;
	
    @Override
    public Iterable<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Optional<Employee> findById(Long id) {
        return employeeRepository.findById(id);
    }

    @Override
    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public void remove(Long id) {
    	employeeRepository.deleteById(id);
    }

	@Override
	public Iterable<EmployeeDTO> listEmployee() {
		// TODO Auto-generated method stub
		return employeeRepository.listEmployee();
	}

	@Override
	public int totalEmployeeById(Long id) {
		// TODO Auto-generated method stub
		return employeeRepository.totalEmployeeById(id);
	}


}

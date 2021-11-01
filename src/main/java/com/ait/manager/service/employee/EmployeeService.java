package com.ait.manager.service.employee;

import java.util.Optional;

import org.springframework.data.repository.query.Param;

import com.ait.manager.model.Employee;
import com.ait.manager.model.dto.EmployeeDTO;
import com.ait.manager.model.dto.TotalEmployeeDTO;
import com.ait.manager.service.GeneralService;

public interface EmployeeService extends GeneralService<Employee> {
	int totalEmployeeById(Long id);
	Iterable<EmployeeDTO> listEmployee();
	Optional<EmployeeDTO> employeeFindById(Long id);
	
    Iterable<EmployeeDTO> listEmployeeHidden();
    void deleteEmployeeById(Long id);
    void restoreEmployee(Long id);
}

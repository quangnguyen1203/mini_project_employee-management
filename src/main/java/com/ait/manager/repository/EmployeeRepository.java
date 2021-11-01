package com.ait.manager.repository;

import java.util.Optional;


import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ait.manager.model.Employee;
import com.ait.manager.model.dto.EmployeeDTO;
import com.ait.manager.model.dto.TotalEmployeeDTO;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	@Query(nativeQuery = true, value = "select count(*) as total_employee from employees e inner join offices o \r\n"
			+ "on e.office_office_id = o.office_id where e.office_office_id = ?1")
	int totalEmployeeById(Long id);
	
	@Query(nativeQuery = true, value = "select e.employee_id as employee_id, e.employee_name as employee_name, e.dob as dob, e.employee_address as employee_address, e.introduce as introduce, e.date_start as date_start, o.office_name as office_name, group_concat(distinct s.skill_name) as skill_name, e.is_delete as is_delete from employees as e\r\n"
			+ "inner join offices o on e.office_office_id = o.office_id\r\n"
			+ "inner join employee_skill es on e.employee_id = es.employee_id\r\n"
			+ "inner join skills s on s.skill_id = es.skill_id\r\n"
			+ "group by e.employee_id\r\n"
			+ "having e.is_delete = false")
	Iterable<EmployeeDTO> listEmployee();
	
	@Query(nativeQuery = true, value="select e.employee_id as employee_id, e.employee_name as employee_name, e.dob as dob, e.employee_address as employee_address, e.introduce as introduce, e.date_start as date_start, o.office_name as office_name, group_concat(distinct s.skill_name) as skill_name from employees as e\r\n"
			+ "inner join offices o on e.office_office_id = o.office_id\r\n"
			+ "inner join employee_skill es on e.employee_id = es.employee_id\r\n"
			+ "inner join skills s on s.skill_id = es.skill_id\r\n"
			+ "group by e.employee_id\r\n"
			+ "having e.employee_id = ?1")
	Optional<EmployeeDTO> employeeFindById(Long id);
	
	@Query(nativeQuery = true, value = "select e.employee_id as employee_id, e.employee_name as employee_name, e.dob as dob, e.employee_address as employee_address, e.introduce as introduce, e.date_start as date_start, o.office_name as office_name, group_concat(distinct s.skill_name) as skill_name, e.is_delete as is_delete from employees as e\r\n"
			+ "inner join offices o on e.office_office_id = o.office_id\r\n"
			+ "inner join employee_skill es on e.employee_id = es.employee_id\r\n"
			+ "inner join skills s on s.skill_id = es.skill_id\r\n"
			+ "group by e.employee_id\r\n"
			+ "having e.is_delete = true")
	Iterable<EmployeeDTO> listEmployeeHidden();
	
	 @Transactional
    @Modifying
    @Query("update Employee e set e.isDelete = true where e.employee_id = :id")
    void deleteEmployeeById(@Param("id") Long id);
    
    @Transactional
    @Modifying
    @Query("update Employee e set e.isDelete = false where e.employee_id = :id")
    void restoreEmployee(@Param("id") Long id);
}

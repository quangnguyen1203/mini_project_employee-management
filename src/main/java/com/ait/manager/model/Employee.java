package com.ait.manager.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employee_id;
    
    private String employee_name;

    private Date dob;

    private String employee_address;

    @JsonIgnore
    @OneToMany
    private List<EmployeeSkill> employeeSkill;

    private String introduce;

    @OneToOne
    private Office office;
    
    @Column(columnDefinition = "boolean default false")
    private boolean isDelete;

	public Employee() {
	}

	public Employee(Long employee_id, String employee_name, Date dob, String employee_address, List<EmployeeSkill> employeeSkill,
			String introduce, Office office, boolean isDelete) {
		super();
		this.employee_id = employee_id;
		this.employee_name = employee_name;
		this.dob = dob;
		this.employee_address = employee_address;
		this.employeeSkill = employeeSkill;
		this.introduce = introduce;
		this.office = office;
		this.isDelete = isDelete;
	}
	
	public Employee(String employee_name, Date dob, String employee_address, List<EmployeeSkill> employeeSkill, String introduce,
			Office office, boolean isDelete) {
		super();
		this.employee_name = employee_name;
		this.dob = dob;
		this.employee_address = employee_address;
		this.employeeSkill = employeeSkill;
		this.introduce = introduce;
		this.office = office;
		this.isDelete = isDelete;
	}

	public Long getEmployee_id() {
		return employee_id;
	}

	public void setEmployee_id(Long employee_id) {
		this.employee_id = employee_id;
	}

	public String getEmployee_name() {
		return employee_name;
	}

	public void setEmployee_name(String employee_name) {
		this.employee_name = employee_name;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getEmployee_address() {
		return employee_address;
	}

	public void setEmployee_address(String employee_address) {
		this.employee_address = employee_address;
	}

	public List<EmployeeSkill> getEmployeeSkill() {
		return employeeSkill;
	}

	public void setEmployeeSkill(List<EmployeeSkill> employeeSkill) {
		this.employeeSkill = employeeSkill;
	}

	public String getIntroduce() {
		return introduce;
	}

	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}

	public Office getOffice() {
		return office;
	}

	public void setOffice(Office office) {
		this.office = office;
	}

	public boolean isDelete() {
		return isDelete;
	}

	public void setDelete(boolean isDelete) {
		this.isDelete = isDelete;
	}
    
    
}

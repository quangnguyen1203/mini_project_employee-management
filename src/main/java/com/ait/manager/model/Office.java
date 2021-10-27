package com.ait.manager.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

@Entity
@Table(name = "offices")
public class Office {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long office_id;

    private String office_name;

    private String office_address;

    @OneToMany(targetEntity = Employee.class, fetch = FetchType.EAGER)
    private List<Employee> employees;
    
    @Column(columnDefinition = "boolean default false")
    private boolean isDelete;

	public Office() {
	}

	public Office(Long office_id, String office_name, String office_address, List<Employee> employees,
			boolean isDelete) {
		super();
		this.office_id = office_id;
		this.office_name = office_name;
		this.office_address = office_address;
		this.employees = employees;
		this.isDelete = isDelete;
	}

	public Office(String office_name, String office_address, List<Employee> employees, boolean isDelete) {
		super();
		this.office_name = office_name;
		this.office_address = office_address;
		this.employees = employees;
		this.isDelete = isDelete;
	}

	public Office(String office_name, String office_address) {
		this.office_name = office_name;
		this.office_address = office_address;
	}

	public Long getOffice_id() {
		return office_id;
	}

	public void setOffice_id(Long office_id) {
		this.office_id = office_id;
	}

	public String getOffice_name() {
		return office_name;
	}

	public void setOffice_name(String office_name) {
		this.office_name = office_name;
	}

	public String getOffice_address() {
		return office_address;
	}

	public void setOffice_address(String office_address) {
		this.office_address = office_address;
	}

	public List<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}

	public boolean isDelete() {
		return isDelete;
	}

	public void setDelete(boolean isDelete) {
		this.isDelete = isDelete;
	}
    
    
}

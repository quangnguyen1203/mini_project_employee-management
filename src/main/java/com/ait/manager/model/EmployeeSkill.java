package com.ait.manager.model;

import javax.persistence.*;

@Entity
@Table(name="employee_skill")
public class EmployeeSkill {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employee_skill_id;
	
    @JoinColumn(name = "employee_id")
    private Long employee_id;

    @JoinColumn(name = "skill_id")
    private Long skill_id;

    
    
	public EmployeeSkill(Long employee_skill_id, Long employee_id, Long skill_id) {
		super();
		this.employee_skill_id = employee_skill_id;
		this.employee_id = employee_id;
		this.skill_id = skill_id;
	}



	public EmployeeSkill() {
		super();
	}

	public EmployeeSkill(Long employee_id, Long skill_id) {
		super();
		this.employee_id = employee_id;
		this.skill_id = skill_id;
	}



	public Long getEmployee_skill_id() {
		return employee_skill_id;
	}



	public void setEmployee_skill_id(Long employee_skill_id) {
		this.employee_skill_id = employee_skill_id;
	}



	public Long getEmployee_id() {
		return employee_id;
	}



	public void setEmployee_id(Long employee_id) {
		this.employee_id = employee_id;
	}



	public Long getSkill_id() {
		return skill_id;
	}



	public void setSkill_id(Long skill_id) {
		this.skill_id = skill_id;
	}

	/*
	 * public EmployeeSkill(Long employee_skill_id, Employee employee, Skill skill)
	 * { super(); this.employee_skill_id = employee_skill_id; this.employee =
	 * employee; this.skill = skill; }
	 * 
	 * public EmployeeSkill(Employee employee, Skill skill) { this.employee =
	 * employee; this.skill = skill; }
	 * 
	 * public Long getEmployee_skill_id() { return employee_skill_id; }
	 * 
	 * public void setEmployee_skill_id(Long employee_skill_id) {
	 * this.employee_skill_id = employee_skill_id; }
	 * 
	 * public Employee getEmployee() { return employee; }
	 * 
	 * public void setEmployee(Employee employee) { this.employee = employee; }
	 * 
	 * public Skill getSkill() { return skill; }
	 * 
	 * public void setSkill(Skill skill) { this.skill = skill; }
	 */

    
}

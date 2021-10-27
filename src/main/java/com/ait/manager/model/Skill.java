package com.ait.manager.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.websocket.OnError;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "skills")
public class Skill {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long skill_id;
	
	private String skill_name;
	
	@JsonIgnore
	@OneToMany
    private List<EmployeeSkill> employeeSkill;

	public Skill(String skill_name, List<EmployeeSkill> employeeSkill) {
		this.skill_name = skill_name;
		this.employeeSkill = employeeSkill;
	}
	
	public Skill(String skill_name) {
		this.skill_name = skill_name;
	}

	public Skill(Long skill_id, String skill_name, List<EmployeeSkill> employeeSkill) {
		this.skill_id = skill_id;
		this.skill_name = skill_name;
		this.employeeSkill = employeeSkill;
	}

	public Skill() {

	}
	
	public Skill(Long skill_id, String skill_name) {
		this.skill_id = skill_id;
		this.skill_name = skill_name;
	}

	public Long getSkill_id() {
		return skill_id;
	}

	public void setSkill_id(Long skill_id) {
		this.skill_id = skill_id;
	}

	public String getSkill_name() {
		return skill_name;
	}

	public void setSkill_name(String skill_name) {
		this.skill_name = skill_name;
	}

	public List<EmployeeSkill> getEmployeeSkill() {
		return employeeSkill;
	}

	public void setEmployeeSkill(List<EmployeeSkill> employeeSkill) {
		this.employeeSkill = employeeSkill;
	}
}

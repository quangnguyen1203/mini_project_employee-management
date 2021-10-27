package com.ait.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ait.manager.model.EmployeeSkill;

@Repository
public interface EmployeeSkillRepository extends JpaRepository<EmployeeSkill, Long> {
	@Query(nativeQuery = true, value = "INSERT INTO employee_skill (employee_id, skill_id) VALUES (?1, ?2)")
	EmployeeSkill saveEmployeeSkill(Long employee_id, Long skill_id);
}

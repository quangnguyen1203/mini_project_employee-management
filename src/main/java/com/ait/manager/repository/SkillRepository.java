package com.ait.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ait.manager.model.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
	@Query(nativeQuery = true,value = "select * from Skill")
	Iterable<Skill> allSkill();
}

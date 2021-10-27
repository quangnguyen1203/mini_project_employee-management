package com.ait.manager.service.employee_skill;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ait.manager.model.EmployeeSkill;
import com.ait.manager.repository.EmployeeSkillRepository;

@Service
public class EmployeeSkillServiceImpl implements EmployeeSkillService {
	@Autowired
	private EmployeeSkillRepository employeeSkillRepository;
	

	@Override
	public Iterable<EmployeeSkill> findAll() {
		// TODO Auto-generated method stub
		return employeeSkillRepository.findAll();
	}

	@Override
	public Optional<EmployeeSkill> findById(Long id) {
		// TODO Auto-generated method stub
		return employeeSkillRepository.findById(id);
	}

	@Override
	public EmployeeSkill save(EmployeeSkill t) {
		// TODO Auto-generated method stub
		return employeeSkillRepository.save(t);
	}

	@Override
	public void remove(Long id) {
		// TODO Auto-generated method stub
		employeeSkillRepository.deleteById(id);
	}

	@Override
	public EmployeeSkill saveEmployeeSkill(Long employee_id, Long skill_id) {
		// TODO Auto-generated method stub
		return employeeSkillRepository.saveEmployeeSkill(employee_id, skill_id);
	}

}

package com.ait.manager.service.skill;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ait.manager.model.Skill;
import com.ait.manager.repository.SkillRepository;
@Service
public class SkillServiceImpl implements SkillService{
	
	@Autowired
	private SkillRepository skillRepository;
	
	@Override
	public Iterable<Skill> findAll() {
		// TODO Auto-generated method stub
		return skillRepository.findAll();
	}

	@Override
	public Optional<Skill> findById(Long id) {
		// TODO Auto-generated method stub
		return skillRepository.findById(id);
	}

	@Override
	public Skill save(Skill t) {
		// TODO Auto-generated method stub
		return skillRepository.save(t);
	}

	@Override
	public void remove(Long id) {
		// TODO Auto-generated method stub
		skillRepository.deleteById(id);
	}

	@Override
	public Iterable<Skill> allSkill() {
		// TODO Auto-generated method stub
		return skillRepository.allSkill();
	}

}

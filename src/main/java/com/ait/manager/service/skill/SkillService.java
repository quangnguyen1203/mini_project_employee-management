package com.ait.manager.service.skill;

import javax.persistence.GeneratedValue;

import com.ait.manager.model.Skill;
import com.ait.manager.service.GeneralService;

public interface SkillService extends GeneralService<Skill>{
	Iterable<Skill> allSkill();
}

package com.ait.manager.service.employee_skill;

import com.ait.manager.model.EmployeeSkill;
import com.ait.manager.service.GeneralService;

public interface EmployeeSkillService extends GeneralService<EmployeeSkill> {
	EmployeeSkill saveEmployeeSkill(Long employee_id, Long skill_id);
}

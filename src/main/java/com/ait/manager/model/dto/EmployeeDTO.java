package com.ait.manager.model.dto;

import java.sql.Date;

public interface EmployeeDTO {
	Long getEmployee_id();
	String getEmployee_name();
	Date getDob();
	String getEmployee_address();
	String getIntroduce();
	Date getDate_start();
	String getOffice_name();
	String getSkill_name();
}

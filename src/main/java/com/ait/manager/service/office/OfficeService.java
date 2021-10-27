package com.ait.manager.service.office;

import org.springframework.data.repository.query.Param;

import com.ait.manager.model.Office;
import com.ait.manager.service.GeneralService;

public interface OfficeService extends GeneralService<Office>{
	Iterable<Office> findAllByisDeleteFalse();
	Iterable<Office> findAllByisDeleteTrue();
	void deleteOfficeById(Long id);
	void restoreOffice(Long id);
}

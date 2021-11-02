package com.ait.manager.service.office;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ait.manager.model.Employee;
import com.ait.manager.model.Office;
import com.ait.manager.repository.EmployeeRepository;
import com.ait.manager.repository.OfficeRepository;

@Service
public class OfficeServiceImpl implements OfficeService {
	
	@Autowired
    private OfficeRepository officeRepository;
	
    @Override
    public Iterable<Office> findAll() {
        return officeRepository.findAll();
    }

    @Override
    public Optional<Office> findById(Long id) {
        return officeRepository.findById(id);
    }

    @Override
    public Office save(Office office) {
        return officeRepository.save(office);
    }

    @Override
    public void remove(Long id) {
    	officeRepository.deleteById(id);
    }

	@Override
	public Iterable<Office> findAllByisDeleteFalse() {
		return officeRepository.findAllByisDeleteFalse();
	}

	@Override
	public void deleteOfficeById(Long id) {
		officeRepository.deleteOfficeById(id);
	}

	@Override
	public Iterable<Office> findAllByisDeleteTrue() {
		// TODO Auto-generated method stub
		return officeRepository.findAllByisDeleteTrue();
	}

	@Override
	public void restoreOffice(Long id) {
		// TODO Auto-generated method stub
		officeRepository.restoreOffice(id);
	}

	@Override
	public Iterable<Office> searchOfficeByName(String string) {
		// TODO Auto-generated method stub
		return officeRepository.searchOfficeByName(string);
	}
}

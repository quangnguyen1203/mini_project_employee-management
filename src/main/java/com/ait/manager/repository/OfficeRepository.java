package com.ait.manager.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ait.manager.model.Employee;
import com.ait.manager.model.Office;

@Repository
public interface OfficeRepository extends JpaRepository<Office, Long> {
	
	@Query("select o from Office o where o.isDelete = false")
    Iterable<Office> findAllByisDeleteFalse();
	
	@Query("select o from Office o where o.isDelete = true")
    Iterable<Office> findAllByisDeleteTrue();
	
    @Transactional
    @Modifying
    @Query("update Office o set o.isDelete = true where o.office_id = :id")
    void deleteOfficeById(@Param("id") Long id);
    
    @Transactional
    @Modifying
    @Query("update Office o set o.isDelete = false where o.office_id = :id")
    void restoreOffice(@Param("id") Long id);
    
    @Query(nativeQuery = true, value="SELECT * FROM offices o where o.office_name like %?%")
    Iterable<Office> searchOfficeByName(String string);
}

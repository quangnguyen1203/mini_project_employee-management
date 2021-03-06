package com.ait.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ait.manager.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    Iterable<User> findAllByDeletedFalse();

    Iterable<User> findAllByDeletedTrue();

    @Query(nativeQuery = true,value = "select * from users where role_id = ?")
    Iterable<User> findByUserRoleStaff(Long id);
}

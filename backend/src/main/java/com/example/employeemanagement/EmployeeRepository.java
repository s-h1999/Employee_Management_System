package com.example.employeemanagement;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // That's it! Spring writes all the DB code for you
}

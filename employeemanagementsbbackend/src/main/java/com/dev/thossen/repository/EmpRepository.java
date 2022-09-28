package com.dev.thossen.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.thossen.model.Emp;

public interface EmpRepository extends JpaRepository<Emp, Integer> {

}
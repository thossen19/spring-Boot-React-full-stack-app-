package com.dev.thossen.service;

import java.util.List;

import com.dev.thossen.model.Emp;

public interface EmpService {

	public Emp createEmp(Emp emp);

	public List<Emp> getAllEmp();

	public Emp getEmpById(int id);

	public void deleteEmp(int id);

	public Emp updateEmp(int id, Emp emp);

}
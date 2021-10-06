package net.javaguides.springboot.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.service.EmployeeService;

//import net.javaguides.springboot.service.EmployeeService;

@CrossOrigin("*")
@RestController
@RequestMapping("/employ")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	

	//desplegar lista de empleados
	@GetMapping("/findAll")
	public List<Employee> findAll(Model model) {
		List<Employee> list = employeeService.getAllEmployees();
		return list;
	}
	
	@GetMapping("/findById")
	public int findById() {
		return 1;
	}
	
//	@GetMapping("/showNewEmployeeForm")
//	public String showNewEmployeeForm(Model model) {
//		//creando el atrributo bind del formulario
//		Employee employee = new Employee();
//		model.addAttribute("employee", employee);
//		return "new_employee";
//	}
//	
//	@PostMapping("/saveEmployee")
//	public String saveEmployee(@ModelAttribute("employee") Employee employee) {
//		//Guardar empleados en la base de datos
//		employeeService.saveEmployee(employee);
//		return "redirect:/";
//		
//	}
}

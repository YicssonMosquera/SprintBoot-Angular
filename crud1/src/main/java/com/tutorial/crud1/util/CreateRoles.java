//package com.tutorial.crud1.util;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import com.tutorial.crud1.security.entity.Rol;
//import com.tutorial.crud1.security.enums.RolNombre;
//import com.tutorial.crud1.security.service.RolService;
//clase para insertar los roles a la base de datos
//@Component
//public class CreateRoles implements CommandLineRunner {
//
//	@Autowired
//	RolService rolService;
//	@Override
//	public void run(String... args) throws Exception {
//		Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
//		Rol rolUser= new Rol(RolNombre.ROLE_USER);
//		rolService.save(rolAdmin);
//		rolService.save(rolUser);
//	}
//
//}
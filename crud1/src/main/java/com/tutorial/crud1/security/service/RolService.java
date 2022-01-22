package com.tutorial.crud1.security.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tutorial.crud1.security.entity.Rol;
import com.tutorial.crud1.security.enums.RolNombre;
import com.tutorial.crud1.security.repository.RolRepository;

@Service
//mantiene la coherencia con la base de datos
@Transactional
public class RolService {
	
	@Autowired
	RolRepository rolRepository;
	
	public Optional<Rol> getByRolNombre(RolNombre rolNombre){
		return rolRepository.findByRolNombre(rolNombre);
	}
	
	public void save(Rol rol) {
		rolRepository.save(rol);
	}
	
}

package com.tutorial.crud1.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tutorial.crud1.security.entity.Rol;
import com.tutorial.crud1.security.enums.RolNombre;

@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {

	//obtener por rol Nombre
	Optional<Rol> findByRolNombre(RolNombre rolNombre);
}

package com.tutorial.crud1.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tutorial.crud1.security.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
	
	//obtener usuario a partir del nombre 
	Optional<Usuario> findByNombreUsuario(String nombreUsuario);
	
	//verificar si existe el usuario
	boolean existsByNombreUsuario(String nombreUsuario);
	
	//verificar si existe por email
	boolean existsByEmail(String email);
}

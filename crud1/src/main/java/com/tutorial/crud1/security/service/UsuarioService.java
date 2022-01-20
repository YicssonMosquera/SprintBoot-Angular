package com.tutorial.crud1.security.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tutorial.crud1.security.entity.Usuario;
import com.tutorial.crud1.security.repository.UsuarioRepository;

@Service

//mantiene la coherencia con la base de datos
@Transactional
public class UsuarioService {
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	//optener usuario por nombre 
	public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
		return usuarioRepository.findByNombreUsuario(nombreUsuario);
	}
	
	//verificar si existe nombre de usuario
	public boolean existsByNombreUsuario(String nombreUsuario) {
		return usuarioRepository.existsByNombreUsuario(nombreUsuario);
	}
	
	//verificar si existe el email
	public boolean existsByEmail(String email) {
		return usuarioRepository.existsByEmail(email);
	}
	
	//guardar usuario el repositorio trae el metodo save por defeto
	public void save(Usuario usuario) {
		usuarioRepository.save(usuario);
	}
}








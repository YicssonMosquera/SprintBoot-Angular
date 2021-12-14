package com.tutorial.crud1.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tutorial.crud1.entity.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
	
	//Busqueda por nombre
	Optional<Producto> findByNombre(String nombre);
	boolean existsBynombre(String nombre);

}

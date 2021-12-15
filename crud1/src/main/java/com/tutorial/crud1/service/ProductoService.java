package com.tutorial.crud1.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tutorial.crud1.entity.Producto;
import com.tutorial.crud1.repository.ProductoRepository;

@Service
@Transactional
public class ProductoService {

	@Autowired
	ProductoRepository productoRepository;
	
	//traer todos los productos
	public List<Producto> list(){
		return productoRepository.findAll();
	}
	
	//traer uno por medio del Id
	public Optional<Producto> getOne(int id){
		return productoRepository.findById(id);
	}
	
	//traer dato por medio del nombre
	public Optional<Producto> getByNombre(String nombre){
		return productoRepository.findByNombre(nombre);
	}
	
	//guardar el dato se le agrega el void porque no devuelve nada
	public void save(Producto produto) {
		productoRepository.save(produto);
	}
	
	//Eliminar un producto
	public void delete(int id) {
		productoRepository.deleteById(id);
	}
	
	//si existe el producto por medio del Id
	public boolean existsById(int id) {
		return productoRepository.existsById(id);
	}
	
	//si existe el producto por medio del nombre
	public boolean existsByNombre(String nombre) {
		return productoRepository.existsBynombre(nombre);
	}
	
}

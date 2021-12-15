package com.tutorial.crud1.controller;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tutorial.crud1.dto.Mensaje;
import com.tutorial.crud1.dto.ProductoDto;
import com.tutorial.crud1.entity.Producto;
import com.tutorial.crud1.service.ProductoService;

@RestController
@RequestMapping("/api/producto")
@CrossOrigin("*")
public class ProductoController {

	@Autowired
	ProductoService productoService;
	
	//ruta para cargar todos los datos
	@GetMapping("/lista")
	public ResponseEntity<List<Producto>> list(){
		List<Producto> list = productoService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}
	
	//ruta para cargar datos teniendo como parametro el id
	@GetMapping("/detail/{id}")
	public ResponseEntity<Producto> getById(@PathVariable ("id") int id){
		if(!productoService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		Producto producto = productoService.getOne(id).get();
		return new ResponseEntity<Producto>(producto, HttpStatus.OK);
	}
	
	//ruta para cargar datos teniendo como parametro el Nombre
	@GetMapping("/detailname/{nombre}")
	public ResponseEntity<Producto> getByNombre(@PathVariable ("nombre") String nombre){
		if(!productoService.existsByNombre(nombre))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		Producto producto = productoService.getByNombre(nombre).get();
		return new ResponseEntity<Producto>(producto, HttpStatus.OK);
	}
	
	//ruta para almacenar
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody ProductoDto productoDto){
		//validacion que no me mande dato vacio
		if(StringUtils.isAllBlank(productoDto.getNombre()))
			return new ResponseEntity(new Mensaje("el nombre es obligatorio"),HttpStatus.BAD_REQUEST);
		
		//validacion que no me traiga precio vacio
		if(productoDto.getPrecio() == null || productoDto.getPrecio() < 0)
			return new ResponseEntity(new Mensaje("el precio es obligatorio o debe ser mayor a 0"),HttpStatus.BAD_REQUEST);
		
		//validacion para no repetir el producto por medio del nombre
		if(productoService.existsByNombre(productoDto.getNombre()))
			return new ResponseEntity(new Mensaje("ese nombre ya existe"),HttpStatus.BAD_REQUEST);
		
		Producto producto = new Producto(productoDto.getNombre(), productoDto.getPrecio());
		productoService.save(producto);
		return new ResponseEntity(new Mensaje("producto creado con exito"),HttpStatus.OK);
		
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id,  @RequestBody ProductoDto productoDto){
		
		//comprobar el producto por medio del id
		if(!productoService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		
		//validacion para acualizar un producto con el nombre de otro que ya exciste
		if(productoService.existsByNombre(productoDto.getNombre()) && productoService.getByNombre(productoDto.getNombre()).get().getId() !=id)
			return new ResponseEntity(new Mensaje("ese nombre ya existe"),HttpStatus.BAD_REQUEST);
		
		if(StringUtils.isAllBlank(productoDto.getNombre()))
			return new ResponseEntity(new Mensaje("el nombre es obligatorio"),HttpStatus.BAD_REQUEST);
		if(productoDto.getPrecio() < 0)
			return new ResponseEntity(new Mensaje("el precio es obligatorio o debe ser mayor a 0"),HttpStatus.BAD_REQUEST);
		
		Producto producto = productoService.getOne(id).get();
		producto.setNombre(productoDto.getNombre());
		producto.setPrecio(productoDto.getPrecio());
		productoService.save(producto);
		return new ResponseEntity(new Mensaje("producto actualizado"),HttpStatus.OK);
		
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id){
		//comprobar el producto por medio del id
		if(!productoService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		productoService.delete(id);
		return new ResponseEntity(new Mensaje("producto eliminado"),HttpStatus.OK);
	}
}

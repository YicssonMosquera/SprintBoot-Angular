package com.tutorial.crud1.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

public class ProductoDto {

	//anotacion de para validar que no haya campos vacios ni espacios en blanco javax.validation.constraints.NotBlank
    @NotBlank
    private String nombre;
   
    //anotaion para validar que el numero de datos minimo en los numericos sea 0 javax.validation.constraints.Min
    @Min(0)
    private Float precio;

    public ProductoDto() {
    }

    public ProductoDto(@NotBlank String nombre, @Min(0) Float precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Float getPrecio() {
        return precio;
    }

    public void setPrecio(Float precio) {
        this.precio = precio;
    }
}

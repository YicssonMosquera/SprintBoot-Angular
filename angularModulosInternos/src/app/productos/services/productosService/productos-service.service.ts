import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../../keys'
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  API_URI = keys.api.API_URI + '/producto';
  constructor(private http: HttpClient) { }

  listarProductos(){
    return this.http.get(`${this.API_URI}/lista`)
  }

  listarProductosId(id:number){
    return this.http.get(`${this.API_URI}/detail/${id}`)
  }

  listarProductosNombre(nombre:string){
    return this.http.get(`${this.API_URI}/detailname/${nombre}`)
  }

  guardarProductos(producto:Producto){
    return this.http.post(`${this.API_URI}/create`, producto)
  }

  actualizarProductos(id:number, producto:Producto){
    return this.http.put(`${this.API_URI}/update/${id}`, producto)
  }

  eliminarProductos(id:number){
    return this.http.delete(`${this.API_URI}/delete/${id}`)
  }
}

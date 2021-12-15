import { Component, OnInit } from '@angular/core';
import {ProductosServiceService} from '../../productosService/productos-service.service'

@Component({
  selector: 'app-productos-listar',
  templateUrl: './productos-listar.component.html',
  styleUrls: ['./productos-listar.component.css']
})
export class ProductosListarComponent implements OnInit {
producto
  constructor(private productoService:ProductosServiceService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(){
    this.productoService.listarProductos().subscribe(res =>{
      this.producto = res;
      console.log(this.producto);
    })
  }

  onRowSelect(event){

  }

}

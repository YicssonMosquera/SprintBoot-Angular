import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ProductosServiceService } from '../../services/productosService/productos-service.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductosEditarComponent } from '../productos-editar/productos-editar.component';

@Component({
  selector: 'app-productos-listar',
  templateUrl: './productos-listar.component.html',
  styleUrls: ['./productos-listar.component.css']
})
export class ProductosListarComponent implements OnInit {
  producto
  selectProduc
  rowSelected: any;

  constructor(private productoService: ProductosServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listarProductos();
  }


  listarProductos() {
    this.productoService.listarProductos().subscribe(res => {
      this.producto = res;
      console.log(this.producto);
    })
  }

  onRowSelect(event) {
    this.selectProduc = event.data;
    this.router.navigate(['/mainApp/productos/edit/', this.selectProduc.id]);
  }

  eliminarProduto(Id) {
    this.productoService.eliminarProductos(Id).subscribe(res => {
      this.toastr.success('Producto eliminado', 'Ok', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.listarProductos();
    },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000,positionClass: 'toast-top-center'
        })
      }
    )

  }

  editar() {
    if (this.rowSelected) {
      alert('seleccionado')
    }
    alert('no esta seleccionado')
  }

  nuevo(): void {

  }

}

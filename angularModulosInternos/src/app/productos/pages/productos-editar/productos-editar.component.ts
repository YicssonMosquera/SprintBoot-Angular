import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductosServiceService } from '../../services/productosService/productos-service.service'

@Component({
  selector: 'app-productos-editar',
  templateUrl: './productos-editar.component.html',
  styleUrls: ['./productos-editar.component.css']
})
export class ProductosEditarComponent implements OnInit {
  formProducto: FormGroup;
  @ViewChild(ProductosEditarComponent)componentEditar:any;
  private Id;


  constructor(private productoService: ProductosServiceService, private toastr:ToastrService, private router:Router, private activedRouter:ActivatedRoute) {
    this.formProducto = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required])
    })

    this.Id = this.activedRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.listarProducto();
  }

  listarProducto(){
    this.productoService.listarProductosId(this.Id).subscribe(res=>{
      console.log(res);
      this.formProducto.patchValue(res);
    },
    err=>{
      this.toastr.error(err.error.mensaje, 'Fail',{
        timeOut:3000,positionClass: 'toast-top-center'
      })
    }
    )
  }

  handlerMain(emitter:any){
    if(emitter.action == "nuevo"){
      this.componentEditar.nuevo();
    }
  }
  

  guardarProducto() {
    if (!this.formProducto.valid) {
    }
    this.productoService.guardarProductos(this.formProducto.value).subscribe(res => {
      this.formProducto.patchValue(res);
      this.toastr.success('producto creado','Ok',{
        timeOut:3000, positionClass: 'toast-top-center'
      })
    },
      err=>{
        this.toastr.error(err.error.mensaje, 'Fail',{
          timeOut:3000,positionClass: 'toast-top-center'
        })
      });
  }

  nuevo(){
    this.formProducto.reset();
  }

  cancelar(){
    this.router.navigate(['/mainApp/productos/']);
  }

  editar(){
    this.productoService.actualizarProductos(this.Id,this.formProducto.value).subscribe(res=>{
      this.toastr.success('producto actualizado','Ok',{
        timeOut:3000, positionClass: 'toast-top-center'
      })
      this.router.navigate(['/mainApp/productos/']);
    },
    err=>{
      this.toastr.error(err.error.mensaje, 'Fail',{
        timeOut:3000,positionClass: 'toast-top-center'
      })
    }
    
    )
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {PrimeNGModule} from '../shared/prime-ng/prime-ng.module'
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosEditarComponent } from './pages/productos-editar/productos-editar.component';
import { ProductosListarComponent } from './pages/productos-listar/productos-listar.component';


@NgModule({
  declarations: [
    ProductosEditarComponent,
    ProductosListarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ToastrModule.forRoot(),
    PrimeNGModule
  ]
})
export class ProductosModule { }

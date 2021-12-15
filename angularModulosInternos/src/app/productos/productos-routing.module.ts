import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosEditarComponent } from './pages/productos-editar/productos-editar.component';
import { ProductosListarComponent } from './pages/productos-listar/productos-listar.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path:"listar",component:ProductosListarComponent},
      {path:"edit",component:ProductosEditarComponent},
      {path:"**",component:ProductosListarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProductosRoutingModule { }

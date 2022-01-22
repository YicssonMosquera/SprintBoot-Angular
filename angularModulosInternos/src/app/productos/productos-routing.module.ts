import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosEditarComponent } from './pages/productos-editar/productos-editar.component';
import { ProductosListarComponent } from './pages/productos-listar/productos-listar.component';
import {GuardGuard} from '../../app/shared/rutasprotegidas/guard.guard'
const routes: Routes = [
  {
    path:"",
    children:[
      {path:"listar",component:ProductosListarComponent, canActivate:[GuardGuard], data: {expectedRol: ['admin', 'user']}},
      {path:"edit/:id",component:ProductosEditarComponent, canActivate:[GuardGuard], data: {expectedRol: ['admin']}},
      {path:"**",component:ProductosListarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProductosRoutingModule { }

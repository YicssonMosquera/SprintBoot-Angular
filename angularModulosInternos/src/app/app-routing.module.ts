import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MainAppComponent } from './mainApp/main-app/main-app.component';
import {GuardGuard} from '..//app/shared/rutasprotegidas/guard.guard'

const routes: Routes = [
  {
    path:'mainApp',
    component:MainAppComponent
  },
  {
    path:'mainApp',
    component:MainAppComponent,
    children:[
      {path:'personas', loadChildren:()=> import('././persona/persona.module').then(m => m.PersonaModule)},
      {path:'productos',loadChildren:()=> import('././productos/productos.module').then(m => m.ProductosModule)},
    ]
  },
  {path:'index',component:IndexComponent },
  {path:'',component:LoginComponent, redirectTo:'', pathMatch:'full'},
  {path:'registro',component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

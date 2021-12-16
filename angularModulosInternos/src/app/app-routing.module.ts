import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppComponent } from './mainApp/main-app/main-app.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:MainAppComponent
  },
  {
    path:'mainApp',
    component:MainAppComponent,
    children:[
      {
        path:'personas',
        loadChildren:()=> import('././persona/persona.module').then(m => m.PersonaModule)
      },
      { path:'productos',
        loadChildren:()=> import('././productos/productos.module').then(m => m.ProductosModule)
      },
    ]
  }
  
  // {
  //   path:'**',
  //   redirectTo:'/mainApp'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

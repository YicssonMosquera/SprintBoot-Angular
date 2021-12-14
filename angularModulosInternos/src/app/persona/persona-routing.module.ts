import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaEditarComponent } from './pages/persona-editar/persona-editar.component';
import { PersonaListarComponent } from './pages/persona-listar/persona-listar.component';

const routes: Routes = [
  {
    path: "",
    children:[
      {path:"listar",component: PersonaListarComponent},
      {path:"editar",component: PersonaEditarComponent},
      {path:"**",component: PersonaListarComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PersonaRoutingModule { }

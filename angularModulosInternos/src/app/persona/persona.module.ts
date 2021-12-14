import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaListarComponent } from './pages/persona-listar/persona-listar.component';
import { PersonaEditarComponent } from './pages/persona-editar/persona-editar.component';



@NgModule({
  declarations: [
    PersonaListarComponent,
    PersonaEditarComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule
  ]
})
export class PersonaModule { }

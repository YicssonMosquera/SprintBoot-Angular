import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-persona-editar',
  templateUrl: './persona-editar.component.html',
  styleUrls: ['./persona-editar.component.css']
})
export class PersonaEditarComponent implements OnInit {
  isLogged
  
  formPersona:FormGroup;
  constructor() { 
    this.formPersona = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      nombreUsuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      authorities: new FormControl([], [Validators.required])
    })
  }

  ngOnInit(): void {
    //reset()   esta linea es para limpiar el componente
    
  }

}

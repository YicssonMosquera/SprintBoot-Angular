import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import keys from '../../../../keys'
import { Persona } from '../../models/persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {
  API_URI = keys.api.API_URI + '/auth';
  constructor(private http: HttpClient) { }

  nuevoUsuario(Persona:Persona){
    return this.http.post(`${this.API_URI}/nuevo`, Persona)
  }
}

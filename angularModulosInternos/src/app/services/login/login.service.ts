import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from 'src/app/models/JwtDTO';
import { Login } from 'src/app/models/login';
import { nuevoUsuario } from 'src/app/models/nuevoUsuario';
import keys from '../../../keys'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URI = keys.api.API_URI + '/auth';
  HttpClient: any;
  constructor(private http: HttpClient) { }

  
  loginUser(login:Login): Observable<JwtDTO> {
    return this.http.post<JwtDTO>(`${this.API_URI}/login`, login)
  };

  nuevoUsuario(nuevoUsuario:nuevoUsuario){
    return this.http.post(`${this.API_URI}/nuevo`, nuevoUsuario)
  }

}

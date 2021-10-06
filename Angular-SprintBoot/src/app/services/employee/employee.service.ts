import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API_URI = keys.api.API_URI + '/employ';
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get(`${this.API_URI}/findAll`)
  }
}

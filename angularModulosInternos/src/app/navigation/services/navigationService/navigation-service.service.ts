import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  titleSelectOption: string = '';
  pathPrincipal:string = 'MyApp';
  menuTree
  constructor(private http: HttpClient) {
    this.menuTree = [
      {
        label:'Menu',
        expanded:true,
        children:[
          {label:'Productos',icon:'fas fa-hand-holding-usd',recurso:'producto',ruta:'mainApp/productos'},
          {label:'Persona',icon:'fas fa-users',recurso:'producto',ruta:'mainApp/personas'}
        ]
      }
    ]
  }

  getMenuTree(){
    return this.menuTree;
  }
  

}

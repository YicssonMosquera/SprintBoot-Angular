import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee/employee.service'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.cargarTodos();
  }
  cargarTodos(){
    this.employeeService.findAll().subscribe(res=>{
      console.log(res);
    })
  }

}

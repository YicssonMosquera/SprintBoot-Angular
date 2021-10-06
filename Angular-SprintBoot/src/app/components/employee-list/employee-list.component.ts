import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee/employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

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

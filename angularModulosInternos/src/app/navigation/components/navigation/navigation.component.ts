import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavigationServiceService} from '../../services/navigationService/navigation-service.service'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuTree
  constructor(private navigationService:NavigationServiceService, private router:Router) {

  }

  ngOnInit(): void {
    this.menuTree =  this.navigationService.getMenuTree();
  }

  nodeSelect(event:any){
   this.router.navigate(["/"+event.node.ruta+""]);
   
  }

}

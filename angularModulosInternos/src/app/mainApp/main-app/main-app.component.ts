import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {
  visibleSidebar1;
  isLogged = false;
  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.verificarToken();
  }
  verificarToken() {
    if (this.tokenService.getToken) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
      this.router.navigate(['/login']);
    }
  }

  openMenu() {

  }

  logOut(){
    this.tokenService.logOut();
  }
}

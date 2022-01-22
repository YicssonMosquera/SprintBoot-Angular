import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup;
  isLogged = false;
  isLoginFail = false;
  roles:string[] = [];
  errMsj:string;

  
  constructor(private tokenService:TokenService, private loginService:LoginService, private router:Router) { 
    this.formLogin = new FormGroup({
      nombreUsuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.verificarLogein();
  }

  verificarLogein(){
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginService.loginUser(this.formLogin.value).subscribe(res=>{
      this.isLogged = true;
      this.isLoginFail = false;

      this.tokenService.setToken(res.token);
      this.tokenService.setUserName(res.nombreUsuario);
      this.tokenService.setAuthorities(res.authorities);
      this.roles = res.authorities;
      this.router.navigate(['/index']);
    },
    err=>{
      this.isLogged = false;
      this.isLoginFail = true;
      this.errMsj = err.error.message;
      console.log(this.errMsj);
    })
  }

}

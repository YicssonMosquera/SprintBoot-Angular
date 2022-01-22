import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login/login.service';
import { TokenService } from 'src/app/services/token/token.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  roles:string[] = [];
  errMsj:string;
  isLogged = false;
  formPersona:FormGroup;
  constructor(private tokenService:TokenService, private loginService:LoginService, private router:Router, private toastr:ToastrService) { 
    this.formPersona = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      nombreUsuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.verificarLogein();
  }

  verificarLogein(){
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  onRegister(): void{
    this.loginService.nuevoUsuario(this.formPersona.value).subscribe(res=>{
      this.toastr.success('Cuenta creada','Ok',{
        timeOut:3000, positionClass: 'toast-top-center'
      })
      this.router.navigate(['/']);
    },
    err=>{
      this.toastr.error(err.error.mensaje, 'Fail',{
        timeOut:3000,positionClass: 'toast-top-center'
      })
    })
  }

}

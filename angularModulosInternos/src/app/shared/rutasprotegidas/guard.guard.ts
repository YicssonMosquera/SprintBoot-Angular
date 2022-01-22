import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  realRol:string;
  constructor(private tokenService:TokenService, private router:Router, private toastr:ToastrService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    const expectedRol = route.data.expectedRol;
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'user';
    
    roles.forEach(rol=>{
      if(rol === 'ROLE_ADMIN'){
        this.realRol = 'admin';
      }
    });

    if(!this.tokenService.getToken()) {
      this.router.navigateByUrl('/')
      console.log('entrando')
      return false;
    }else if( expectedRol.indexOf(this.realRol) == -1){
      this.toastr.error('No tienes permiso sobre esta opción', 'Fail',{
        timeOut:3000,positionClass: 'toast-top-center'
      })
      return false;
    }
    return true;

  }
  
  
}

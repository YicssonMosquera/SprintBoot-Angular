import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  TOKEN_KEY = 'AuthToken';
  USERNAME_KEY = 'AuthUserName';
  AUTHORITIES_KEY = 'AuthAuthorities';

  roles: Array<string> = [];

  constructor(private router:Router) { }

  public setToken(token:string):void{
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);

  }
  public getToken(): string {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public setUserName(userName:string):void{
    window.sessionStorage.removeItem(this.USERNAME_KEY);
    window.sessionStorage.setItem(this.USERNAME_KEY, userName);

  }
  public getUserName(): string {
    return sessionStorage.getItem(this.USERNAME_KEY);
  }

  public setAuthorities(auThorities:string[]):void{
    window.sessionStorage.removeItem(this.AUTHORITIES_KEY);
    window.sessionStorage.setItem(this.AUTHORITIES_KEY, JSON.stringify(auThorities));

  }
  public getAuthorities(): string[] {
    this.roles = [];
    if(sessionStorage.getItem(this.AUTHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(this.AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority)
      });
    }
    return this.roles;
  }

  public logOut():void{
    window.sessionStorage.clear();
    this.router.navigateByUrl('/');
    window.location.reload();
  }
}

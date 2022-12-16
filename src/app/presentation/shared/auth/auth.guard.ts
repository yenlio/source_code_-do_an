import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/data/service/auth.service';
import { Router } from '@angular/router';
// import { AuthService } from './AuthService';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router) {

  }
  canActivate(
   ) {
  
    // const expectedRole = route.data['expectedRole'];
    // const token = localStorage.getItem('token');
    // // decode the token to get its payload
    // const tokenPayload = decode(token!);
    // console.log(tokenPayload,"tokenPayload");
    
    // if (
    //   !this.auth.isAuthenticated() 
    //   // tokenPayload.role !== expectedRole
    // ) {
    //   this.route.navigate(['login']);
    //   return false;
    // }
    if(this.auth.IsLoggedIn()){
      return true;
    }
    else{
     
      this.route.navigate(["auth/login"]);
      return false
    }
  }

}
  


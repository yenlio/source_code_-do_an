import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/data/service/auth.service';
import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {

  }
  // canActivate(route: ActivatedRouteSnapshot){
  //   const expectedRole = this.route.data.expectedRole;
  //   const token = localStorage.getItem('token');

  //   this.auth.haveAccess();
  //   return true;
  // }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data['expectedRole'];
    console.log(expectedRole," expectedRole");
    
    // const token = localStorage.getItem('token');
    // // decode the token to get its payload
    // const tokenPayload = decode(token!);
    // console.log(tokenPayload,"tokenPayload");
    
    // if ( !this.auth.haveAccess() ) {
    //   this.router.navigate(['login']);
    //   return false;
    // }
    return true;
  }
}

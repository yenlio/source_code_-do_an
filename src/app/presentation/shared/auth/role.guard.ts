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
 
  canActivate(route: ActivatedRouteSnapshot):any {
   var role= localStorage.getItem('roles');
   console.log(role,"role intercepter");
   
    // if(role?.includes("USER")){
    //   console.log("hi");
    //   this.router.navigate(['/admin']);
    // }else{
    
      
    // }
 
    
  
  }
}

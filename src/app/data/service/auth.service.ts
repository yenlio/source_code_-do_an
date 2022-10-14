import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
const AUTH_API = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // jwtHelper: any;
 
  constructor(private http: HttpClient) { }
  public jwtHelper: JwtHelperService = new JwtHelperService();

  public login(payload: any): Observable<any> {
    const path = AUTH_API + 'login';
    console.log(path, payload, 'payload');
    return this.http.post(path, payload);
  }

  IsLoggedIn() {
    return localStorage.getItem("token") != null;
  }

 public getToken(){
    return localStorage.getItem("token")||"";
  }
  public haveAccess(){
    const token = localStorage.getItem('token');
    // const tokenPayload = decode(token!);
    // console.log(tokenPayload," tokennnn");
    return !this.jwtHelper.isTokenExpired(token!);
    
    
  }


  public register(payload: any): Observable<any> {
    const path = AUTH_API + 'register';
    console.log(path, payload, 'payload');
    return this.http.post(path, payload);
  }
}

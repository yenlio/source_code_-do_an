import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(payload: any): Observable<any> {
    const path = AUTH_API + 'login';
    console.log(path, payload, 'payload');
    return this.http.post(path, payload);
  }

  public register(payload: any): Observable<any> {
    const path = AUTH_API + 'resgister';
    console.log(path, payload, 'payload');
    return this.http.post(path, payload);
  }
}

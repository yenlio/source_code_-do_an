import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getTour(): Observable<any> {
    const path = AUTH_API + 'tour';
    console.log(path, 'payload');
    return this.http.get(path);
  }
}

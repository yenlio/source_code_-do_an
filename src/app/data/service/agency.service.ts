import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/';
@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http: HttpClient) { }
  public postTour(payload: FormData): Observable<any> {
    const path = AUTH_API + 'tour';
    console.log(path, payload, 'payload');
    return this.http.post(path, payload);
  }
}



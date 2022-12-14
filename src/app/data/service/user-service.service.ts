import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/';
@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

 
  constructor(private http: HttpClient) { }
  public getTourById(id:any): Observable<any> {
    console.log(id,"id detail");
    
    const path = AUTH_API + 'tour/getTour'+`?id=${id}`;
   
    return this.http.get(path);
  }

  public postTim(data:any):Observable<any>{
    const path=AUTH_API+'tour/postTim'
    return this.http.post(path,data)
  }
  // public getTim():Observable<any>{
  //   const path=AUTH_API+'tour'
  //   return this.http.get(path)
  // }
}

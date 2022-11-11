import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  constructor(private http: HttpClient) { }

  public getBlog(): Observable<any> {
    const path = AUTH_API + 'blog';
    console.log(path, 'payload');
    return this.http.get(path);
  }
  public postBlog(data:any): Observable<any> {
    console.log(data," du lieu chuan bi upload");
    
    const path = AUTH_API + 'blog';
    console.log(path, 'payload');
    return this.http.post(path,data);
  }
  // public updateTour(id: any): Observable<any> {
  //   const path =AUTH_API + 'tour/verify' + `?id=${id}`;
  //   console.log(path," path");
  //   return this.http.post(path,null);
  // }
  // public deleteTour(id: any): Observable<any> {
  //   const path =AUTH_API + 'tour' + `?id=${id}`;
  //   console.log(path," path");
  //   return this.http.delete(path);
  // }
}



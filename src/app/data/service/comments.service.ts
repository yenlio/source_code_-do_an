import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/';
@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  constructor(private http: HttpClient) { }

  public getComments(): Observable<any[]> {
   return this.http.get<any[]>('http://localhost:3001/comments');
  }

  public postComments(text:string,parentId:null|string): Observable<any[]> {
    return this.http.post<any>('http://localhost:3001/comments',{body:text,parentId,createAt:new Date().toISOString(), userId:"1",username:"hoangyennn"})
   }
}

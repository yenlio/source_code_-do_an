import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/';
@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  constructor(private http: HttpClient) { }

  public getComments(id:any): Observable<any[]> {
   return this.http.get<any[]>(`http://localhost:8080/api/comment/get/`+id);
  }

  public postComments(data:any): Observable<any> {
    console.log(data,"data post like");
    
    return this.http.post<any>('http://localhost:8080/api/comment',data)
   }


   public postLikeCmt(data:any): Observable<any> {
    console.log(data," data chuan bị goi");
    return this.http.get<any>(`http://localhost:8080/api/like??idUser=${data.idUser}&idCmt=${data.idCmt}&status=${data.status}`,data)
   }

   public getCountlikeCmt(data:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/like/count/${data}`)
   }


}

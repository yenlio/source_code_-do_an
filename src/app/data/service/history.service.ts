import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/';
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private messageSource = new BehaviorSubject('message from service');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }
  getdataPayment(data: any) {
    this.messageSource.next(data);
  }
  public getHistoryById(id:any): Observable<any> {
    console.log(id,"id history");
    
    const path = AUTH_API + 'thanh-toan/hoa-don-tt'+`/${id}`;
   
    return this.http.get(path);
  }


}

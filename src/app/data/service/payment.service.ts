// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor( private http: HttpClient) { }

  public postPayment(data:any,isActive:boolean): Observable<any> {
    console.log(data,"data post like");
    console.log(isActive," is active");
   
    return this.http.post<any>(`http://localhost:8080/api/thanh-toan?active=${isActive}`,data)
   }

}

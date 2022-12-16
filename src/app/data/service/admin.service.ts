import { HttpParams, HttpClient } from '@angular/common/http';
// import { HttpClient, } from '@angular/common/http';
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
  
  public getTourhot(): Observable<any> {
    const path = AUTH_API + 'tour/tourHot';
    console.log(path, 'payload');
    return this.http.get(path);
  }

  public getAgency(): Observable<any> {
    const path = AUTH_API + 'getAgency';
    console.log(path, 'payload');
    return this.http.get(path);
  }

  public confirmAgency(id: any): Observable<any> {
    const path = AUTH_API + 'verify_agency' + `?id=${id}`;
    console.log(path, " path");
    return this.http.post(path, null);
  }



  public updateTour(id: any): Observable<any> {
    const path = AUTH_API + 'tour/verify' + `?id=${id}`;
    console.log(path, " path");
    return this.http.post(path, null);
  }
  public deleteTour(id: any): Observable<any> {
    const path = AUTH_API + 'tour' + `?id=${id}`;
    console.log(path, " path");
    return this.http.delete(path);
  }



  // public searchTour(data: any): Observable<any> {
  //   let params = new HttpParams();
  //   params = params.append('diaDiem', data.searchByPlace);
  

  //   console.log(data, "data search ");
  //   const path = AUTH_API + 'tour/gethome';
  //   console.log(path, " path");
  //   return this.http.get(path, { params: params })
  // }

  //   public searchTour(data: any): Observable<any> {
   
  //   const path = `http://localhost:8080/api/tour/get-home?diaDiem=du lich ninh binh`
  //   console.log(path, " path");
  //   return this.http.get(path)
  // }
  searchTour(data:any) {

    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('diaDiem', data.searchByPlace);
    // params = params.append('secondParameter', data.valueTwo);

    // Make the API call using the new parameters.
    return this.http.get(`${AUTH_API}tour/get-home`, { params: params })
}
}


// import { HttpParams, HttpClient } from '@angular/common/http';

// constructor(private http: HttpClient) { }



// this.http.get(StaticSettings.BASE_URL, {params: params}).subscribe(...);

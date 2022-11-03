import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public b = new BehaviorSubject<any>([]);
  
  public search = new BehaviorSubject<string>("");
  constructor() { }

  getProducts(){
  // const b=localStorage.getItem("tourCart")
 
   const a= this.productList.asObservable();
   
   return a;
  }

  addtoCart(tour : any){
    this.cartItemList.push(tour);
   this.productList.next(this.cartItemList); 
   localStorage.setItem("tourCart",this.productList.value);
    // console.log(this.productList.value)
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
}

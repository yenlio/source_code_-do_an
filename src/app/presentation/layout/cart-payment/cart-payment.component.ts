import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/data/service/cart.service';

@Component({
  selector: 'app-cart-payment',
  templateUrl: './cart-payment.component.html',
  styleUrls: ['./cart-payment.component.scss']
})
export class CartPaymentComponent implements OnInit {
  valuePeople: any = 1
  arrPrice: any[]=[]
  tour!: any
  priceItem: any = 0
  totalPrice: any=0
  public grandTotal !: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe((res: any) => {
        this.tour = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }
  stepDown(id: any) {
    this.tour.filter((item: any) => {
      if (item.id == id) {
        item.valuePeople = item.valuePeople - 1;
        item.priceItem = item.valuePeople * item.price   
      }
    })
    const result=this.tour.map((item:any)=>{
      const sum=+item.priceItem
       return sum
      })    
      this.totalPrice =result.reduce((partialSum: any, a: any) => partialSum + a, 0);
  }

  stepUp(id: any) {
    console.log(id, "iddd");
    this.tour.filter((item: any) => {
      if (item.id == id) {
        item.valuePeople = item.valuePeople + 1;
        item.priceItem = item.valuePeople * item.price
      }
    })
  const result=this.tour.map((item:any)=>{
  const sum=+item.priceItem
   return sum
  })
  this.totalPrice =result.reduce((partialSum: any, a: any) => partialSum + a, 0);  
  }
}

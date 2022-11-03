import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/data/service/cart.service';

@Component({
  selector: 'app-cart-payment',
  templateUrl: './cart-payment.component.html',
  styleUrls: ['./cart-payment.component.scss']
})
export class CartPaymentComponent implements OnInit {
  tour!:any
  public grandTotal !: number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res: any)=>{
      this.tour = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

}

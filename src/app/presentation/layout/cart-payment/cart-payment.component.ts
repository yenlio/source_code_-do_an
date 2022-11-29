import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/data/service/cart.service';
import { PaymentService } from 'src/app/data/service/payment.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PopupPaymentComponent } from './popup-payment/popup-payment.component';
@Component({
  selector: 'app-cart-payment',
  templateUrl: './cart-payment.component.html',
  styleUrls: ['./cart-payment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CartPaymentComponent implements OnInit {
  valuePeople: any = 1
  notification!:any
  arrPrice: any[] = []
  tour!: any
  priceItem: any = 0
  totalPrice: any = 0
  public grandTotal !: number;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private cartService: CartService, private PaymentService: PaymentService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe((res: any) => {
        this.tour = res;
      console.log(this.tour,"tourrrrrrrrrrrrrrrrrrrrr");
      
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }

  userForm = new FormGroup({
    // idNguoiMua: new FormControl(''),
    tenNguoiDk: new FormControl(''),
    sdtNguoiDk: new FormControl(''),
    soCMNDNguoiDk: new FormControl(''),
    diaDiemDuaDon: new FormControl(''),
  })

  paymentForm = new FormGroup({
    maAtm: new FormControl(''),
    passAtm: new FormControl(''),
  })

  dataPayment: any = {
    tenNguoiDk: '',
    sdtNguoiDk: '',
    soCMNDNguoiDk: '',
    diaDiemDuaDon: '',
    idNguoiMua:'',
    maAtm: '',
    passAtm: '',
    arrIdTour: [],
    tongSoTien: 0
  };

  payment() {
    console.log(localStorage.getItem("id")," id nguoi mua");
    
    console.log(this.cartService.arrIdTour, "arr id tour");

    this.dataPayment.tenNguoiDk = this.userForm.value.tenNguoiDk,
      this.dataPayment.sdtNguoiDk = this.userForm.value.sdtNguoiDk,
      this.dataPayment.soCMNDNguoiDk = this.userForm.value.soCMNDNguoiDk,
      this.dataPayment.diaDiemDuaDon = this.userForm.value.diaDiemDuaDon,
      this.dataPayment.idNguoiMua=localStorage.getItem("id")
      this.dataPayment.maAtm = this.paymentForm.value.maAtm
    this.dataPayment.passAtm = this.paymentForm.value.passAtm
    this.dataPayment.arrIdTour = this.cartService.arrIdTour
    this.dataPayment.tongSoTien = this.totalPrice

    console.log(this.dataPayment, " du lieu gui di");
    this.PaymentService.postPayment(this.dataPayment, false).subscribe((res) => {
    this.notification=res
      this.openDialog('1000ms', '10ms',res)
      console.log(res.data.status,"status");
      
      if(res.data.status=="CONFIRM"){
        this.PaymentService.postPayment(this.dataPayment,true).subscribe((res:any)=>{
          console.log(res,"du lieu thanh cong");
        setTimeout(() => {
          this.openDialog('1000ms', '100ms',res)
          console.log(res.data.status,"status");
        }, 3000);
        })
      }


    })
  }

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action, {
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //   });
  // }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string,data:any): void {
    this.dialog.open(PopupPaymentComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {data},
    });
  }
  



  stepDown(id: any) {
    this.tour.filter((item: any) => {
      if (item.id == id) {
        item.valuePeople = item.valuePeople - 1;
        item.priceItem = item.valuePeople * item.price
      }
    })
    const result = this.tour.map((item: any) => {
      const sum = +item.priceItem
      return sum
    })
    this.totalPrice = result.reduce((partialSum: any, a: any) => partialSum + a, 0);
  }

  stepUp(id: any) {
    console.log(id, "iddd");
    this.tour.filter((item: any) => {
      if (item.id == id) {
        item.valuePeople = item.valuePeople + 1;
        item.priceItem = item.valuePeople * item.price
      }
    })
    const result = this.tour.map((item: any) => {
      const sum = +item.priceItem
      return sum
    })
    this.totalPrice = result.reduce((partialSum: any, a: any) => partialSum + a, 0);
  }
}

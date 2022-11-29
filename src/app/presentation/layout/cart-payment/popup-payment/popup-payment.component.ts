import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/data/service/payment.service';
@Component({
  selector: 'app-popup-payment',
  templateUrl: './popup-payment.component.html',
  styleUrls: ['./popup-payment.component.scss']
})
export class PopupPaymentComponent implements OnInit {
  // @ViewChild('closebutton') closebutton: any;
  dataNoti!:any
  tours!:any
  dataPayment!:any
  totalPrice!:any
  constructor(
    public dialogRef: MatDialogRef<PopupPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private PaymentService:PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.dataNoti=this.data.data.noti
   this.dataPayment=this.data.data.payment
   this.tours=this.data.data.tour
   this.totalPrice=this.data.data.totalPrice


 console.log(this.dataNoti.data.data.message);
 console.log(this.dataNoti.status);
 
 console.log(this.dataPayment.tenNguoiDk);
 console.log(this.totalPrice," tong gia");
 
 console.log(this.tours," tour");
 console.log(this.dataNoti.data.data.status,"thế nào");
 
 
 
  
  
  }
  onSave(){
    this.PaymentService.postPayment(this.dataPayment,true).subscribe((res:any)=>{
      console.log(res,"du lieu thanh cong");
      this.router.navigate(['dashboard/history']);

  
    })
    // this.closebutton.nativeElement.click(); 
   }

}

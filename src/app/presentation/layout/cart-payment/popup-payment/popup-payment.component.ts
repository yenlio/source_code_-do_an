import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-payment',
  templateUrl: './popup-payment.component.html',
  styleUrls: ['./popup-payment.component.scss']
})
export class PopupPaymentComponent implements OnInit {
  dataNoti!:any
  constructor(
    public dialogRef: MatDialogRef<PopupPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
   this.dataNoti=this.data
   console.log(this.dataNoti.data.data.message," du lieu");
   
    
  }

}

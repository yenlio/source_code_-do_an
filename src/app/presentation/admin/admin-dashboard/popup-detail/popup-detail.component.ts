import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-popup-detail',
  templateUrl: './popup-detail.component.html',
  styleUrls: ['./popup-detail.component.scss']
})
export class PopupDetailComponent implements OnInit {
  dialogTitle!: string;
dialogDescription!: string;
  @Input() showForm = false;
  constructor(  public dialogRef: MatDialogRef<PopupDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   console.log(this.data," da ta tu cha");
   
    
  }
  save(){

  }
  closeForm(){

  }

}

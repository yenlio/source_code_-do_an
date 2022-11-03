import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
// import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';
import { AdminService } from 'src/app/data/service/admin.service';
@Component({
  selector: 'app-popup-detail',
  templateUrl: './popup-detail.component.html',
  styleUrls: ['./popup-detail.component.scss']
})
export class PopupDetailComponent implements OnInit {
  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];
  dialogTitle!: string;
  dialogDescription!: string;
  dataDialog!: any
  dialogConfig!: MatDialogConfig;

  @Output() confirm= new EventEmitter<any>()
  @Input() showForm = false;
  constructor(private AdminService: AdminService,public dialogRef: MatDialogRef<PopupDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  // slides = [{'image': 'https://therichpost.com/wp-content/uploads/2021/02/Vuejs-Fashion-Ecommerce-Template-Free.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'},{'image': 'https://therichpost.com/wp-content/uploads/2020/10/Angular-10-Learning-Education-Center-Free-Template-1.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2020/11/Reactjs-Easy-Shop-Free-Template-with-Source-Code.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'}];

  ngOnInit(): void {
    this.dataDialog = this.data.tour
    console.log(this.dataDialog, "data dialog");


  }
  confirmTour(id:any) {
    console.log(id," id");
       this.AdminService.updateTour(id).subscribe((res)=>{
        console.log(res,"du lieu update xong");
           
       })

  }
  closeForm() {

  }


}

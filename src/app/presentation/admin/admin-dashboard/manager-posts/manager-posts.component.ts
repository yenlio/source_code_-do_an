import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/data/service/admin.service';
import {MatDialog} from '@angular/material/dialog';
import { PopupDetailComponent } from '../popup-detail/popup-detail.component';
@Component({
  selector: 'app-manager-posts',
  templateUrl: './manager-posts.component.html',
  styleUrls: ['./manager-posts.component.scss']
})
export class ManagerPostsComponent implements OnInit {
  showForm = false;
  constructor(private AdminService: AdminService,public dialog: MatDialog) { }
  dataTour!:any
  ngOnInit(): void {
    this.getPostTour()
  }
  getPostTour(){
  this.AdminService.getTour().subscribe((res)=>{
    this.dataTour=res.data
    console.log(this.dataTour," data tour");
  })
  }

  openPopup(){ 
    this.showForm=true
    console.log(this.showForm);

  }
  confirmTour(id:any){
    console.log(id," id");
       this.AdminService.updateTour(id).subscribe((res)=>{
        this.getPostTour()
         
       })
  }
  deleteTour(id:any){
    this.AdminService.deleteTour(id).subscribe((res)=>{
      this.getPostTour()
    })

  }

  openDialog(tour:any) {

    const dialogRef = this.dialog.open(PopupDetailComponent, {
      
      data: {
       tour
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  


}

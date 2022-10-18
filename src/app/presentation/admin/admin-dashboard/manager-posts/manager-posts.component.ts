import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/data/service/admin.service';

@Component({
  selector: 'app-manager-posts',
  templateUrl: './manager-posts.component.html',
  styleUrls: ['./manager-posts.component.scss']
})
export class ManagerPostsComponent implements OnInit {
  showForm = false;
  constructor(private AdminService: AdminService) { }
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

  


}

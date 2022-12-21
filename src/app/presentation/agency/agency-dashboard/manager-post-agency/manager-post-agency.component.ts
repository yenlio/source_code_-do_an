import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/data/service/admin.service';
import { AgencyService } from 'src/app/data/service/agency.service';
@Component({
  selector: 'app-manager-post-agency',
  templateUrl: './manager-post-agency.component.html',
  styleUrls: ['./manager-post-agency.component.scss']
})
export class ManagerPostAgencyComponent implements OnInit {

  dataTour!:any
  localRole!:any
  constructor(private AgencyService:AgencyService,private AdminService:AdminService) { }

  ngOnInit(): void {
    this.getPostTour()
  }

  getPostTour(){
    const id= localStorage.getItem("id")
    this.AgencyService.getTourbyAgency(id).subscribe((res)=>{
      this.dataTour=res.data
     console.log("thanh cong");
     
    })
    }

    deleteTour(id:any){
      this.AdminService.deleteTour(id).subscribe((res)=>{
        this.getPostTour()
      })
  
    }
}

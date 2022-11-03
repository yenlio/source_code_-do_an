import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/data/service/admin.service';
@Component({
  selector: 'app-tour-access',
  templateUrl: './tour-access.component.html',
  styleUrls: ['./tour-access.component.scss']
})
export class TourAccessComponent implements OnInit {
  dataTour!:any
  localRole!:any
  constructor(private AdminService:AdminService) { }

  ngOnInit(): void {
    this.getPostTour()
  }

  getPostTour(){
    this.AdminService.getTour().subscribe((res)=>{
      this.dataTour=res.data

      console.log(this.dataTour," data tour");
     console.log( localStorage.getItem("roles"),"jaswsdf" );
     this.localRole=localStorage.getItem("roles")
     
     

      
    })
    }

}

import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/data/service/admin.service';
@Component({
  selector: 'app-chartadmin',
  templateUrl: './chartadmin.component.html',
  styleUrls: ['./chartadmin.component.scss']
})
export class ChartadminComponent implements OnInit {
  dataAdmin:any={
    getSumUser:0,
    getSumAngency:0,
    getSumAll:0
    
  }
  dataAgency:any
  constructor(private AdminService: AdminService) { }

  ngOnInit(): void {
   this.getinforUser()
   this.getinforAdmin()
   this.getAgency()
  }

  getinforUser(){
    this.AdminService.getInforAdmin(1).subscribe((res) => {
      this.dataAdmin.getSumUser = res.getSumUser
      this.dataAdmin.getSumAll=res.getSumAll
      console.log(this.dataAdmin, "data admin");

    })
  }

  getinforAdmin(){
    this.AdminService.getInforAdmin(3).subscribe((res)=>{
      this.dataAdmin.getSumAngency=res.getSumAngency
      console.log(this.dataAdmin," dataaaa");
      
    })
  }
  getAgency(){
    this.AdminService.getAgency().subscribe((res)=>{
      this.dataAgency=res.data
      console.log(this.dataAgency,"data agency");
      
    })
  }


}

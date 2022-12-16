import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/data/service/admin.service';
@Component({
  selector: 'app-manager-role',
  templateUrl: './manager-role.component.html',
  styleUrls: ['./manager-role.component.scss']
})
export class ManagerRoleComponent implements OnInit {
  dataAgency:any
  constructor(private AdminService:AdminService) { }

  ngOnInit(): void {
   this.getAgency()
  }

  confirmAgency(id:any){
    this.AdminService.confirmAgency(id).subscribe((res)=>{
     this.getAgency()
    })
  }
  deleteAgency(id:any){
   this.dataAgency

  }
  getAgency(){
    this.AdminService.getAgency().subscribe((res)=>{
      this.dataAgency=res.data
      console.log(this.dataAgency,"data agency");
      
    })
  }



}

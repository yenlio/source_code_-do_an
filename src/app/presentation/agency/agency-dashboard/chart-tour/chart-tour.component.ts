import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { AgencyService } from 'src/app/data/service/agency.service';
import { AdminService } from 'src/app/data/service/admin.service';
@Component({
  selector: 'app-chart-tour',
  templateUrl: './chart-tour.component.html',
  styleUrls: ['./chart-tour.component.scss']
})
export class ChartTourComponent implements OnInit {

  constructor(private AgencyService:AgencyService,private AdminService:AdminService) { }
  dataAgency={
    getMoneyTour:0,
    getCountTour:0
  }
  dataTour:any
  ngOnInit(): void {
   this.getPostTour()
    
    this.AgencyService.getmoney(localStorage.getItem("id")).subscribe((res)=>{
     this.dataAgency=res
   this.dataAgency.getMoneyTour=this.formatNumber(this.dataAgency.getMoneyTour)
      
    })
  }
  formatNumber(num: any) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  getPostTour(){
    this.AdminService.getTour().subscribe((res)=>{
      this.dataTour=res.data

     
     
console.log(this.dataTour," hi");

      
    })
    }
 

}

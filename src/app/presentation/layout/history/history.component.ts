import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/data/service/history.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  messagePayment:any=""
  constructor(private historyService:HistoryService) { }
  dataHistory!:any
  ngOnInit(): void {
    this.historyService.currentMessage.subscribe((res)=>{  
      this.messagePayment=res
    })
    this.getHistory()
  }

  getHistory(){
    var id= localStorage.getItem("id")
    console.log(id," id");
    this.historyService.getHistoryById(id).subscribe((res)=>{
      console.log(res,"res");
      this.dataHistory=res.data
      console.log(this.dataHistory,"history" );
      

    })
    
  }


}

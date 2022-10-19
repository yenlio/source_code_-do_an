import { Component, Injectable, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {NgbDateStruct,NgbDateParserFormatter,NgbDate} from '@ng-bootstrap/ng-bootstrap';
import { AgencyService } from 'src/app/data/service/agency.service';






@Component({
  selector: 'app-post-tour',
  templateUrl: './post-tour.component.html',
  styleUrls: ['./post-tour.component.scss']
})




export class PostTourComponent implements OnInit {
  
  timeStart!:  NgbDateStruct;
  myFiles:string [] = [];

  constructor(private AgencyService:AgencyService) { }

  ngOnInit(): void {
  
  }
  dataTour:any={
                price:'' ,
                description:'', 
                title :'',
                star:'' ,
                comment:'' ,
                totalMember:'',
                totalDay :'',
                productStatus:'',};


  postTourForm = new FormGroup({
                title: new FormControl(""),
                description: new FormControl(""),
                price: new FormControl(""),
                totalDay: new FormControl(""),
                timeStart: new FormControl(""),
                totalMember: new FormControl(""),
                image: new FormControl(""),
  
  });

  postTour(){
  }
  get f(){
    return this.postTourForm.controls;
  }
  onFileChange(e:any){
    console.log(e.target.files," file");
    console.log(e.target.files.length);
    
   
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
  }
  
    
  }
 
  submit(){
   var current_date=new Date(this.dataTour.timeStart);
   var timestamp = current_date.getTime();
   var formatted_date = current_date.getDate() + "/" + current_date.getMonth() + "/" + current_date.getFullYear()

   console.log(formatted_date," log");
   
         
   
     
    const formData = new FormData();
    formData.append("price",this.dataTour.price)
    formData.append("description",this.dataTour.description)
    // formData.append("star",this.dataTour.star)
    // formData.append("comment",this.dataTour.comment)
    formData.append("totalMember",this.dataTour.totalMember)
    formData.append("timeStart",formatted_date)
    formData.append("title",this.dataTour.title)
    formData.append("totalDay",this.dataTour.totalDay)
    for (var i = 0; i < this.myFiles.length; i++) { 
      formData.append("image", this.myFiles[i]);
    }

   this.AgencyService.postTour(formData).subscribe((res)=>{
    if(res.messenger.includes("Thành công")){
      alert("thanh cong")
    }
 
   })
    
  }
  

}


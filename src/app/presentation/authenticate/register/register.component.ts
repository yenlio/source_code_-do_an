import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isUser=true

  constructor() { }

  ngOnInit(): void {
    console.log(this.isUser,"is user");
    
  }

  registerForm = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl(''),
    fullName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    company: new FormControl(''),
    role: new FormControl(''),
  });

  login(){
    console.log(this.registerForm.value," value");
  }

 
  checkUser(e:Event, item:any){
    console.log(e, item," itemmm");
    
    if(this.registerForm.value.role!=="USER"){
      this.isUser==true
      console.log(this.isUser);
      
    }
    else this.isUser==false
  }







}

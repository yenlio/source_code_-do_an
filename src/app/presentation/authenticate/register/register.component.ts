import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from"../../../data/service/auth.service"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isUser:boolean=true

  constructor(private AuthService: AuthService,private router: Router) { }

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
    nameRole: new FormControl(''),
  });

  register(){
    console.log(this.registerForm.value," value");
    this.registerForm.value.nameRole=""
    const formData=this.registerForm.value
    this.AuthService.register(formData).subscribe((res)=>{
      console.log(res," du lieu back tra ve");
      this.router.navigate(['auth/login']);

    })
  }
 
  checkUser(e:any){
    console.log(e.target.value," itemmm");
    if(e.target.value !== "USER"){
      this.isUser=false
      console.log(this.isUser," thiss");
      
    }
    else this.isUser=true
  }







}

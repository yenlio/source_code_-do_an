import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {AuthService} from"../../../data/service/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  responseData:any

  constructor( private router: Router,private AuthService: AuthService) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    passWord: new FormControl(''),
    userName: new FormControl(''),
  });
  
  login(){
  console.log("login");
  const formData=this.loginForm.value
  this.AuthService.login(formData).subscribe((res)=>{
    
    if(res!= null){
      this.responseData=res.data;
      localStorage.setItem("token", this.responseData)
    }
  })
  // this.router.navigate(['/']);
  
  }

}

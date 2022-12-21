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
  listRole=[]
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
      console.log(this.responseData,"du lieu login gui ve");
      console.log(res.role.length," ko");
      
      const listRole: any[]=[]
      res.role.map((item:any)=>{
      listRole.push(item)
      
      })
      console.log(listRole,"role nè");
      localStorage.setItem("message",res.message)
      localStorage.setItem("id",res.id)
      localStorage.setItem("token", this.responseData)
      localStorage.setItem('roles', JSON.stringify(listRole));
      let role= localStorage.getItem("roles")
      // this.router.navigate(['/']);
      if(role?.includes("USER")){
        this.router.navigate(['/'])
      }
      else if(role?.includes("ADMIN")){
        this.router.navigate(['/admin'])
        
      }
      else if(role?.includes("AGENCY")){
        this.router.navigate(['/agency'])
      }
   
    }
  })
  
  }

}

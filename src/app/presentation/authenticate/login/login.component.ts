import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    passWord: new FormControl(''),
    email: new FormControl(''),
  });
  
  login(){
  console.log("login");
  this.router.navigate(['/']);
  
  }

}

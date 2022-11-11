import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  statusLogin!:any
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.statusLogin=localStorage.getItem("message")
  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    localStorage.removeItem("token")
    localStorage.removeItem('roles');
    localStorage.removeItem("message")
    this.router.navigate(['/auth/login']);
  }

  

}

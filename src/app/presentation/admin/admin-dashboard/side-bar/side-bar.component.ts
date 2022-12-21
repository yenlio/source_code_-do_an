import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  // showChart(){
  //   this.route.navigate(['/chart']);
  // }

  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    localStorage.removeItem("token")
    localStorage.removeItem('roles');
    localStorage.removeItem("message")
    this.route.navigate(['/auth/login']);
  }

}

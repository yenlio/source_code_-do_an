import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-dashboard',
  templateUrl: './agency-dashboard.component.html',
  styleUrls: ['./agency-dashboard.component.scss']
})
export class AgencyDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  sidebarExpanded = true;

}

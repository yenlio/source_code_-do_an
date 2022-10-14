import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyDashboardComponent } from './agency-dashboard/agency-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartTourComponent } from '../agency/agency-dashboard/chart-tour/chart-tour.component';
import { PostTourComponent } from '../agency/agency-dashboard/post-tour/post-tour.component';
import { SideBarComponent } from './agency-dashboard/side-bar/side-bar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/agency' },
  {
    path: '',
    component: AgencyDashboardComponent,
    children:[
      {path:'chart',component:ChartTourComponent},
      {path:'postTour',component:PostTourComponent}

    ]
  },
 
 
];

@NgModule({
  declarations: [
    AgencyDashboardComponent,
    ChartTourComponent,
    PostTourComponent,
    SideBarComponent
  ],
  imports: [
    // RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' }),
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AgencyModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyDashboardComponent } from './agency-dashboard/agency-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartTourComponent } from '../agency/agency-dashboard/chart-tour/chart-tour.component';
import { PostTourComponent } from '../agency/agency-dashboard/post-tour/post-tour.component';
import { SideBarComponent } from './agency-dashboard/side-bar/side-bar.component';
import { TopBarComponent } from './agency-dashboard/top-bar/top-bar.component';
import { MaterialModule } from 'src/app/material.module';
import { NgbDate, NgbModule,NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { TourComponent } from './agency-dashboard/tour/tour.component';
import { TourAccessComponent } from './agency-dashboard/tour-access/tour-access.component';
import { ManagerPostAgencyComponent } from './agency-dashboard/manager-post-agency/manager-post-agency.component';
import { NgChartsModule } from 'ng2-charts';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/agency' },
  {
    path: '',
    component: AgencyDashboardComponent,
    children:[
      {path:'chart',component:ChartTourComponent},
      {path:'postTour',component:PostTourComponent},
      {path:'tourAccess',component:TourAccessComponent},
      {path:'tourManager',component:ManagerPostAgencyComponent},
    ]
  },
 
 
];

@NgModule({
  declarations: [
    AgencyDashboardComponent,
    ChartTourComponent,
    PostTourComponent,
    SideBarComponent,
    TopBarComponent,
   
    TourAccessComponent,
         ManagerPostAgencyComponent
  ],
 
  imports: [
    // RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' }),
    NgChartsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})
export class AgencyModule { }



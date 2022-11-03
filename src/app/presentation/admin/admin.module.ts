import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ManagerRoleComponent } from './admin-dashboard/manager-role/manager-role.component';
import { ManagerPostsComponent } from './admin-dashboard/manager-posts/manager-posts.component';
import { SideBarComponent } from './admin-dashboard/side-bar/side-bar.component';
import { TopBarComponent } from './admin-dashboard/top-bar/top-bar.component';
import { PopupDetailComponent } from './admin-dashboard/popup-detail/popup-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
// import { MatCarouselModule } from 'ng-mat-carousel';
// import { MatCarouselModule } from '@ngmodule/material-carousel';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children:[
      {path:'managerPost',component:ManagerPostsComponent},
      {path:'managerRole',component:ManagerRoleComponent}

    ]
    
  },
 
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ManagerRoleComponent,
    ManagerPostsComponent,
    SideBarComponent,
    TopBarComponent,
    PopupDetailComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    // MatCarouselModule,
    MatDialogModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }

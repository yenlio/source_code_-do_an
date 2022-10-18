import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ManagerRoleComponent } from './admin-dashboard/manager-role/manager-role.component';
import { ManagerPostsComponent } from './admin-dashboard/manager-posts/manager-posts.component';
import { SideBarComponent } from './admin-dashboard/side-bar/side-bar.component';
import { TopBarComponent } from './admin-dashboard/top-bar/top-bar.component';
import { PopupDetailComponent } from './admin-dashboard/popup-detail/popup-detail.component';

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
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }

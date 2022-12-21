import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ManagerRoleComponent } from './admin-dashboard/manager-role/manager-role.component';
import { ManagerPostsComponent } from './admin-dashboard/manager-posts/manager-posts.component';
import { SideBarComponent } from './admin-dashboard/side-bar/side-bar.component';
import { TopBarComponent } from './admin-dashboard/top-bar/top-bar.component';
import { PopupDetailComponent } from './admin-dashboard/popup-detail/popup-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditorModule,TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { BlogManagerComponent } from './admin-dashboard/blog-manager/blog-manager.component';
import { ChartadminComponent } from './admin-dashboard/chartadmin/chartadmin.component';

// import { MatCarouselModule } from 'ng-mat-carousel';
// import { MatCarouselModule } from '@ngmodule/material-carousel';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children:[
      {path:'managerChart',component:ChartadminComponent},
      {path:'managerPost',component:ManagerPostsComponent},
      {path:'managerRole',component:ManagerRoleComponent},
      {path:'managerBlog',component:BlogManagerComponent}

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
    PopupDetailComponent,
    BlogManagerComponent,
    ChartadminComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    // MatCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    MatDialogModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  // providers: [
  //   { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  // ]
})
export class AdminModule { }

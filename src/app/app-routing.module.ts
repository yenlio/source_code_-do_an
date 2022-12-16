import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './presentation/shared/auth/auth.guard';
import { RoleGuard } from './presentation/shared/auth/role.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./presentation/layout/layout.module').then(
        (m) => m.LayoutModule
      )
      ,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./presentation/authenticate/authenticate.module').then(
        (m) => m.AuthenticateModule
      )
      , 
      
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./presentation/layout/layout.module').then(
        (m) => m.LayoutModule
      )
      ,canActivate:[AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./presentation/admin/admin.module').then(
        (m) => m.AdminModule
      ),
      canActivate: [AuthGuard,RoleGuard],
      data: { 
        expectedRole: 'admin'
      } 
    
  },
  {
    path: 'agency',
    loadChildren: () =>
      import('./presentation/agency/agency.module').then(
        (m) => m.AgencyModule
      ),
      canActivate: [AuthGuard] ,
      // data: { 
      //   expectedRole: 'agency'
      // } 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

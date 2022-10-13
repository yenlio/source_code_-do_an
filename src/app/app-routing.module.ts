import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './presentation/shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./presentation/authenticate/authenticate.module').then(
        (m) => m.AuthenticateModule
      ), 
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./presentation/layout/layout.module').then(
        (m) => m.LayoutModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./presentation/admin/admin.module').then(
        (m) => m.AdminModule
      ),canActivate:[AuthGuard]
  },
  {
    path: 'agency',
    loadChildren: () =>
      import('./presentation/agency/agency.module').then(
        (m) => m.AgencyModule
      )
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

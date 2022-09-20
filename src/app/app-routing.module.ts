import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./presentation/layouts.module').then((m) => m.LayoutsModule),
  // },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./presentation/admin/login/login.module').then(
  //       (m) => m.LoginModule
  //     ),
  // },
  // {
  //   path: '**',
  //   loadChildren: () =>
  //     import('./presentation/admin/login/login.module').then(
  //       (m) => m.LoginModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

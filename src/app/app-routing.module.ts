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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
const routes: Routes = [
  {
    path: 'detail/:id',
    component: DetailsComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:"", redirectTo:'home',pathMatch:'full'
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LayoutModule { }

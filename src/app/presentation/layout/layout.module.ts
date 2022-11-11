import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartPaymentComponent } from './cart-payment/cart-payment.component';
import { BlogComponent } from './blog/blog.component';

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
    path: 'cart',
    component: CartPaymentComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path:"", redirectTo:'home',pathMatch:'full'
  }
];

@NgModule({
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    HomeComponent,
    DetailsComponent,
    HeaderComponent,
    CommentsComponent,
    CommentComponent,
    CommentFormComponent,
    CartPaymentComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class LayoutModule { }

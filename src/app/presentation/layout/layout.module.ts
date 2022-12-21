import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartPaymentComponent } from './cart-payment/cart-payment.component';
import { BlogComponent } from './blog/blog.component';
import { ImageDirective } from './details/image.directive';
import { MaterialModule } from 'src/app/material.module';
import { PopupPaymentComponent } from './cart-payment/popup-payment/popup-payment.component';
import { HistoryComponent } from './history/history.component';
import { SwiperModule } from 'swiper/angular';
import { NgImageSliderModule } from 'ng-image-slider';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { AuthGuard } from '../shared/auth/auth.guard';

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
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'cart',
    component: CartPaymentComponent,
    canActivate:[AuthGuard]
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    HomeComponent,
    DetailsComponent,
    HeaderComponent,
    // CommentsComponent,
    CommentComponent,
    CommentFormComponent,
    CartPaymentComponent,
    BlogComponent,
    ImageDirective,
    PopupPaymentComponent,
    HistoryComponent
  ],
  imports: [
    LightboxModule,
    GalleryModule,
    NgImageSliderModule,
    SwiperModule,
    MaterialModule,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule, NgbAlertModule,
    RouterModule.forChild(routes),
  ]
})
export class LayoutModule { }

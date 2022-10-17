import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './data/token-interceptor.service';
import { AuthGuard } from './presentation/shared/auth/auth.guard';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { MaterialModule } from './material.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    // AdminDashboardComponent,
  
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
  providers: [ {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },AuthGuard,
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }

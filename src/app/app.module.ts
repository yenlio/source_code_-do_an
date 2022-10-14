import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './data/token-interceptor.service';
import { AuthGuard } from './presentation/shared/auth/auth.guard';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
// import { AdminDashboardComponent } from './presentation/admin-dashboard/admin-dashboard.component';
// import { HeaderComponent } from './presentation/shared/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    // AdminDashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
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

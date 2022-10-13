import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

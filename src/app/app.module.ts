import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewpassengerComponent } from './viewpassenger/viewpassenger.component';
import { ViewusdataComponent } from './viewusdata/viewusdata.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewpassengerComponent,
    ViewusdataComponent,
    ViewUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

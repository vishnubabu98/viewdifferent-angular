import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewpassengerComponent } from './viewpassenger/viewpassenger.component';
import { ViewusdataComponent } from './viewusdata/viewusdata.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewUserDataComponent } from './view-user-data/view-user-data.component';
import { ViewToDoComponent } from './view-to-do/view-to-do.component';
import { ViewQuotesAppComponent } from './view-quotes-app/view-quotes-app.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes=[
  {
    path:"",
    component:ViewProductComponent
  },
  {
    path:"quote",
    component:ViewQuotesAppComponent
  },
  {
    path:"todo",
    component:ViewToDoComponent
  },
  {
    path:"userdata",
    component:ViewUserDataComponent
  },
  {
    path:"userinfo",
    component:ViewUserInfoComponent
  },
  {
    path:"pass",
    component:ViewpassengerComponent
  },
  {
    path:"usdata",
    component:ViewusdataComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ViewpassengerComponent,
    ViewusdataComponent,
    ViewUserInfoComponent,
    ViewProductComponent,
    ViewUserDataComponent,
    ViewToDoComponent,
    ViewQuotesAppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

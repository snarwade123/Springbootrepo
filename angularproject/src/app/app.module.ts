import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCustomerComponent } from './customers/post-customer/post-customer.component';
import { GetAllCustomerComponent } from './customers/get-all-customer/get-all-customer.component';
import { UpdateCustomerComponent } from './customers/update-customer/update-customer.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostCustomerComponent,
    GetAllCustomerComponent,
    UpdateCustomerComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

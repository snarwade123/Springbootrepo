import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCustomerComponent } from './customers/post-customer/post-customer.component';
import { GetAllCustomerComponent } from './customers/get-all-customer/get-all-customer.component';
import { UpdateCustomerComponent } from './customers/update-customer/update-customer.component';

const routes: Routes = [
  {path:"customer",component:PostCustomerComponent},
  {path:"",component:GetAllCustomerComponent},
  {path:"customer/:id",component:UpdateCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

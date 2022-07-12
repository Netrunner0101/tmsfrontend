import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomeridComponent } from './customer/customerid/customerid.component';
import { NewcustomerComponent } from './customer/newcustomer/newcustomer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'login' , component: LoginComponent },
  { path:'customer' , component: CustomerComponent },
  { path:'create' , component: NewcustomerComponent },
  { path:'customer/:idc' , component: CustomeridComponent },
  { path:'' , component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

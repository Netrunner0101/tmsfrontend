import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomeridComponent } from './customer/customerid/customerid.component';
import { NewcustomerComponent } from './customer/newcustomer/newcustomer.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { NewdeliveryComponent } from './delivery/newdelivery/newdelivery.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component';
import { TransporterComponent } from './transporter/transporter.component';

const routes: Routes = [
  
  { path:'driver' , component: DriverComponent },
  { path:'transporter' , component: TransporterComponent },
  { path:'login' , component: LoginComponent },
  // Client route
  { path:'customer' , component: CustomerComponent },
  { path:'create/customer' , component: NewcustomerComponent },
  { path:'customer/:idc' , component: CustomeridComponent },
  // Delivery route
  { path:'delivery' , component: DeliveryComponent },
  { path:'create/delivery' , component: NewdeliveryComponent },
  { path:'' , component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

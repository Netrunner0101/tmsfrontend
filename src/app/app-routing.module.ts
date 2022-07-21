import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomeridComponent } from './customer/customerid/customerid.component';
import { NewcustomerComponent } from './customer/newcustomer/newcustomer.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryidComponent } from './delivery/deliveryid/deliveryid.component';
import { NewdeliveryComponent } from './delivery/newdelivery/newdelivery.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component';
import { IdtransporterComponent } from './transporter/idtransporter/idtransporter.component';
import { NewtransporterComponent } from './transporter/newtransporter/newtransporter.component';
import { TransporterComponent } from './transporter/transporter.component';

const routes: Routes = [
  
  { path:'driver' , component: DriverComponent },
  // Route Login
  { path:'login' , component: LoginComponent },
  // Client route
  { path:'customer' , component: CustomerComponent },
  { path:'create/customer' , component: NewcustomerComponent },
  { path:'customer/:idc' , component: CustomeridComponent },
  // Delivery route
  { path:'delivery' , component: DeliveryComponent },
  { path:'create/delivery' , component: NewdeliveryComponent },
  { path:'delivery/:idd' , component: DeliveryidComponent },
  { path:'' , component: LoginComponent },
  // Transporter route
  { path:'transporter' , component: TransporterComponent },
  { path:'create/transporter' , component: NewtransporterComponent },
  { path:'transporter/:idt' , component: IdtransporterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

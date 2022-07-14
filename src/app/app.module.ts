import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { CustomeridComponent } from './customer/customerid/customerid.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TokenInterceptor } from './token.interceptor';
import { NewcustomerComponent } from './customer/newcustomer/newcustomer.component';
import {MatCardModule} from '@angular/material/card';
import { DeliveryComponent } from './delivery/delivery.component';
import { DriverComponent } from './driver/driver.component';
import { TransporterComponent } from './transporter/transporter.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    CustomeridComponent,
    NewcustomerComponent,
    DeliveryComponent,
    DriverComponent,
    TransporterComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

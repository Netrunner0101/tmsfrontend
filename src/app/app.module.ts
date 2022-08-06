import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
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
import { NewdeliveryComponent } from './delivery/newdelivery/newdelivery.component';
import { DeliveryidComponent } from './delivery/deliveryid/deliveryid.component';
import { NewtransporterComponent } from './transporter/newtransporter/newtransporter.component';
import { IdtransporterComponent } from './transporter/idtransporter/idtransporter.component';
import { NewdriverComponent } from './driver/newdriver/newdriver.component';
import { IddriverComponent } from './driver/iddriver/iddriver.component';
import { RegisterComponent } from './login/register/register.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CreatebonComponent } from './createbon/createbon.component';
// Grid list
import { MatGridListModule } from '@angular/material/grid-list'; 
// Data table Material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BondetailsComponent } from './createbon/bondetails/bondetails.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTooltipModule } from '@angular/material/tooltip';


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
    NewdeliveryComponent,
    DeliveryidComponent,
    NewtransporterComponent,
    IdtransporterComponent,
    NewdriverComponent,
    IddriverComponent,
    RegisterComponent,
    CreatebonComponent,
    BondetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

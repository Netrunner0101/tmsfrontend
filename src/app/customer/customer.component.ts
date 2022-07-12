import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../service/customerservice.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  Customers: any = [];

  constructor(private _customerService:CustomerserviceService, private _router : Router) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this._customerService.getAll().subscribe((r : { })=>{
      this.Customers = r;
      console.log(r);
    },
    (error)=>{
      console.log(error);
    })
  }

  // If Problem look at back end because could be at the response Ok
  deleteCustomer(idc:any){
    this._customerService.deleteCustomer(idc).subscribe(
      (r)=>{
        console.log("delete success",r);
        location.reload();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}

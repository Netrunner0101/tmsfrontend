import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/service/customerservice.service';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.sass']
})
export class NewcustomerComponent implements OnInit {

  constructor(private _customerService:CustomerserviceService, private route:Router) { }

  ngOnInit(): void {
  }

  customerForm= new FormGroup({
    name : new FormControl(''),
    vat : new FormControl(''),
    adress : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl(''),
  });

  public createCustomer(){
    const newCustomer = {
      name : this.customerForm.value.name,
      vat : this.customerForm.value.vat,
      adress : this.customerForm.value.adress,
      email : this.customerForm.value.email,
      phoneNumber : this.customerForm.value.phoneNumber,
    }
    this._customerService.createCustomer(newCustomer);
    console.log("New customer create"+newCustomer);
    this.route.navigate(['customer']);
  }

}

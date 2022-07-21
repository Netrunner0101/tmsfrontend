import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerserviceService } from 'src/app/service/customerservice.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-customerid',
  templateUrl: './customerid.component.html',
  styleUrls: ['./customerid.component.sass']
})
export class CustomeridComponent implements OnInit {

  //  Empty number constructor.
  idc:number = <number>{};

  idcustomer = <number>{};
  // Empty customer object.
  customer = <Customer>{};

 // Initial formgroup
  updateCustomerForm= new FormGroup({
    name : new FormControl(''),
    vat : new FormControl(''),
    adress : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl(''),
  });

  constructor(private _customerService: CustomerserviceService, private _route:ActivatedRoute , private _router:Router) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(
      (qurl)=>{
        console.log("param url : ", qurl['idc'] );
        this.idc = qurl['idc']
        console.log("Variable IDC = ", this.idc );
        this.getCustomerById(this.idc);
        this.idcustomer = this.idc;
      }
    )
  }

  public getCustomerById(idc:number){
    this._customerService.getById(idc).subscribe(
      (data)=>{
        console.log(data);
        this.customer = data;

        // To set initial value must be inside the subscribe function
        // Update details
        this.updateCustomerForm.patchValue({
          name: this.customer.name,
          
          vat : this.customer.vat,

          adress : this.customer.adress,

          email : this.customer.email,

          phoneNumber : this.customer.phoneNumber,

        })

        return this.customer;
    })
  }

  public createPdf(){
    let DATA: any = document.getElementById('customerDetail');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('customerdetails.pdf');
    });
  }

  public navigateToCustomerTable(){
    this._router.navigateByUrl('/tms/customers');
  }

  public updateCustomer(){
    const updateCustomer = {
      name : this.updateCustomerForm.value.name ,
      vat : this.updateCustomerForm.value.vat,
      adress : this.updateCustomerForm.value.adress,
      email : this.updateCustomerForm.value.email,
      phoneNumber : this.updateCustomerForm.value.phoneNumber,
    }
    this._customerService.updateCustomer(updateCustomer,this.idcustomer);
    console.log("Update Customer : ", updateCustomer);
    console.log("This id Customer : ", this.idcustomer);
  }


}

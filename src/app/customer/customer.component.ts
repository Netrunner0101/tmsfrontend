import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../service/customerservice.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  searchCustomer:any;

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
      (r) => {
        console.log("Delete Transporter sucess");
        location.reload();
      }
    );
  }

  exportExcel() {
    if (this.Customers.length > 0) {
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.Customers);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "customers");
      });
    }
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}

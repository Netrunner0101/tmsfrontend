import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Delivery } from '../model/delivery.model';
import { DeliveryService } from '../service/delivery.service';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.sass']
})
export class DeliveryComponent implements OnInit {

  Delivery:any = [];
  
  // DeliveryDataSource: Delivery[] = []

  constructor(private _deliveryService:DeliveryService, private _router : Router) { }

  ngOnInit(): void {
    this.getAllDelivery();
  }

  getAllDelivery(){
    return this._deliveryService.getAll().subscribe(
      ( data: {} )=>{
      this.Delivery = data;
      console.log(this.Delivery);
    })
  }

  deleteDelivery(idd:any){
    this._deliveryService.delete(idd).subscribe(
      (r) => {
        console.log("Delete delivery sucess");
      }
    )
  }

  exportExcel() {
    if (this.Delivery.length > 0) {
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.Delivery);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "delivery");
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

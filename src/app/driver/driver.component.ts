import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../service/driver.service';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.sass']
})
export class DriverComponent implements OnInit {

  searchDriver:any;

  Drivers:any = [];

  constructor(private _driverService:DriverService, private _router : Router) { }

  ngOnInit(): void {
    this.getAllDriver();
  }

  getAllDriver(){
    return this._driverService.getAll().subscribe(
      ( data: {} )=>{
      this.Drivers = data;
      console.log(this.Drivers);
    })
  }

  deleteDriver(iddriver:any){
    this._driverService.delete(iddriver).subscribe(
      (r) => {
        console.log("Delete driver sucess");
        location.reload();
      }
    )
  }
  
  exportExcel() {
    if (this.Drivers.length > 0) {
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.Drivers);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "driver");
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

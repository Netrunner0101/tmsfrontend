import { Component, OnInit } from '@angular/core';
import { Transporter } from '../model/transporter.model';
import { TransporterService } from '../service/transporter.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-transporter',
  templateUrl: './transporter.component.html',
  styleUrls: ['./transporter.component.sass']
})
export class TransporterComponent implements OnInit {

  Transporters:any = [] ;

  constructor(private _transporterService: TransporterService) { }

  ngOnInit(): void {
    this.getAllTransporter();
  }

  getAllTransporter(){
    return this._transporterService.getAll().subscribe(
      ( data: {} )=>{
      this.Transporters = data;
      console.log(this.Transporters);
    })
  }

  deleteTransporter(idtrans:any){
    this._transporterService.delete(idtrans).subscribe(
      (r) => {
        console.log("Delete Transporter sucess");
      }
    )
  }

  exportExcel() {
    if (this.Transporters.length > 0) {
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.Transporters);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "transporter");
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

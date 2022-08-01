import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Delivery } from 'src/app/model/delivery.model';
import { Transporter } from 'src/app/model/transporter.model';
import { DeliveryService } from 'src/app/service/delivery.service';
import { TransporterService } from 'src/app/service/transporter.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-bondetails',
  templateUrl: './bondetails.component.html',
  styleUrls: ['./bondetails.component.sass']
})
export class BondetailsComponent implements OnInit {

  idd:number = <number>{};

  idt:number = <number>{};

  data_delivery:any = [];

  data_trans:any = [];

  constructor(private _activatedRoute: ActivatedRoute, private _deliveryService : DeliveryService, private _transporterService : TransporterService) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(
      (qurl)=>{
        console.log("param url : ", qurl['idd'] );
        this.idd = qurl['idd']
        console.log("Variable IDC = ", this.idd );
        this._deliveryService.getById(this.idd).subscribe((data)=>{
          this.data_delivery = data;
          console.log("Variable data delivery = ", this.data_delivery );
        })
      }
    )
    this._activatedRoute.queryParams.subscribe(
      (qurl)=>{
        console.log("param url : ", qurl['idt'] );
        this.idt = qurl['idt']
        console.log("Variable IDT = ", this.idt );
        this._transporterService.getById(this.idt).subscribe((data)=>{
          this.data_trans = data;
          console.log("Variable data transporter = ", this.data_trans );
        })
      }
    )
  }

  public createPdf(){
    let DATA: any = document.getElementById('details_bon');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('deliverydetails:'+this.data_delivery.numeroDelivery+'.pdf');
    });
  }

}

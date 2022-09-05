import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Delivery } from 'src/app/model/delivery.model';
import { DeliveryService } from 'src/app/service/delivery.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-deliveryid',
  templateUrl: './deliveryid.component.html',
  styleUrls: ['./deliveryid.component.sass']
})
export class DeliveryidComponent implements OnInit {

  //  Empty number constructor.
  idd:number = <number>{};

  iddelivery = <number>{};
  // Empty customer object.
  delivery = <Delivery>{};

   // Initial formgroup
   updateDeliveryForm= new FormGroup({
    numeroDelivery : new FormControl(''),
    weight : new FormControl(),
    adress : new FormControl(''),
    dateTransfert : new FormControl(),
    dateDelivery : new FormControl(),
    remarks : new FormControl(''),
  });

  constructor(private _deliveryService : DeliveryService, private _route: ActivatedRoute ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(
      (qurl)=>{
        console.log("param url : ", qurl['idd'] );
        this.idd = qurl['idd']
        console.log("Variable IDC = ", this.idd );
        this.getDeliveryById(this.idd);
        this.iddelivery = this.idd;
      }
    )
  }

  public getDeliveryById(idd:number){
    this._deliveryService.getById(idd).subscribe(
      (data)=>{
        console.log(data);
        this.delivery = data;
        this.updateDeliveryForm.patchValue({
          numeroDelivery : this.delivery.numeroDelivery,
          weight : this.delivery.weight,
          adress : this.delivery.adress,
          dateTransfert : this.delivery.dateTransfert,
          dateDelivery : this.delivery.dateDelivery,
          remarks : this.delivery.remarks,
        })
        return this.delivery;
    })
  }

  public createPdf(){
    let DATA: any = document.getElementById('deliveryDetail');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('deliverydetails:'+this.delivery.numeroDelivery+'.pdf');
    });
  }

  // public navigateToCustomerTable(){
  //   this._router.navigateByUrl('/tms/customers');
  // }

  public updateDelivery(){
    const updateDelivery = {
      numeroDelivery : this.updateDeliveryForm.value.numeroDelivery,
      weight : this.updateDeliveryForm.value.weight,
      adress : this.updateDeliveryForm.value.adress,
      dateTransfert : this.updateDeliveryForm.value.dateTransfert,
      dateDelivery : this.updateDeliveryForm.value.dateDelivery,
      remarks : this.updateDeliveryForm.value.remarks,
    }
    this._deliveryService.update(updateDelivery,this.iddelivery);
    console.log("Update Delivery : ", updateDelivery);
    console.log("This id Delivery : ", this.iddelivery);
  }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Transporter } from 'src/app/model/transporter.model';
import { DeliveryService } from 'src/app/service/delivery.service';
import { TransporterService } from 'src/app/service/transporter.service';

@Component({
  selector: 'app-idtransporter',
  templateUrl: './idtransporter.component.html',
  styleUrls: ['./idtransporter.component.sass']
})
export class IdtransporterComponent implements OnInit {

  idt:number = <number>{};

  idtransporter = <number>{};

  transporter = <Transporter>{};
 
  // Initial formgroup
  updateTransporterForm= new FormGroup({
    name : new FormControl(''),
    adress : new FormControl(''),
    email :  new FormControl(''),
    phoneNumber :  new FormControl(''),
  });
 
  constructor(private _transporterService : TransporterService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(
      (qurl)=>{
        console.log("param url : ", qurl['idt'] );
        this.idt = qurl['idt']
        console.log("Variable Id transporteur = ", this.idt );
        this.getTransporterById(this.idt);
        this.idtransporter = this.idt;
      }
    )
  }

  public getTransporterById(idt:number){
    this._transporterService.getById(idt).subscribe(
      (data)=>{
        console.log(data);
        this.transporter = data;
        this.updateTransporterForm.patchValue({
          name : this.transporter.name,
          adress : this.transporter.adress,
          email :  this.transporter.email,
          phoneNumber :  this.transporter.phoneNumber,
        })
        return this.transporter;
    })
  }

  public updateTransporter(){
    const updateTransporter = {
      name : this.updateTransporterForm.value.name,
      adress : this.updateTransporterForm.value.adress,
      email : this.updateTransporterForm.value.email,
      phoneNumber : this.updateTransporterForm.value.phoneNumber,
    }
    this._transporterService.update(updateTransporter,this.idtransporter);
    console.log("Update transporter : ", updateTransporter);
    console.log("This id transporter : ", this.idtransporter);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DeliveryService } from 'src/app/service/delivery.service';

@Component({
  selector: 'app-newdelivery',
  templateUrl: './newdelivery.component.html',
  styleUrls: ['./newdelivery.component.sass']
})
export class NewdeliveryComponent implements OnInit {

  constructor(private _deliveryService: DeliveryService, private _router: Router) { }

  ngOnInit(): void {
  }

  deliveryForm= new FormGroup({
    numeroDelivery : new FormControl(''),
    weight : new FormControl(''),
    adress : new FormControl(''),
    dateTransfert : new FormControl(''),
    dateDelivery : new FormControl(''),
    remarks : new FormControl(''),
  });

  public createDelivery(){
    const newDelivery = {
      numeroDelivery : this.deliveryForm.value.numeroDelivery,
      weight : this.deliveryForm.value.weight ,
      adress : this.deliveryForm.value.adress ,
      dateTransfert : this.deliveryForm.value.dateTransfert ,
      dateDelivery : this.deliveryForm.value.dateDelivery ,
      remarks : this.deliveryForm.value.remarks ,
    }
    this._deliveryService.create(newDelivery);
    console.log("New delivery create"+newDelivery);
    this._router.navigate(['delivery']);
  }

}

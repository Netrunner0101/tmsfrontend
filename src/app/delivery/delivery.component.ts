import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Delivery } from '../model/delivery.model';
import { DeliveryService } from '../service/delivery.service';


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

}

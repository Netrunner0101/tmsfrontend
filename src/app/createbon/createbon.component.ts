import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../service/delivery.service';
import { TransporterService } from '../service/transporter.service';

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-createbon',
  templateUrl: './createbon.component.html',
  styleUrls: ['./createbon.component.sass']
})

export class CreatebonComponent implements OnInit {

  listBonDelivery:any = [];

  listBonTransporter:any = [];

  Deliveries:any = [];

  Transporters:any = [] ;

  dataDelivery:any = {};

  dataTransporter:any = {};

  constructor(private _deliveryService:DeliveryService, private _transporterService: TransporterService ) { }

  ngOnInit(): void {
    this.getAllDelivery();
    this.getAllTransporter();
  }

  getAllDelivery(){
    return this._deliveryService.getAll().subscribe(
      ( data )=>{
      this.Deliveries = data ;
      console.log(this.Deliveries);
    })
  }

  getAllTransporter(){
    return this._transporterService.getAll().subscribe(
      ( data )=>{
      this.Transporters = data;
      console.log(this.Transporters);
    })
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  dropIdDel(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.dataDelivery = event.container.data[event.currentIndex];
    console.log('Data delivery : '+this.dataDelivery);
    console.log('Data event container delivery : '+event.container.data);
  }

  dropIdTrans(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.dataTransporter = event.container.data[event.currentIndex];
    console.log('Data transporter '+this.dataTransporter);
    console.log('Data event container transporter : '+event.container.data);
  }

  // Limit size of array
  get isBonDeliveryAvailable(): boolean {
    return this.listBonDelivery && this.listBonDelivery.length <2;
  }

   // Limit size of array
   get isBonTransporterAvailable(): boolean {
    return this.listBonTransporter && this.listBonTransporter.length <2;
  }

  // For CdDropPredicate
  BonDelivery = (): boolean => {
    return this.isBonDeliveryAvailable;
  }

  // For CdDropPredicate
  BonTransporter = (): boolean => {
    return this.isBonTransporterAvailable;
  }

}

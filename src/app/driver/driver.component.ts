import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../service/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.sass']
})
export class DriverComponent implements OnInit {

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
      }
    )
  }
  
}

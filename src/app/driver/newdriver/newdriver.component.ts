import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-newdriver',
  templateUrl: './newdriver.component.html',
  styleUrls: ['./newdriver.component.sass']
})
export class NewdriverComponent implements OnInit {

  constructor(private _driverService: DriverService, private _router: Router) { }

  ngOnInit(): void {
  }
  
  driverForm= new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl(''),
  });

  public createDriver(){
    const newDriver = {
      name : this.driverForm.value.name,
      email : this.driverForm.value.email ,
      phoneNumber : this.driverForm.value.phoneNumber ,
    }
    this._driverService.create(newDriver);
    console.log("New driver create"+newDriver);
    this._router.navigate(['driver']);
  }


}

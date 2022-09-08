import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Driver } from 'src/app/model/driver.model';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-iddriver',
  templateUrl: './iddriver.component.html',
  styleUrls: ['./iddriver.component.sass']
})
export class IddriverComponent implements OnInit {
  //  Empty number constructor.
  iddr:number = <number>{};

  iddriver= <number>{};
  // Empty customer object.
  driver = <Driver>{};

   // Initial formgroup
  updateDriverForm= new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl(''),
  });

  constructor(private _driverService: DriverService, private _route: ActivatedRoute ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(
      (qurl)=>{
        console.log("param url :", qurl['iddriver'] );
        this.iddr = qurl['iddriver']
        console.log("Variable Iddriver = ", this.iddr );
        this.getDriverById(this.iddr);
        this.iddriver = this.iddr;
      }
    )
  }

  public getDriverById(iddr:number){
    this._driverService.getById(iddr).subscribe(
      (data)=>{
        console.log(data);
        this.driver = data;
        this.updateDriverForm.patchValue({
          name : this.driver.name,
          email : this.driver.email,
          phoneNumber : this.driver.phoneNumber,
        })
        return this.driver;
    })
  }

  public updateDriver(){
    const updateDriver = {
      name : this.updateDriverForm.value.name,
      email : this.updateDriverForm.value.email,
      phoneNumber : this.updateDriverForm.value.phoneNumber,
    }
    this._driverService.update(updateDriver ,this.iddriver);
    console.log("Update Driver : ", updateDriver);
    console.log("This id Driver : ", this.iddriver);
  }

}

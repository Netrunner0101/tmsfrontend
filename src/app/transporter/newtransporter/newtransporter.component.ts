import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TransporterService } from 'src/app/service/transporter.service';

@Component({
  selector: 'app-newtransporter',
  templateUrl: './newtransporter.component.html',
  styleUrls: ['./newtransporter.component.sass']
})
export class NewtransporterComponent implements OnInit {

  constructor(private _transporterService: TransporterService, private _router: Router) { }

  ngOnInit(): void {
  }

  transporterForm= new FormGroup({
    name : new FormControl(''),
    adress : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl(''),
  });

  public createTransporter(){
    const newTransporter = {
      name : this.transporterForm.value.name,
      adress : this.transporterForm.value.adress,
      email : this.transporterForm.value.email,
      phoneNumber : this.transporterForm.value.phoneNumber,
    }
    this._transporterService.create(newTransporter);
    console.log("New transporter create"+newTransporter);
    this._router.navigate(['transporter']);
  }

}

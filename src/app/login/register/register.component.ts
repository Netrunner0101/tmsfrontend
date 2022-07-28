import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private _registerService: RegisterService, private _router:Router) { }

  ngOnInit(): void {
  }

  newUserForm= new FormGroup({
    name : new FormControl(''),
    lastname : new FormControl(''),
    adress : new FormControl(''),
    city : new FormControl(''),
    email : new FormControl('', Validators.email),
    password : new FormControl(''),
  });

  registerUser(){ 
  const newUser = {
    name : this.newUserForm.value.name,
    lastName : this.newUserForm.value.lastname,
    adress : this.newUserForm.value.adress,
    city : this.newUserForm.value.city,
    email : this.newUserForm.value.email,
    password : this.newUserForm.value.password,
    }
    this._registerService.register(newUser);
    console.log("New user create"+newUser);
    this._router.navigate(['register']);
  }
  
}

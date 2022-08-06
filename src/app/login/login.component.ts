import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  constructor(private authService:AuthenticationService, private _router : Router) { }

  ngOnInit(): void {
    
  }

  userForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public login():void{
    const user= {
      email: this.userForm.value.email,
      password: this.userForm.value.password,
    }
    console.log(this.userForm.value)
    // this.authService.authenticate(this.profileForm.value).subscribe(r=>{
    //   console.log(r)
    //   this.authService.setToken(r)
    //   this.myToken=this.authService.getToken();
    // })    
    return this.authService.login(user);
  }

  public logout(){
    this.authService.logout();
    location.reload();
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tmsfront2';

  check = false;

  connectValue = false ;
  
  constructor(private _router:Router, private authService:AuthenticationService) {}

  ngOnInit(): void {
    this.check = this.authService.checkifToken();
    // console.log(sessionStorage.getItem('token'));
    if(this.check == true ){
      this.connectValue = true;
    }
  }

  disconnect(){
    this.authService.logout();
  }

}





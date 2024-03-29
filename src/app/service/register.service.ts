import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'https://majesticboy-001-site4.btempurl.com';

  // url = 'https://localhost:7233';

  constructor(private _http: HttpClient) { }

  register(requestUser:any){
    this._http.post(this.url+'/tms/register',requestUser).subscribe(
      (data:any) =>{
        console.log(data)
      }
    );
  }

}

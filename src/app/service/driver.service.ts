import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../model/driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  url = 'https://majesticboy-001-site4.btempurl.com';

  // url = 'https://localhost:7233';

  constructor(private _http:HttpClient) { }

  
  getAll():Observable<Driver>{
    return this._http.get<Driver>(this.url+'/tms/drivers');
  }

  getById(iddriver:any){
    return this._http.get<Driver>(this.url+'/tms/driver/'+iddriver);
  }

  create(driver:any){
    this._http.post(this.url+'/tms/driver/create',driver).subscribe(
      (data:any) =>{
        console.log(data)
      }
    );
  }

  update(driver:any,iddriver:any){
    this._http.put(this.url+'/tms/driver/update/'+iddriver,driver).subscribe(
      (data:any) =>{
        console.log(data)
        location.reload();
      }
    );
  }

  delete(iddriver:any):Observable<any>{
    return this._http.delete(this.url+'/tms/driver/delete/'+iddriver);
  }

}

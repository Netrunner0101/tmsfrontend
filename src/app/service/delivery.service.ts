import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from '../model/delivery.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  url = 'http://majesticboy-001-site3.btempurl.com';

  // url = 'https://localhost:7233';

  constructor(private _http:HttpClient) { }

  
  getAll():Observable<Delivery>{
    return this._http.get<Delivery>(this.url+'/tms/deliveries');
  }

  getById(iddelivery:any){
    return this._http.get<Delivery>(this.url+'/tms/delivery/'+iddelivery);
  }

  create(delivery:any){
    this._http.post(this.url+'/tms/delivery/create',delivery).subscribe(
      (data:any) =>{
        console.log(data)
      }
    );
  }

  update(delivery:any,iddelivery:any){
    this._http.put(this.url+'/tms/delivery/update/'+iddelivery,delivery).subscribe(
      (data:any) =>{
        console.log(data)
        location.reload();
      }
    );
  }

  delete(iddelivery:any):Observable<any>{
    return this._http.delete(this.url+'/tms/delivery/delete/'+iddelivery);
  }

}

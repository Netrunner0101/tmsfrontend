import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  url = 'https://majesticboy-001-site4.btempurl.com';

  // url = 'https://localhost:7233';

  constructor(private _http:HttpClient ) { }

  getAll():Observable<Customer>{
    return this._http.get<Customer>(this.url+'/tms/customers');
  }

  // Careful with URL TYPING ERROR '/customer' NOT '/customers'
  getById(idc:any){
    return this._http.get<Customer>(this.url+'/tms/customer/'+idc);
  }

  createCustomer(customer:any){
    this._http.post(this.url+'/tms/customer/create',customer).subscribe(
      (data:any) =>{
        console.log(data)
      }
    );
  }

  updateCustomer(customer:any,idc:any){
    this._http.put(this.url+'/tms/customer/update/'+idc,customer).subscribe(
      (data:any) =>{
        console.log(data)
        location.reload();
      }
    );
  }

  // If Problem look at back end because could be at the response Ok()
  // Dont forget to put return for delete
  deleteCustomer(idc:any):Observable<any>{
    return this._http.delete(this.url+'/tms/customer/delete/'+idc);
  }

}

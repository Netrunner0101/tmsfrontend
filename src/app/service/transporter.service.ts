import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transporter } from '../model/transporter.model';

@Injectable({
  providedIn: 'root'
})
export class TransporterService {

  url = 'https://localhost:7233';

  constructor(private _http:HttpClient) { }

  getAll():Observable<Transporter>{
    return this._http.get<Transporter>(this.url+'/tms/transporters');
  }

  getById(idtransporter:any){
    return this._http.get<Transporter>(this.url+'/tms/transporter/'+idtransporter);
  }

  create(transporter:any){
    this._http.post(this.url+'/tms/transporter/create',transporter).subscribe(
      (data:any) =>{
        console.log(data)
      }
    );
  }

  update(transporter:any,idtransporter:any){
    this._http.put(this.url+'/tms/transporter/update/'+idtransporter,transporter).subscribe(
      (data:any) =>{
        console.log(data)
        location.reload();
      }
    );
  }

  delete(idtransporter:any):Observable<any>{
    return this._http.delete(this.url+'/tms/transporter/delete/'+idtransporter);
  }

}

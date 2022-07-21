import { Component, OnInit } from '@angular/core';
import { Transporter } from '../model/transporter.model';
import { TransporterService } from '../service/transporter.service';

@Component({
  selector: 'app-transporter',
  templateUrl: './transporter.component.html',
  styleUrls: ['./transporter.component.sass']
})
export class TransporterComponent implements OnInit {

  Transporters:any = [] ;

  constructor(private _transporterService: TransporterService) { }

  ngOnInit(): void {
    this.getAllTransporter();
  }

  getAllTransporter(){
    return this._transporterService.getAll().subscribe(
      ( data: {} )=>{
      this.Transporters = data;
      console.log(this.Transporters);
    })
  }

  deleteTransporter(idtrans:any){
    this._transporterService.delete(idtrans).subscribe(
      (r) => {
        console.log("Delete Transporter sucess");
      }
    )
  }

}

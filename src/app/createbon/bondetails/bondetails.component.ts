import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Delivery } from 'src/app/model/delivery.model';
import { Transporter } from 'src/app/model/transporter.model';

@Component({
  selector: 'app-bondetails',
  templateUrl: './bondetails.component.html',
  styleUrls: ['./bondetails.component.sass']
})
export class BondetailsComponent implements OnInit {

  info_del : Delivery[] = [];

  infor_trans: Transporter[] = [];

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      let detail_delivery = params['itemDel'];
      let detail_transporter = params['itemTrans'];
      this.info_del = detail_delivery;
      this.infor_trans = detail_transporter;
      });
  }

}

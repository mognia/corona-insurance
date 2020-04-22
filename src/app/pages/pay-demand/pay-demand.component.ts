import { Component, OnInit } from '@angular/core';
import {payClaimerDemand} from 'corona-interface/ethereum'
@Component({
  selector: 'app-pay-demand',
  templateUrl: './pay-demand.component.html',
  styleUrls: ['./pay-demand.component.css']
})
export class PayDemandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pay(){
    payClaimerDemand()
  }
}

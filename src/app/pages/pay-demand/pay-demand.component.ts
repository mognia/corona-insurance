import { Component, OnInit } from '@angular/core';
import {payClaimerDemand} from 'corona-interface/ethereum'
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-pay-demand',
  templateUrl: './pay-demand.component.html',
  styleUrls: ['./pay-demand.component.css']
})
export class PayDemandComponent implements OnInit {
  payDemandForm = new FormGroup({
    nationalNumber: new FormControl('', [ Validators.required]),
    identityNumber: new FormControl('', [ Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
  }
  pay(){
    if (this.payDemandForm.valid){

    payClaimerDemand(this.payDemandForm.value)
    }
  }
}

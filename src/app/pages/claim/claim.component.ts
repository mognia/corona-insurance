import { Component, OnInit } from '@angular/core';
import {claim} from 'corona-interface/ethereum'
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {getClaimer} from 'corona-interface/ethereum'

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  claimForm = new FormGroup({
    nationalNumber: new FormControl('', [ Validators.required]),
    identityNumber: new FormControl('', [ Validators.required])
  });
  getClaimerForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    nationalNumber: new FormControl('' , [Validators.required]),
    identityNumber: new FormControl('' , [Validators.required]),
  });
  isClaimer = false;
  claimerData;
  constructor() { }

  ngOnInit(): void {
  }
  claim(){
    if (this.claimForm.valid){
      claim(this.claimForm.value)
    }
  }
  getClaimer() {
    if (this.getClaimerForm.valid) {
      getClaimer(this.getClaimerForm.value).then(value => {
        this.isClaimer = true;
        this.claimerData = value;
        console.log(value)
        // address: "0xE349fBbeDA6642BF459f4957b6D6AbcCBA8bA74c"
        // deadLine: "23 ساعت"
        // vote: "300"
        // claimed: true
        // paid: false
      })
    }
  }
}

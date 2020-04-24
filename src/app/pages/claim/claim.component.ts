import { Component, OnInit } from '@angular/core';
import {claim} from 'corona-interface/ethereum'
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  constructor() { }

  ngOnInit(): void {
  }
  claim(){
    if (this.claimForm.valid){
      claim(this.claimForm.value)
    }
  }
}

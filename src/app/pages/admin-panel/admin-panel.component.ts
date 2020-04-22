import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {addDoctor , setStableCoin , setCrnPerTether , getContractBalance , withdraw} from 'corona-interface/ethereum'
declare var $: any;
@Component({
  selector: 'app-add-doctor',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  addDocForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
  addStableCoin = new FormGroup({
    address: new FormControl('', [Validators.required]),
  });
  setCrnForm = new FormGroup({
    value: new FormControl('', [Validators.required]),
  });
  ContractBalance;
  constructor() { }

  ngOnInit(): void {
    const that = this
    getContractBalance().then(function (val) {
      that.ContractBalance = val;
    })
  }
  addDoc() {
    if (this.addDocForm.valid) {
      addDoctor(this.addDocForm.value)
    }
  }
  addCoin() {
    if (this.addStableCoin.valid) {
      setStableCoin(this.addStableCoin.value)
    }
  }
  setCrn() {
    if (this.setCrnForm.valid) {
      setCrnPerTether(this.setCrnForm.value)
    }
  }
  withdarw() {
    withdraw()
  }
}

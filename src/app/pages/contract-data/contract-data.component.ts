import { Component, OnInit } from '@angular/core';
import {getContractAddress , getStableCoinAddress , getCrnAddress ,  getCrnPerTetherValue , getMaxPaymentValue , getSuspendTimeValue, getBalanceValue} from 'corona-interface/ethereum'
@Component({
  selector: 'app-contract-data',
  templateUrl: './contract-data.component.html',
  styleUrls: ['./contract-data.component.css']
})
export class ContractDataComponent implements OnInit {
  contactAddress;
  stableCoinAddress;
  crnAddress;
  crnPerTether;
  maxPaymentValue;
  suspendTimeValue;
  balanceValue;
  constructor() { }

  ngOnInit(): void {
    const that = this
    getCrnPerTetherValue().then(function (val) {
      that.crnPerTether = val;
    });
    getContractAddress().then(function (val) {
      that.contactAddress = val;
    });
    getStableCoinAddress().then(function (val) {
      that.stableCoinAddress = val;
    });
    getCrnAddress().then(function (val) {
      that.crnAddress = val;
    });
    getMaxPaymentValue().then(function (val) {
      that.maxPaymentValue = val;
    });
    getSuspendTimeValue().then(function (val) {
      that.suspendTimeValue = val;
    });
    getBalanceValue().then(function (val) {
      that.balanceValue = val;
    });
  }

}

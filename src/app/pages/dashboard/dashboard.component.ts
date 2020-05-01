import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {approveStableCoin, getCrnPerTetherValue , getRegistrant , getMaxPaymentValue , registerWithStableCoin} from 'corona-interface/ethereum'
import {log} from 'util';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    profileForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        nationalNumber: new FormControl('' , [Validators.required]),
        identityNumber: new FormControl('' , [Validators.required]),
    });
    getRegistrantForm = new FormGroup({
        address: new FormControl('', [Validators.required]),
        nationalNumber: new FormControl('' , [Validators.required]),
        identityNumber: new FormControl('' , [Validators.required]),
    });
    isSubmitedForm = false;
    crnPerTether;
    maxPaymentValue;
    isRegistrant = false;
    registrandData;
    constructor() {
    }

    ngOnInit() {
        const that = this;
      getCrnPerTetherValue().then(function (val) {
        that.crnPerTether = val;
        })
        getMaxPaymentValue().then(function (val) {
            that.maxPaymentValue = val;
        });
    }

    getcrn() {
        approveStableCoin()
    }

    submitProfile() {
        if (this.profileForm.valid) {
            registerWithStableCoin(this.profileForm.value)

        }
    }
    getRegistrant() {
        if (this.getRegistrantForm.valid) {
            getRegistrant(this.getRegistrantForm.value).then(value => {
                this.isRegistrant = true;
                this.registrandData = value;
                console.log(value)
            })
        }
    }
}

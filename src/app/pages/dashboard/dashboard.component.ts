import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {approveStableCoin, getCrnPerTetherValue , buyToken , approveCrnToken , registerWithStableCoin} from 'corona-interface/ethereum'
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    profileForm = new FormGroup({
        firstName: new FormControl('',[Validators.required]),
        lastName: new FormControl('',[Validators.required]),
        nationalNumber: new FormControl('' , [Validators.required]),
        identityNumber: new FormControl('' , [Validators.required]),
    });
    isSubmitedForm = false;
    crnPerTether;
    constructor() {
    }

    ngOnInit() {
        const that = this
      getCrnPerTetherValue().then(function (val) {
        that.crnPerTether = val;
        })

    }

    getcrn() {
        approveStableCoin()
    }

    submitProfile(){
        if (this.profileForm.valid){
            registerWithStableCoin(this.profileForm.value)

        }
    }
}

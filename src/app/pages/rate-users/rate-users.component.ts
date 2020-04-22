import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {vote} from 'corona-interface/ethereum'
@Component({
  selector: 'app-rate-users',
  templateUrl: './rate-users.component.html',
  styleUrls: ['./rate-users.component.css']
})
export class RateUsersComponent implements OnInit {
  voteForm = new FormGroup({
    value: new FormControl('', [Validators.max(100), Validators.required]),
    address: new FormControl('', [ Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
  }
  vote() {
    if (this.voteForm.valid) {
      vote(this.voteForm.value)
    }
  }
}

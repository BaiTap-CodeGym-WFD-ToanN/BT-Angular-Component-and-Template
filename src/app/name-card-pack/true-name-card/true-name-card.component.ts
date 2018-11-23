import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-name-card',
  templateUrl: './true-name-card.component.html',
  styleUrls: ['./true-name-card.component.css']
})
export class TrueNameCardComponent implements OnInit {
  private _age;
  private _email;
  @Input() name: string;

  @Input('age')
  get age() {
    return this._age;
  }

  set age(age) {
    age = typeof age === 'undefined' ? 'required' : age;
    this._age = Number.isNaN(Number(age)) ? 'not valid' : Number(age);
  }

  @Input('email')
  get email() {
    return this._email;
  }

  set email(email) {
    email = typeof email === 'undefined' ? 'required' : email;
    this._email = email.match(/^\w+@\w+\.\w+$/) ? 'not valid' : email;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

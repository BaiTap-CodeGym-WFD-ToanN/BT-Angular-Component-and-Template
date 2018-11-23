import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card-pack',
  templateUrl: './name-card-pack.component.html',
  styleUrls: ['./name-card-pack.component.css']
})
export class NameCardPackComponent implements OnInit {

  name: string;
  age: string;
  email: string;

  constructor() {
  }

  ngOnInit() {
  }

}

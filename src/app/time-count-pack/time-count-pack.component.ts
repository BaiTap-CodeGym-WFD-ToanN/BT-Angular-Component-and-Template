import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-time-count-pack',
  templateUrl: './time-count-pack.component.html',
  styleUrls: ['./time-count-pack.component.css']
})
export class TimeCountPackComponent implements OnInit {
  message = '';
  time: number;

  startMsg() {
    this.message = '';
    this.time = 0;
  }

  stopMsg() {
    this.message = 'stopped';
  }

  countingMsg() {
    this.message = 'counting';
    this.time--;
  }

  endMsg() {
    this.message = 'finished';
  }

  constructor() {
  }

  ngOnInit() {
  }

}

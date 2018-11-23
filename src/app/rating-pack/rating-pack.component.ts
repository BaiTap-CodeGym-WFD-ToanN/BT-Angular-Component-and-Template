import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-pack',
  templateUrl: './rating-pack.component.html',
  styleUrls: ['./rating-pack.component.css']
})
export class RatingPackComponent implements OnInit {

  showCurrent = false;
  showLast = false;
  max = 20;
  current = 0;
  last = 0;

  currentChanged(current: number): void {
    this.current = current;
  }

  lastChanged(last: number): void {
    this.last = last;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

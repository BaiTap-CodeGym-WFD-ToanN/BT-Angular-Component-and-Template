import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-rating',
  templateUrl: './true-rating.component.html',
  styleUrls: ['./true-rating.component.css']
})
export class TrueRatingComponent implements OnInit {
  private _size: number;
  rateBar = [];
  current = 0;

  @Input('size')
  set size(n) {
    this._size = n;
    this.rateBar = setRateBar(n);
  }

  @Output()
  changed = new EventEmitter<number[]>();

  choose(n: number): void {
    this.changed.emit([this.current, n]);
    this.current = n;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

function setRateBar(n = 10) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
}

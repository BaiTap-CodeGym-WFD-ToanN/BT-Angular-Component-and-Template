import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-time-count',
  templateUrl: './true-time-count.component.html',
  styleUrls: ['./true-time-count.component.css']
})
export class TrueTimeCountComponent implements OnInit {
  private _time: number;
  private timer;

  @Input('time')
  get time() {
    return this._time;
  }

  set time(time) {
    time = typeof time === 'undefined' ? 0 : time;
    this._time = Number.isNaN(Number(time)) ? 0 : Number(time);
  }

  @Output()
  start = new EventEmitter<void>();

  @Output()
  finished = new EventEmitter<void>();

  @Output()
  counting = new EventEmitter<void>();

  @Output()
  stop = new EventEmitter<void>();

  count(): void {
    if (this._time > 0) {
      this.counting.emit();
      this._time -= 1;
      this.timer = setTimeout(this.count.bind(this), 1000);
    } else {
      this.finished.emit();
    }
  }

  stopCount(): void {
    clearTimeout(this.timer);
    this.stop.emit();
  }

  restartCount(): void {
    clearTimeout(this.timer);
    this._time = 0;
    this.start.emit();
  }

  constructor() {
  }

  ngOnInit() {
  }

}

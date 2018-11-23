import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-bar',
  templateUrl: './true-bar.component.html',
  styleUrls: ['./true-bar.component.css']
})
export class TrueBarComponent implements OnInit {
  private _progress: number;
  @Input() backgroundColor = 'white';
  @Input() barColor = 'grey';
  @Input() progressColor = 'green';

  @Input('progress')
  get progress(): number {
    return this._progress;
  }

  set progress(progress) {
    progress = typeof progress === 'undefined' ? this._progress : progress;
    const progressChecked = Number(progress);
    this._progress = Number.isNaN(progressChecked) ? this._progress : progressChecked;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

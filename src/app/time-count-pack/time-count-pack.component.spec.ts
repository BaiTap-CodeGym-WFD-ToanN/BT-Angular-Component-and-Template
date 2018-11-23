import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCountPackComponent } from './time-count-pack.component';

describe('TimeCountPackComponent', () => {
  let component: TimeCountPackComponent;
  let fixture: ComponentFixture<TimeCountPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCountPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCountPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

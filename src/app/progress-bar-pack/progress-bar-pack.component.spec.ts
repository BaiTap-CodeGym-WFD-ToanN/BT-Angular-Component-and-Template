import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarPackComponent } from './progress-bar-pack.component';

describe('ProgressBarPackComponent', () => {
  let component: ProgressBarPackComponent;
  let fixture: ComponentFixture<ProgressBarPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

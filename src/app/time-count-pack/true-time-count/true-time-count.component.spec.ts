import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueTimeCountComponent } from './true-time-count.component';

describe('TrueTimeCountComponent', () => {
  let component: TrueTimeCountComponent;
  let fixture: ComponentFixture<TrueTimeCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueTimeCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueTimeCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueRatingComponent } from './true-rating.component';

describe('TrueRatingComponent', () => {
  let component: TrueRatingComponent;
  let fixture: ComponentFixture<TrueRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

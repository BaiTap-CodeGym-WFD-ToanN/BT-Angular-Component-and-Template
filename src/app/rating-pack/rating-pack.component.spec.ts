import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPackComponent } from './rating-pack.component';

describe('RatingPackComponent', () => {
  let component: RatingPackComponent;
  let fixture: ComponentFixture<RatingPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

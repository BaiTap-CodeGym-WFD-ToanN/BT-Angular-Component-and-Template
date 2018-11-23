import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueNameCardComponent } from './true-name-card.component';

describe('TrueNameCardComponent', () => {
  let component: TrueNameCardComponent;
  let fixture: ComponentFixture<TrueNameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueNameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueBarComponent } from './true-bar.component';

describe('TrueBarComponent', () => {
  let component: TrueBarComponent;
  let fixture: ComponentFixture<TrueBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

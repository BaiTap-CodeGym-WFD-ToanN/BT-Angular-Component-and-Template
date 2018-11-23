import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCardPackComponent } from './name-card-pack.component';

describe('NameCardPackComponent', () => {
  let component: NameCardPackComponent;
  let fixture: ComponentFixture<NameCardPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameCardPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameCardPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleHappinessComponent } from './double-happiness.component';

describe('DoubleHappinessComponent', () => {
  let component: DoubleHappinessComponent;
  let fixture: ComponentFixture<DoubleHappinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleHappinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleHappinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

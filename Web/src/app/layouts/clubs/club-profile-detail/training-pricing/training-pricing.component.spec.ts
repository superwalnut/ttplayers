import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPricingComponent } from './training-pricing.component';

describe('TrainingPricingComponent', () => {
  let component: TrainingPricingComponent;
  let fixture: ComponentFixture<TrainingPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

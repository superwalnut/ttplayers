import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCoachesComponent } from './our-coaches.component';

describe('OurCoachesComponent', () => {
  let component: OurCoachesComponent;
  let fixture: ComponentFixture<OurCoachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCoachesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

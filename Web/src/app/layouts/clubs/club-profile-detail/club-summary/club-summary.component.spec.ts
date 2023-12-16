import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSummaryComponent } from './club-summary.component';

describe('ClubSummaryComponent', () => {
  let component: ClubSummaryComponent;
  let fixture: ComponentFixture<ClubSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

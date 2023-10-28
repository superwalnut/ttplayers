import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTotalCounterComponent } from './player-total-counter.component';

describe('PlayerTotalCounterComponent', () => {
  let component: PlayerTotalCounterComponent;
  let fixture: ComponentFixture<PlayerTotalCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTotalCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerTotalCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

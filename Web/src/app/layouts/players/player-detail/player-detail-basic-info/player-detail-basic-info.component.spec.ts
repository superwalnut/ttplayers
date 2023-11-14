import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailBasicInfoComponent } from './player-detail-basic-info.component';

describe('PlayerDetailBasicInfoComponent', () => {
  let component: PlayerDetailBasicInfoComponent;
  let fixture: ComponentFixture<PlayerDetailBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDetailBasicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerDetailBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

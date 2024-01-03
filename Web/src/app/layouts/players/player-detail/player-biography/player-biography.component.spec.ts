import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBiographyComponent } from './player-biography.component';

describe('PlayerBiographyComponent', () => {
  let component: PlayerBiographyComponent;
  let fixture: ComponentFixture<PlayerBiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerBiographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

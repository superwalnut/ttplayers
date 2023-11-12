import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAutocompleteComponent } from './player-autocomplete.component';

describe('PlayerAutocompleteComponent', () => {
  let component: PlayerAutocompleteComponent;
  let fixture: ComponentFixture<PlayerAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

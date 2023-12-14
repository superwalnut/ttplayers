import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAutocompleteComponent } from './club-autocomplete.component';

describe('ClubAutocompleteComponent', () => {
  let component: ClubAutocompleteComponent;
  let fixture: ComponentFixture<ClubAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

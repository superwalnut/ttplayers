import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenTwoNineComponent } from './seven-two-nine.component';

describe('SevenTwoNineComponent', () => {
  let component: SevenTwoNineComponent;
  let fixture: ComponentFixture<SevenTwoNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenTwoNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenTwoNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

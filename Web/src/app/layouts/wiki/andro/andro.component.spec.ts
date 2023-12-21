import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroComponent } from './andro.component';

describe('AndroComponent', () => {
  let component: AndroComponent;
  let fixture: ComponentFixture<AndroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

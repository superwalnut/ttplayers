import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonicComponent } from './donic.component';

describe('DonicComponent', () => {
  let component: DonicComponent;
  let fixture: ComponentFixture<DonicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

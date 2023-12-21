import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibharComponent } from './tibhar.component';

describe('TibharComponent', () => {
  let component: TibharComponent;
  let fixture: ComponentFixture<TibharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TibharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TibharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

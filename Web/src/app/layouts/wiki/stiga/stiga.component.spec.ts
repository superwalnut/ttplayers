import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StigaComponent } from './stiga.component';

describe('StigaComponent', () => {
  let component: StigaComponent;
  let fixture: ComponentFixture<StigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

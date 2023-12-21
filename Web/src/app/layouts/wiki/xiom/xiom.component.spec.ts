import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiomComponent } from './xiom.component';

describe('XiomComponent', () => {
  let component: XiomComponent;
  let fixture: ComponentFixture<XiomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XiomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XiomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

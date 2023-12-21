import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillerspinComponent } from './killerspin.component';

describe('KillerspinComponent', () => {
  let component: KillerspinComponent;
  let fixture: ComponentFixture<KillerspinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KillerspinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KillerspinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NittakuComponent } from './nittaku.component';

describe('NittakuComponent', () => {
  let component: NittakuComponent;
  let fixture: ComponentFixture<NittakuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NittakuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NittakuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

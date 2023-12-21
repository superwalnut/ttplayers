import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornilleauComponent } from './cornilleau.component';

describe('CornilleauComponent', () => {
  let component: CornilleauComponent;
  let fixture: ComponentFixture<CornilleauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornilleauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CornilleauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

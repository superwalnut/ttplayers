import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictasComponent } from './victas.component';

describe('VictasComponent', () => {
  let component: VictasComponent;
  let fixture: ComponentFixture<VictasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VictasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

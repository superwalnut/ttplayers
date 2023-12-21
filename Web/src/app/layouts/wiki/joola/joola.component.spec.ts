import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoolaComponent } from './joola.component';

describe('JoolaComponent', () => {
  let component: JoolaComponent;
  let fixture: ComponentFixture<JoolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoolaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

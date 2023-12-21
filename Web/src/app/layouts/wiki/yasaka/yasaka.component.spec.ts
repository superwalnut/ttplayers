import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YasakaComponent } from './yasaka.component';

describe('YasakaComponent', () => {
  let component: YasakaComponent;
  let fixture: ComponentFixture<YasakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YasakaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YasakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

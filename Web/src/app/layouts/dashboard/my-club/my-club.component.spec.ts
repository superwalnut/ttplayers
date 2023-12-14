import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClubComponent } from './my-club.component';

describe('MyClubComponent', () => {
  let component: MyClubComponent;
  let fixture: ComponentFixture<MyClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

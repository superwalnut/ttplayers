import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendDetailTileComponent } from './friend-detail-tile.component';

describe('FriendDetailTileComponent', () => {
  let component: FriendDetailTileComponent;
  let fixture: ComponentFixture<FriendDetailTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendDetailTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendDetailTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

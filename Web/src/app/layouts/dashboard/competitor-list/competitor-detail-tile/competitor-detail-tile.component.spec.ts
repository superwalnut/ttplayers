import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorDetailTileComponent } from './competitor-detail-tile.component';

describe('CompetitorDetailTileComponent', () => {
  let component: CompetitorDetailTileComponent;
  let fixture: ComponentFixture<CompetitorDetailTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitorDetailTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitorDetailTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

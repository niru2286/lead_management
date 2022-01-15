import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTilesComponent } from './top-tiles.component';

describe('TopTilesComponent', () => {
  let component: TopTilesComponent;
  let fixture: ComponentFixture<TopTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

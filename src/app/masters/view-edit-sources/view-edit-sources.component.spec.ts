import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditSourcesComponent } from './view-edit-sources.component';

describe('ViewEditSourcesComponent', () => {
  let component: ViewEditSourcesComponent;
  let fixture: ComponentFixture<ViewEditSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

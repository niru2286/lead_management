import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditTeamsComponent } from './view-edit-teams.component';

describe('ViewEditTeamsComponent', () => {
  let component: ViewEditTeamsComponent;
  let fixture: ComponentFixture<ViewEditTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

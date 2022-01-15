import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditLeadComponent } from './view-edit-lead.component';

describe('ViewEditLeadComponent', () => {
  let component: ViewEditLeadComponent;
  let fixture: ComponentFixture<ViewEditLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

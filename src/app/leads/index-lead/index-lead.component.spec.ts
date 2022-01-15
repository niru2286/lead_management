import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLeadComponent } from './index-lead.component';

describe('IndexLeadComponent', () => {
  let component: IndexLeadComponent;
  let fixture: ComponentFixture<IndexLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

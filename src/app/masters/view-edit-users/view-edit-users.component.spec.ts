import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditUsersComponent } from './view-edit-users.component';

describe('ViewEditUsersComponent', () => {
  let component: ViewEditUsersComponent;
  let fixture: ComponentFixture<ViewEditUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

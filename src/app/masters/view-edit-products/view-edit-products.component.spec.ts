import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditProductsComponent } from './view-edit-products.component';

describe('ViewEditProductsComponent', () => {
  let component: ViewEditProductsComponent;
  let fixture: ComponentFixture<ViewEditProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesIndexComponent } from './sources-index.component';

describe('SourcesIndexComponent', () => {
  let component: SourcesIndexComponent;
  let fixture: ComponentFixture<SourcesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcesIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

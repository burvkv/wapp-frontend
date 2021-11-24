import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbDateComponent } from './breadcrumb-date.component';

describe('BreadcrumbDateComponent', () => {
  let component: BreadcrumbDateComponent;
  let fixture: ComponentFixture<BreadcrumbDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

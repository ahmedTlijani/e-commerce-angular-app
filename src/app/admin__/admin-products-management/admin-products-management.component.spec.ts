import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsManagementComponent } from './admin-products-management.component';

describe('AdminProductsManagementComponent', () => {
  let component: AdminProductsManagementComponent;
  let fixture: ComponentFixture<AdminProductsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

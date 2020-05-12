import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteProductsPageComponent } from './favorite-products-page.component';

describe('FavoriteProductsPageComponent', () => {
  let component: FavoriteProductsPageComponent;
  let fixture: ComponentFixture<FavoriteProductsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteProductsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

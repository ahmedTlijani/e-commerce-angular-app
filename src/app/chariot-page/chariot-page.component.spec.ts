import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChariotPageComponent } from './chariot-page.component';

describe('ChariotPageComponent', () => {
  let component: ChariotPageComponent;
  let fixture: ComponentFixture<ChariotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChariotPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChariotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

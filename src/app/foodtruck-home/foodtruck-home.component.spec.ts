import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtruckHomeComponent } from './foodtruck-home.component';

describe('FoodtruckHomeComponent', () => {
  let component: FoodtruckHomeComponent;
  let fixture: ComponentFixture<FoodtruckHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodtruckHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodtruckHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

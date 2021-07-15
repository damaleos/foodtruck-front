import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtruckdetailsComponent } from './foodtruckdetails.component';

describe('FoodtruckdetailsComponent', () => {
  let component: FoodtruckdetailsComponent;
  let fixture: ComponentFixture<FoodtruckdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodtruckdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodtruckdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

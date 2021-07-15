import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtruckersComponent } from './foodtruckers.component';

describe('FoodtruckersComponent', () => {
  let component: FoodtruckersComponent;
  let fixture: ComponentFixture<FoodtruckersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodtruckersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodtruckersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorHomeComponent } from './organizador-home.component';

describe('OrganizadorHomeComponent', () => {
  let component: OrganizadorHomeComponent;
  let fixture: ComponentFixture<OrganizadorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizadorHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

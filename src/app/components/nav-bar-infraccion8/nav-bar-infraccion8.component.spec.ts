import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarInfraccion8Component } from './nav-bar-infraccion8.component';

describe('NavBarInfraccion8Component', () => {
  let component: NavBarInfraccion8Component;
  let fixture: ComponentFixture<NavBarInfraccion8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarInfraccion8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarInfraccion8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
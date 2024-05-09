import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infraccion8Component } from './infraccion8.component';

describe('Infraccion8Component', () => {
  let component: Infraccion8Component;
  let fixture: ComponentFixture<Infraccion8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Infraccion8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infraccion8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
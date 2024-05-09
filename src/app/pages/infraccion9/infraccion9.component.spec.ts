import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infraccion9Component } from './infraccion9.component';

describe('Infraccion9Component', () => {
  let component: Infraccion9Component;
  let fixture: ComponentFixture<Infraccion9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Infraccion9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infraccion9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

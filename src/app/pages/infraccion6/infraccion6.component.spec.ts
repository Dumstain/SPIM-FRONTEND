import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infraccion6Component } from './infraccion6.component';

describe('Infraccion6Component', () => {
  let component: Infraccion6Component;
  let fixture: ComponentFixture<Infraccion6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Infraccion6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infraccion6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
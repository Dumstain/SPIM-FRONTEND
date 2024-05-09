import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infraccion5Component } from './infraccion5.component';

describe('Infraccion5Component', () => {
  let component: Infraccion5Component;
  let fixture: ComponentFixture<Infraccion5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Infraccion5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infraccion5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




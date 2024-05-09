import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoLoginComponent } from './fondo-login.component';

describe('FondoLoginComponent', () => {
  let component: FondoLoginComponent;
  let fixture: ComponentFixture<FondoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

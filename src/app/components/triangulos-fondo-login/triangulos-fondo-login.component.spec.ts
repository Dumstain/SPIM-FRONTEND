import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangulosFondoLoginComponent } from './triangulos-fondo-login.component';

describe('TriangulosFondoLoginComponent', () => {
  let component: TriangulosFondoLoginComponent;
  let fixture: ComponentFixture<TriangulosFondoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriangulosFondoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriangulosFondoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infraccion2FormularioComponent } from './infraccion2-formulario.component';

describe('Infraccion2FormularioComponent', () => {
  let component: Infraccion2FormularioComponent;
  let fixture: ComponentFixture<Infraccion2FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Infraccion2FormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infraccion2FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

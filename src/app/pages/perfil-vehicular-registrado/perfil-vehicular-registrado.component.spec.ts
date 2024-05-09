import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilVehicularRegistradoComponent } from './perfil-vehicular-registrado.component';

describe('PerfilVehicularRegistradoComponent', () => {
  let component: PerfilVehicularRegistradoComponent;
  let fixture: ComponentFixture<PerfilVehicularRegistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilVehicularRegistradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilVehicularRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilVeicularComponent } from './perfil-veicular.component';

describe('PerfilVeicularComponent', () => {
  let component: PerfilVeicularComponent;
  let fixture: ComponentFixture<PerfilVeicularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilVeicularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilVeicularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

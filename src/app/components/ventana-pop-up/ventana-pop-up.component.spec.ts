import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaPopUpComponent } from './ventana-pop-up.component';

describe('VentanaPopUpComponent', () => {
  let component: VentanaPopUpComponent;
  let fixture: ComponentFixture<VentanaPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
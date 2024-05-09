import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLabelComponent } from './consulta-label.component';

describe('ConsultaLabelComponent', () => {
  let component: ConsultaLabelComponent;
  let fixture: ComponentFixture<ConsultaLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

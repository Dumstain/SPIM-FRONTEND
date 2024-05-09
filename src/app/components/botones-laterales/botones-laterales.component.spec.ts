import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesLateralesComponent } from './botones-laterales.component';

describe('BotonesLateralesComponent', () => {
  let component: BotonesLateralesComponent;
  let fixture: ComponentFixture<BotonesLateralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesLateralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesLateralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
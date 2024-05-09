import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLineContainerComponent } from './icon-line-container.component';

describe('IconLineContainerComponent', () => {
  let component: IconLineContainerComponent;
  let fixture: ComponentFixture<IconLineContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLineContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconLineContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteGlobVentesComponent } from './carte-glob-ventes.component';

describe('CarteGlobVentesComponent', () => {
  let component: CarteGlobVentesComponent;
  let fixture: ComponentFixture<CarteGlobVentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteGlobVentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteGlobVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

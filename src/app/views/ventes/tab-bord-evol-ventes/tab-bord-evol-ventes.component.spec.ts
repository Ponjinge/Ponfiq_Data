import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBordEvolVentesComponent } from './tab-bord-evol-ventes.component';

describe('TabBordEvolVentesComponent', () => {
  let component: TabBordEvolVentesComponent;
  let fixture: ComponentFixture<TabBordEvolVentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBordEvolVentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBordEvolVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

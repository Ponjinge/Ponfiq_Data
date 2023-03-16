import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { DocsComponentsModule } from '../../../../components';
import { CarteGlobVentesComponent } from './carte-glob-ventes.component';

describe('CarteGlobVentesComponent', () => {
  let component: CarteGlobVentesComponent;
  let fixture: ComponentFixture<CarteGlobVentesComponent>;
  let iconSetService: IconSetService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CarteGlobVentesComponent],
      imports: [GridModule, CardModule, DocsComponentsModule, ChartjsModule],
      providers: [IconSetService]
    }).compileComponents();
  }));

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(CarteGlobVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


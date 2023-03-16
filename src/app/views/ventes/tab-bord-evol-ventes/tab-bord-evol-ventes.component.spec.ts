import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { DocsComponentsModule } from '../../../../components';
import { TabBordEvolVentesComponent } from './tab-bord-evol-ventes.component';

describe('TabBordEvolVentesComponent', () => {
  let component: TabBordEvolVentesComponent;
  let fixture: ComponentFixture<TabBordEvolVentesComponent>;
  let iconSetService: IconSetService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TabBordEvolVentesComponent],
      imports: [GridModule, CardModule, DocsComponentsModule, ChartjsModule],
      providers: [IconSetService]
    }).compileComponents();
  }));

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(TabBordEvolVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


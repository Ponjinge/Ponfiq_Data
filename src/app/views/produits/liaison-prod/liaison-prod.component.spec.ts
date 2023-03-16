import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { DocsComponentsModule } from '../../../../components';
import { LiaisonProdComponent } from './liaison-prod.component';

describe('LiaisonProdComponent', () => {
  let component: LiaisonProdComponent;
  let fixture: ComponentFixture<LiaisonProdComponent>;
  let iconSetService: IconSetService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LiaisonProdComponent],
      imports: [GridModule, CardModule, DocsComponentsModule, ChartjsModule],
      providers: [IconSetService]
    }).compileComponents();
  }));

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(LiaisonProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

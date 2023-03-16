import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { DocsComponentsModule } from '../../../../components';
import { ProfilCliComponent } from './profil-cli.component';

describe('ProfilCliComponent', () => {
  let component: ProfilCliComponent;
  let fixture: ComponentFixture<ProfilCliComponent>;
  let iconSetService: IconSetService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilCliComponent],
      imports: [GridModule, CardModule, DocsComponentsModule, ChartjsModule],
      providers: [IconSetService]
    }).compileComponents();
  }));

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(ProfilCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


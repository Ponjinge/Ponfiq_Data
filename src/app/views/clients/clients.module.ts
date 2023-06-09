import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule, CardModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { ClientsRoutingModule } from './clients-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ProfilCliComponent } from './profil-cli/profil-cli.component';
import { TabBordCliComponent } from './tab-bord-cli/tab-bord-cli.component';

@NgModule({
  declarations: [
    ProfilCliComponent,
    TabBordCliComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    DocsComponentsModule
  ]
})
export class ClientsModule {
}

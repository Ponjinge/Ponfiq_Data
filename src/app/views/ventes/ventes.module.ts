import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule, CardModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { VentesRoutingModule } from './ventes-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { TabBordEvolVentesComponent } from './tab-bord-evol-ventes/tab-bord-evol-ventes.component';

@NgModule({
  declarations: [
    TabBordEvolVentesComponent
  ],
  imports: [
    CommonModule,
    VentesRoutingModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    DocsComponentsModule
  ]
})
export class VentesModule {
}

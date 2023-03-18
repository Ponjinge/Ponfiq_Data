import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule, CardModule, GridModule,TableModule, UtilitiesModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { GeolocalisationRoutingModule } from './geolocalisation-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { AnalyseParVilleComponent } from './analyse-par-ville/analyse-par-ville.component';
import { CarteGlobVentesComponent } from './carte-glob-ventes/carte-glob-ventes.component';

@NgModule({
  declarations: [
    AnalyseParVilleComponent,
    CarteGlobVentesComponent
  ],
  imports: [
    CommonModule,
    GeolocalisationRoutingModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    DocsComponentsModule, 
    TableModule, 
    UtilitiesModule
  ]
})
export class GeolocalisationModule {
}

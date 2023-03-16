import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule, CardModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { ProduitsRoutingModule } from './produits-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import {AnalyseParProdComponent } from './analyse-par-prod/analyse-par-prod.component';
import { LiaisonProdComponent } from './liaison-prod/liaison-prod.component';
import { TabBordProdComponent } from './tab-bord-prod/tab-bord-prod.component';

@NgModule({
  declarations: [
    AnalyseParProdComponent,
    TabBordProdComponent,
    LiaisonProdComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    DocsComponentsModule
  ]
})
export class ProduitsModule {}


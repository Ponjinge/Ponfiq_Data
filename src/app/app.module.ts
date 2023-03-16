import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ProfilCliComponent } from './views/clients/profil-cli/profil-cli.component';
import { TabBordCliComponent } from './views/clients/tab-bord-cli/tab-bord-cli.component';
import { TabBordProdComponent } from './views/produits/tab-bord-prod/tab-bord-prod.component';
import { AnalyseParProdComponent } from './views/produits/analyse-par-prod/analyse-par-prod.component';
import { LiaisonProdComponent } from './views/produits/liaison-prod/liaison-prod.component';
import { TabBordEvolVentesComponent } from './views/ventes/tab-bord-evol-ventes/tab-bord-evol-ventes.component';
import { CarteGlobVentesComponent } from './views/geolocalisation/carte-glob-ventes/carte-glob-ventes.component';
import { AnalyseParVilleComponent } from './views/geolocalisation/analyse-par-ville/analyse-par-ville.component';
import { DocsComponentsModule } from "../components/docs-components.module";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
    declarations: [AppComponent, ...APP_CONTAINERS],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        IconSetService,
        Title
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AvatarModule,
        BreadcrumbModule,
        FooterModule,
        DropdownModule,
        GridModule,
        HeaderModule,
        SidebarModule,
        IconModule,
        PerfectScrollbarModule,
        NavModule,
        ButtonModule,
        FormModule,
        UtilitiesModule,
        ButtonGroupModule,
        ReactiveFormsModule,
        SidebarModule,
        SharedModule,
        TabsModule,
        ListGroupModule,
        ProgressModule,
        BadgeModule,
        ListGroupModule,
        CardModule,
        DocsComponentsModule
    ]
})
export class AppModule {
}

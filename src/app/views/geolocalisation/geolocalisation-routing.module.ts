import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalyseParVilleComponent } from './analyse-par-ville/analyse-par-ville.component';
import { CarteGlobVentesComponent} from './carte-glob-ventes/carte-glob-ventes.component'
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Geolocalisation',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form-control'
      },
      {
        path: 'analyse-par-ville',
        component: AnalyseParVilleComponent,
        data: {
          title: 'AnalyseParVille'
        }
      },
      {
        path: 'carte-glob-ventes',
        component: CarteGlobVentesComponent,
        data: {
          title: 'CarteGlobVentes'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeolocalisationRoutingModule {}


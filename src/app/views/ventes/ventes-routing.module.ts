import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabBordEvolVentesComponent } from './tab-bord-evol-ventes/tab-bord-evol-ventes.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Ventes',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form-control'
      },
      {
        path: 'tab-bord-evol-ventes',
        component: TabBordEvolVentesComponent,
        data: {
          title: 'TabBordEvolVentes'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentesRoutingModule {}


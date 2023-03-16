import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyseParProdComponent } from './analyse-par-prod/analyse-par-prod.component';
import { LiaisonProdComponent } from './liaison-prod/liaison-prod.component';
import { TabBordProdComponent } from './tab-bord-prod/tab-bord-prod.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Produits',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form-control'
      },
      {
        path: 'analyse-par-prod',
        component: AnalyseParProdComponent,
        data: {
          title: 'AnalyseParProd'
        }
      },
      {
        path: 'liaison-prod',
        component: LiaisonProdComponent,
        data: {
          title: 'LiaisonProd'
        }
      },
      {
        path: 'tab-bord-prod',
        component: TabBordProdComponent,
        data: {
          title: 'TabBordProd'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule {}


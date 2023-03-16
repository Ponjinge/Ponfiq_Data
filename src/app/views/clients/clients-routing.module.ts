import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilCliComponent } from './profil-cli/profil-cli.component';
import { TabBordCliComponent} from './tab-bord-cli/tab-bord-cli.component'
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Clients',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form-control'
      },
      {
        path: 'profil-cli',
        component: ProfilCliComponent,
        data: {
          title: 'ProfilCli'
        }
      },
      {
        path: 'tab-bord-cli',
        component: TabBordCliComponent,
        data: {
          title: 'TabBordCli'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {}


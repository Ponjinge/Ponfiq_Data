import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotreDashboardComponent } from './notreDashboard.component';

const routes: Routes = [
  {
    path: '',
    component: NotreDashboardComponent,
    data: {
      title: $localize`NotreDashboard`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotreDashboardRoutingModule {
}

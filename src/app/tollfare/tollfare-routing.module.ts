import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TollfarePage } from './tollfare.page';

const routes: Routes = [
  {
    path: '',
    component: TollfarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TollfarePageRoutingModule {}

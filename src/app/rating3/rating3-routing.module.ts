import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Rating3Page } from './rating3.page';

const routes: Routes = [
  {
    path: '',
    component: Rating3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rating3PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioF1Page } from './calendario-f1.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioF1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioF1PageRoutingModule {}
